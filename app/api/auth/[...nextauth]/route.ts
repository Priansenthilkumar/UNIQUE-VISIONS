import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
const options = {}

const clientPromise = MongoClient.connect(uri, options)

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'dummy-client-id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'dummy-client-secret',
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/',
  },
  callbacks: {
    async session({ session, user }: any) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export const { handlers, auth, signIn, signOut } = handler
export const GET = handler.handlers?.GET || handler.GET
export const POST = handler.handlers?.POST || handler.POST
