import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectMongo } from "../../../utils/connectMongo";
import { loginValidation } from "../../../utils/validation";
import User from "../../../models/user";
import bcrypt from 'bcryptjs';

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = await login(credentials)

        return user;
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
  secret: process.env.SECRET,
  jwt: {
    secret: process.env.SECRET,
    encryption: true,
  },
})

async function login(credentials) {
  const { error } = loginValidation({ email: credentials.email, password: credentials.password })

  if (error) {
    throw new Error('Bad validation', 401)
  }

  try {
    await connectMongo();
    const user = await User.findOne({ email: credentials.email })

    if (!user) {
      throw new Error('Email does not exist')
    }

    const validPass = await bcrypt.compare(credentials.password, user.password)

    if (!validPass) {
      throw new Error('Password incorrect')
    }

    return user
  } catch (error) {
    throw new Error(`[login]: ${error}`)
  }
}
