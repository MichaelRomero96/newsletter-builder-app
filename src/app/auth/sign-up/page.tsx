'use client';
import Button from '@/components/ui/Button';
import TextField from '@/components/ui/TextField';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';
import createNewUser from './createNewUser';

const SignUpPage = () => {
  11;
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // validate passwords
  };

  const handleSignUp = async () => {
    // validate passwords
    if (user.password !== user.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { confirmPassword, ...newUser } = user;

    // create new user
    const response = await createNewUser(newUser);
    if (response) {
      router.push('/dashboard');
    } else {
      setError('An error occurred');
    }
  };

  useEffect(() => {
    if (user.password !== user.confirmPassword) {
      setError('Passwords do not match');
    }
  }, [user]);

  const goToSignIn = () => router.push('/auth/sign-in');
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
          className="flex items-center  text-center pb-20"
          style={{ margin: '0 auto' }}
        >
          <div className="grid gap-8">
            <h1
              className="
			 text-white text-5xl font-bold text-center"
            >
              Hello Friend!
            </h1>
            <h2 className=" text-white text-xl text-center">
              Enter your personal details and start journey with us
            </h2>
            <Button
              onClick={goToSignIn}
              variant="outline"
              className=" text-blue-500 hover:text-blue-700"
              size="lg"
            >
              SIGN IN
            </Button>
          </div>
        </div>
      </div>
      <div style={{ margin: '0 80px' }}>
        <h2 className="text-2xl font-bold text-blue-500 mb-5">
          Create an Account
        </h2>
        <div className="space-y-2">
          <TextField name="name" label="User name" onChange={handleChange} />
          <TextField name="email" label="Email" onChange={handleChange} />
          <TextField
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            onChange={handleChange}
          />
          {Boolean(error) && (
            <div className="text-center text-red-500">{error}</div>
          )}
          <div className="pt-5">
            <Button
              onClick={handleSignUp}
              size="lg"
              className=" w-full bg-blue-500 hover:bg-blue-400"
            >
              Sign Up
            </Button>
            <div className="my-4 text-center">Or</div>
            <Button size="lg" className=" w-full bg-blue-500 hover:bg-blue-400">
              Sign Up with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
