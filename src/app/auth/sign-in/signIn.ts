import { getCsrfToken } from 'next-auth/react';

const signIn = async (email: string, password: string) => {
  const csrfToken = await getCsrfToken();

  const res = await fetch('/api/auth/callback/credentials', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      csrfToken,
      email,
      password,
    }),
  });

  return res.ok;

  /*  if (res.ok) {
    router.push('/dashboard');
  } else {
    setIsError(true);
  } */
};

export default signIn;
