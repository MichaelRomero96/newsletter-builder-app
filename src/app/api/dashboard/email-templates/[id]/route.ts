import { IEmailTemplate } from '@/app/interfaces/emailTemplates';
import EmailTemplatesController from '@/server/controllers/emailTemplates';
import { Prisma } from '@prisma/client';

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

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
    body: IEmailTemplate;
  }
) {
  const template = (await request.json()) as Prisma.EmailTemplateUpdateInput;
  const templateId = params.id;

  if (!templateId) {
    throw new Error('User ID is required');
  }

  const data = await EmailTemplatesController.update(
    Number(templateId),
    template
  );

  if (!data) {
    throw new Error('Failed to update email template');
  }

  return Response.json(data);
}
