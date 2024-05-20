import EmailTemplatesController from '@/server/controllers/emailTemplates';

export async function POST(request: Request) {
  const data = await request.json();

  await EmailTemplatesController.create(data);

  return new Response(JSON.stringify({ message: 'Hello, world!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
