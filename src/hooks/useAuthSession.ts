'use client';
import { useEffect, useState } from 'react';
import { useSessionStore } from '../store';

export default function useAuthSession() {
  const session = useSessionStore((state) => state.session);
  const setSession = useSessionStore((state) => state.setSession);
  const [userId, setUserId] = useState<number>();

  useEffect(() => {
    if (!session?.user?.email) return;
    if (session.user.id) return;

    const getUserId = async () => {
      const userId = window.localStorage.getItem('userId');
      if (userId) {
        setUserId(Number(userId));
        return;
      }
      const res = await fetch('/api/auth/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(session.user),
      });

      const data = await res.json();
      await setUserId(data.id);
      window.localStorage.setItem('userId', data.id);
    };

    getUserId();
  }, [session, setSession]);

  return { user: session.user || {}, id: userId };
}
