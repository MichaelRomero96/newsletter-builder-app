import NextAuth, { User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

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
      const response = await fetch(request);
      if (!response.ok) return null;
      return (await response.json()) ?? null;
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
