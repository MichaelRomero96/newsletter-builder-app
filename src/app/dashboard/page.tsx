'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DashboardPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push?.('/dashboard/email-templates');
  }, []);

  return null;
};

export default DashboardPage;
