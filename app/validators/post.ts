import vine from '@vinejs/vine'

export const storePostValidator = vine.compile(
  vine.object({
    title: vine
      .string()
      .minLength(3)
      .unique(async (db, value) => {
        const postFound = await db.from('posts').where('title', value).first()
        return !postFound
      }),
    thumbnail: vine.file({ extnames: ['png', 'jpg', 'jpeg'], size: '10mb' }).optional(),
    content: vine.string(),
  })
)

export const updatePostValidator = vine.compile(
  vine.object({
    title: vine.string().unique(async (db, value, field) => {
      const postFound = await db
        .from('posts')
        .whereNot('id', field.data.params.id)
        .where('title', value)
        .first()
      return !postFound
    }),
    thumbnail: vine.file({ extnames: ['png', 'jpg', 'jpeg'], size: '10mb' }).optional(),
    content: vine.string(),
  })
)
