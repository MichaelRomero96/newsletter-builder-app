import { auth } from '@/app/api/auth/[...nextauth]/route';
import MainLayout from '@/components/MainLayout';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}
const LoginPage: FC<Props> = async ({ children }) => {
  const session = await auth();

  if (!session) {
    redirect('/auth/sign-in');
  }

  return <MainLayout>{children}</MainLayout>;
};

export default LoginPage;
