import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    username: vine
      .string()
      .trim()
      .minLength(4)
      .alphaNumeric()
      .unique(async (db, value) => {
        const userFound = await db.from('users').where('username', value).first()
        return !userFound
      }),
    email: vine
      .string()
      .email()
      .maxLength(255)
      .unique(async (db, value) => {
        const userFound = await db.from('users').where('email', value).first()
        return !userFound
      }),
    password: vine.string().minLength(8),
    thumbnail: vine.file({ extnames: ['png', 'jpg', 'jpeg'], size: '10mb' }).optional(),
  })
)

export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8),
  })
)

export const forgotPasswordValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
  })
)

export const resetPasswordValidator = vine.compile(
  vine.object({
    token: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(8).confirmed(),
  })
)
