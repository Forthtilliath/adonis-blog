import Post from '#models/post'
import FileUploaderService from '#services/file_uploader_service'
import { storePostValidator, updatePostValidator } from '#validators/post'
import { inject } from '@adonisjs/core'
import stringHelpers from '@adonisjs/core/helpers/string'
import type { HttpContext } from '@adonisjs/core/http'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import { unlink } from 'node:fs/promises'

@inject()
export default class PostController {
  constructor(private readonly fileUploaderService: FileUploaderService) {}
  /**
   * Display a list of resource
   */
  async index({ view, request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 12
    const posts = await Post.query()
      .select('id', 'title', 'thumbnail', 'slug', 'user_id')
      .preload('user', (u) => u.select('username'))
      .orderBy('created_at', 'desc')
      .paginate(page, limit)
    return view.render('pages/home', { posts })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/post/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, auth, session, response }: HttpContext) {
    const { title, content, thumbnail } = await request.validateUsing(storePostValidator)

    const slug = stringHelpers.slug(title, { lower: true })
    const filePath = await this.fileUploaderService.upload(thumbnail, slug, 'posts')

    await Post.create({ title, slug, content, thumbnail: filePath, userId: auth.user!.id })

    session.flash('success', 'Votre article a bien été publié')
    return response.redirect().toRoute('home')
  }

  /**
   * Show individual record
   */
  async show({ params: { slug, id }, response, view }: HttpContext) {
    const post = await Post.findByOrFail('id', id)
    if (post.slug !== slug) {
      return response.redirect().toRoute('post.show', { slug: post.slug, id })
    }

    const marked = new Marked(
      markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext'
          return hljs.highlight(code, { language }).value
        },
      })
    )
    const content = marked.parse(post.content)

    return view.render('pages/post/show', { title: post.title, content })
  }

  /**
   * Edit individual record
   */
  async edit({ params: { id }, view }: HttpContext) {
    const post = await Post.findOrFail(id)
    return view.render('pages/post/edit', { post })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params: { id }, request, session, response }: HttpContext) {
    const { title, content, thumbnail } = await request.validateUsing(updatePostValidator)
    const post = await Post.findOrFail(id)
    if (post.title !== title) {
      post.merge({ title, slug: stringHelpers.slug(title, { lower: true }) })
    }
    if (thumbnail) {
      await unlink(`public/${post.thumbnail}`)
      const filePath = await this.fileUploaderService.upload(thumbnail, '', 'posts')
      post.merge({ thumbnail: filePath })
    }
    if (post.content !== content) {
      post.merge({ content })
    }
    await post.save()

    session.flash('success', 'Votre article a bien été mis à jour')
    return response.redirect().toRoute('post.show', { slug: post.slug, id: post.id })
  }

  /**
   * Delete record
   */
  async destroy({ params: { id }, session, response }: HttpContext) {
    const post = await Post.findOrFail(id)
    await unlink(`public/${post.thumbnail}`)
    await post.delete()

    session.flash('success', 'Votre article a bien été supprimé!')
    return response.redirect().toRoute('home')
  }
}
