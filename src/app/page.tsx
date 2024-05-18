import { fetchUserData } from './services/api';

export default async function Home() {
  const userData = await fetchUserData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(userData, null, 2)}
    </main>
  );
}
