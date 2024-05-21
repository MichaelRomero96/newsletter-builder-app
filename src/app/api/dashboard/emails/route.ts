import EmailSenderController from '@/server/controllers/emailSender';

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data.templateId, data.email);
  const response = await EmailSenderController.sendEmail(
    data.templateId,
    data.email
  );

  return new Response(
    JSON.stringify({ data: response, message: 'Email successfully sent' }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
