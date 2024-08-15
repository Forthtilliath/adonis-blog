import Post from '#models/post'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class PostSeeder extends BaseSeeder {
  static environment = ['development', 'testing']

  async run() {
    const user = await User.findByOrFail('username', 'forth')

    await Post.createMany([
      {
        title: 'Mon premier article',
        slug: 'mon-premier-article',
        content: 'Ceci est mon premier article.',
        userId: user.id,
        thumbnail: '/posts/mon-premier-article.png',
      },
      {
        title: 'Mon second article',
        slug: 'mon-second-article',
        content: `# BBBB BBB,

## Test 2

pourquoi le premier post marche pas ?!`,
        userId: user.id,
        thumbnail: '/posts/mon-second-article.png',
      },
    ])
  }
}
