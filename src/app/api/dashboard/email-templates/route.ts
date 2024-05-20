import EmailTemplatesController from '@/server/controllers/emailTemplates';

export async function POST(request: Request) {
  const data = await request.json();

  const response = await EmailTemplatesController.create(
    data.userId,
    data.emailTemplate
  );

  return new Response(
    JSON.stringify({ data: response, message: 'Successfully Created' }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
