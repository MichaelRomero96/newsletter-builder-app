'use client';
import Button from '@/components/ui/Button';
import TextField from '@/components/ui/TextField';
import { useRouter } from 'next/navigation';
import React from 'react';

const SignInPage = () => {
  const router = useRouter();
  const goToSignUp = () => router.push('/auth/sign-up');
  return (
    <div
      className="grid grid-cols-2 justify-center items-center"
      style={{
        height: '100vh',
      }}
    >
      <div
        className="bg-blue-500 flex items-center "
        style={{ minWidth: '100%', minHeight: '100%' }}
      >
        <div
          className="flex items-center w-3/4 text-center pb-20"
          style={{ margin: '0 auto' }}
        >
          <div className="grid gap-8">
            <h1
              className="
			 text-white text-5xl font-bold text-center"
            >
              Welcome back!
            </h1>
            <h2 className=" text-white text-xl text-center">
              To keep connected with us please login with your personal info
            </h2>
            <Button
              onClick={goToSignUp}
              variant="outline"
              className="text-md text-blue-500 hover:text-blue-700"
              size="lg"
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
      <div style={{ margin: '0 80px' }}>
        <h2 className="text-2xl font-bold text-blue-500 mb-5">Sign in</h2>
        <div className="space-y-2">
          <TextField label="Email" />
          <TextField label="Password" type="password" />
          <div className="pt-5">
            <Button size="lg" className=" w-full bg-blue-500 hover:bg-blue-400">
              Sign in
            </Button>
            <div className="my-4 text-center">Or</div>
            <Button size="lg" className=" w-full bg-blue-500 hover:bg-blue-400">
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
