import { getToken } from "next-auth/jwt"

export default async function getTokenUser(req, res) {
    const secret = process.env.SECRET
    const token = await getToken({ req, secret })
    console.log('token', token)
    if (!token) {
      return res.status(401).send('Unauthenticated')
    }

    return token;
}
