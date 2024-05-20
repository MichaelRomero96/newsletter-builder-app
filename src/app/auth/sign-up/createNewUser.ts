import signIn from '../sign-in/signIn';
import { ICreateUser } from './interfaces';

const createNewUser = async (user: ICreateUser) => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (res.ok) {
    const signInResponse = await signIn(user.email, user.password);
    return signInResponse;
  }
};

export default createNewUser;
