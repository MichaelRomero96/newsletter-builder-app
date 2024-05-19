'use client';
import { FC } from 'react';
import Header from './Header';
import Sidebar from './Sidebar/Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => (
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

export default MainLayout;
