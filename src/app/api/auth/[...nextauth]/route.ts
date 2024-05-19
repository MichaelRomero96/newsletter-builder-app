import NextAuth, { User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import UsersController from '../../../../server/controllers/users';
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

      if (!userFound) return null;

      const isMatch = await Password.compare(
        password as string,
        userFound.password
      );

      if (!isMatch) return null;

      return { userFound: { ...userFound, id: String(userFound.id) } } as User;
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
});

export const { GET, POST } = handlers;
