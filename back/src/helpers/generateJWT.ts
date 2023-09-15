import jwt from 'jsonwebtoken'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const generateJWT = async (id: number) => {
  return await new Promise((resolve, reject) => {
    const payload = { id }

    jwt.sign(
      payload,
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
      process.env.TOKEN_SECRET || 'tokentest',
      {
        expiresIn: '4h'
      },
      (err, token) => {
        if (err != null) {
          console.log(err)
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('Could not generate token')
        }
        resolve(token)
      }
    )
  })
}
