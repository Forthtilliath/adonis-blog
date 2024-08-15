import Post from '#models/post'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const [, user] = await User.createMany([
      {
        username: 'admin',
        email: 'admin@monblog.fr',
        password: 'admin123',
        role: 'admin',
        thumbnail: '/users/admin.jpg',
      },
      {
        username: 'forth',
        email: 'forth@monblog.fr',
        password: 'user1234',
        thumbnail: '/users/forth.png',
      },
    ])
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
