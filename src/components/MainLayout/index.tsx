'use client';
import { FC, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar/Sidebar';
import { useSessionStore } from '@/store';

interface Props {
  children: React.ReactNode;
  session: any;
}

const MainLayout: FC<Props> = ({ children, session }) => {
  const setSession = useSessionStore((state) => state.setSession);

  useEffect(() => {
    setSession(session);
  }, []);

  return (
    <>
      <Header />
      <div className="flex h-screen border-collapse overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1 mt-8 mx-20">
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
