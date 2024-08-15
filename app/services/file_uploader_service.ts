import { writeFile } from 'node:fs/promises'
import { toPng } from 'jdenticon'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import { MultipartFile } from '@adonisjs/core/bodyparser'

export default class FileUploaderService {
  async upload(thumbnail: MultipartFile | undefined, filename: string, path: string) {
    if (!thumbnail) {
      const png = toPng(filename, 100)
      await writeFile(`public/${path}/${filename}.png`, png)
    } else {
      await thumbnail.move(app.makePath(`public/${path}`), {
        name: `${cuid()}.${thumbnail.extname}`,
      })
    }

    return `/${path}/${thumbnail?.fileName || `${filename}.png`}`
  }
}
