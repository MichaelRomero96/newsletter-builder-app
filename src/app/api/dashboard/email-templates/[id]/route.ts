import EmailTemplatesController from '@/server/controllers/emailTemplates';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id;

  if (!userId) {
    throw new Error('User ID is required');
  }

  const data = await EmailTemplatesController.getAllByUserId(Number(userId));

  if (!data) {
    throw new Error('Failed to get email templates');
  }

  return Response.json(data.emailTemplates);
}
