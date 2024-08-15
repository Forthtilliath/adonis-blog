import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class UserSeeder extends BaseSeeder {
  static environment = ['development', 'testing']

  async run() {
    await User.createMany([
      {
        username: 'admin',
        email: 'admin@monblog.fr',
        password: 'admin123',
        role: 'admin',
        thumbnail: '/users/admin.jpg',
      },
      {
        username: 'forth',
        email: 'user@monblog.fr',
        password: 'user1234',
        thumbnail: '/users/forth.png',
      },
    ])
  }
}
