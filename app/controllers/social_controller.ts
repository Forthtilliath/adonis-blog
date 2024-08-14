import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class SocialController {
  githubRedirect({ ally }: HttpContext) {
    ally.use('github').redirect((req) => {
      req.scopes(['user'])
    })
  }

  async githubCallback({ ally, response, session, auth }: HttpContext) {
    const gh = ally.use('github')

    if (gh.accessDenied()) {
      session.flash('error', "Vous avez annulé l'autorisation d'accès.")
      return response.redirect().toRoute('auth.login')
    }

    if (gh.stateMisMatch()) {
      session.flash('error', "Erreur lors de l'autorisation.")
      return response.redirect().toRoute('auth.login')
    }

    if (gh.hasError()) {
      session.flash('error', "Erreur lors de l'autorisation.")
      return response.redirect().toRoute('auth.login')
    }

    const ghUser = await gh.user()
    const user = await User.findBy('email', ghUser.email)

    if (!user) {
      const newUser = await User.create({
        email: ghUser.email,
        username: ghUser.name,
        thumbnail: ghUser.avatarUrl,
      })
      await auth.use('web').login(newUser)
    } else {
      await auth.use('web').login(user)
    }

    session.flash('success', 'Connecté avec guthub !')
    return response.redirect().toRoute('home')
  }
}
