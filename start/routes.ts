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
const ResetPasswordController = () => import('#controllers/reset_password_controller')
const SocialController = () => import('#controllers/social_controller')
const AuthController = () => import('#controllers/auth_controller')

router.on('/').render('pages/home').as('home')

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

    router.get('/github/redirect', [SocialController, 'githubRedirect']).as('github.redirect')
    router.get('/github/callback', [SocialController, 'githubCallback']).as('github.callback')
  })
  .prefix('/user')
  .use(middleware.guest())

// Routes for authenticated users
router
  .group(() => {
    router.delete('/logout', [AuthController, 'logout']).as('auth.logout').use(middleware.auth())
  })
  .prefix('/user')
