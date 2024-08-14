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
const AuthController = () => import('#controllers/auth_controller')

router.on('/').render('pages/home').as('home')

router
  .group(() => {
    router
      .get('/register', [AuthController, 'register'])
      .as('auth.register')
      .use(middleware.guest())
    router.post('/register', [AuthController, 'handleRegister']).use(middleware.guest())

    router.get('/login', [AuthController, 'login']).as('auth.login').use(middleware.guest())
    router.post('/login', [AuthController, 'handleLogin']).use(middleware.guest())

    router.delete('/logout', [AuthController, 'logout']).as('auth.logout').use(middleware.auth())
  })
  .prefix('/user')
