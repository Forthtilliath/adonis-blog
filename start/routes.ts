/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const PostController = () => import('#controllers/post_controller')
const ResetPasswordController = () => import('#controllers/reset_password_controller')
const SocialController = () => import('#controllers/social_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', [PostController, 'index']).as('home')

router
  .get('/post/:slug/:id', [PostController, 'show'])
  .as('post.show')
  .where('id', router.matchers.uuid())
  .where('slug', router.matchers.slug())

// Routes for guests
router
  .group(() => {
    router.get('/register', [AuthController, 'register']).as('auth.register')
    router.post('/register', [AuthController, 'handleRegister'])

    router.get('/login', [AuthController, 'login']).as('auth.login')
    router.post('/login', [AuthController, 'handleLogin'])

    router
      .get('/forgot-password', [ResetPasswordController, 'forgotPassword'])
      .as('auth.forgot-password')
    router.post('/forgot-password', [ResetPasswordController, 'handleForgotPassword'])

    router
      .get('/reset-password', [ResetPasswordController, 'resetPassword'])
      .as('auth.reset-password')
    router
      .post('/reset-password', [ResetPasswordController, 'handleResetPassword'])
      .as('auth.handle-reset-password')

    router.get('/github/redirect', [SocialController, 'githubRedirect']).as('github.redirect')
    router.get('/github/callback', [SocialController, 'githubCallback']).as('github.callback')
  })
  .prefix('/user')
  .use(middleware.guest())

// Routes for authenticated users
router
  .group(() => {
    router.delete('/user/logout', [AuthController, 'logout']).as('auth.logout')

    router
      .group(() => {
        router.get('/create', [PostController, 'create']).as('post.create')
        router.post('/create', [PostController, 'store'])
        router
          .get('/:id/edit', [PostController, 'edit'])
          .as('post.edit')
          .where('id', router.matchers.uuid())
        router
          .put('/:id/edit', [PostController, 'update'])
          .as('post.update')
          .where('id', router.matchers.uuid())
        router
          .delete('/:id/delete', [PostController, 'destroy'])
          .as('post.delete')
          .where('id', router.matchers.uuid())
      })
      .prefix('/post')
  })
  .use(middleware.auth())
