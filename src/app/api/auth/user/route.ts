import UsersController from '@/server/controllers/user';

export async function POST(request: Request) {
  const user = await request.json();

  const response = await UsersController.findByEmail(user.email);

  console.log(response);

  if (!response) {
    return new Response(JSON.stringify({ message: 'User not found' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ id: response.id }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
