import { auth } from '@/app/api/auth/[...nextauth]/route';
import MainLayout from '@/components/MainLayout';
import { SessionProvider } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import { useSessionStore } from '../../store';

interface Props {
  children: React.ReactNode;
}
const LoginPage: FC<Props> = async ({ children }) => {
  const session = await auth();

  if (!session) {
    redirect('/auth/sign-in');
  }

  return (
    <SessionProvider>
      <MainLayout session={session}>{children}</MainLayout>
    </SessionProvider>
  );
};

export default LoginPage;
