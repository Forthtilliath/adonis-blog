import Token from '#models/token'
import User from '#models/user'
import { forgotPasswordValidator } from '#validators/auth'
import stringHelpers from '@adonisjs/core/helpers/string'
import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'
import { DateTime } from 'luxon'

export default class ResetPasswordController {
  forgotPassword({ view }: HttpContext) {
    return view.render('pages/auth/forgot_password')
  }

  async handleForgotPassword({ request, session, response }: HttpContext) {
    const { email } = await request.validateUsing(forgotPasswordValidator)

    const user = await User.findBy('email', email)

    if (!user || !user.password) {
      session.flash('success', 'Aucun compte associé à cette adresse email')
      return response.redirect().toRoute('auth.login')
    }

    const token = stringHelpers.generateRandom(64)
    const url = `http://localhost:${process.env.PORT}/user/reset-password/${token}&email=${email}`
    await Token.create({
      token,
      email: user.email,
      expiresAt: DateTime.now().plus({ minutes: 10 }),
    })

    await mail.send((message) => {
      message
        .to(user.email)
        .from('no-reply@monblog.fr')
        .subject('Demande de réinitialisation de mot de passe')
        .htmlView('emails/forgot_password', { user, url })
    })

    session.flash('success', 'Un email vous a été envoyé')
    return response.redirect().toRoute('auth.login')
  }
}
