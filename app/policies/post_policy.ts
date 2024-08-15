import User from '#models/user'
import Post from '#models/post'
import { BasePolicy } from '@adonisjs/bouncer'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class PostPolicy extends BasePolicy {
  async before(user: User) {
    return user && user.role === 'admin'
  }
  alterPost(user: User, post: Post): AuthorizerResponse {
    return user.id === post.userId
  }
}
