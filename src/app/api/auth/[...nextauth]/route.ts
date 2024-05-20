import NextAuth, { User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import UsersController from '../../../../server/controllers/user';
import Password from '@/server/utils/password';

const getCredentialsProvider = () => {
  return Credentials({
    name: 'Credentials',
    credentials: {
      email: { label: 'E-mail', type: 'text' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize(
      credentials: Partial<Record<'email' | 'password', unknown>>,
      request: Request
    ) {
      const { email, password } = credentials;

      const userFound = await UsersController.findByEmail(email as string);

      if (!userFound) {
        throw new Error('No user found with this email');
      }

      const isMatch = await Password.compare(
        password as string,
        userFound.password
      );

      if (!isMatch) {
        throw new Error('Incorrect password');
      }

      if (userFound) {
        return Promise.resolve({
          ...userFound,
          id: String(userFound.id),
        } as User);
      } else {
        return Promise.resolve(null);
      }
    },
  });
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    getCredentialsProvider(),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (typeof token.user === 'object' && token.user !== null) {
        session.user = {
          ...token.user,
          id: token.sub || '',
          email: token.email || '',
          emailVerified:
            typeof token.email_verified === 'string'
              ? new Date(token.email_verified)
              : null,
        };
      }
      return Promise.resolve(session);
    },
  },
});

export const { GET, POST } = handlers;
