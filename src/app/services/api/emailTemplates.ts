import {
  EmailTemplateType,
  ICreateEmailTemplate,
} from '@/app/interfaces/emailTemplates';

class EmailTemplatesAPI {
  public static async create(data: ICreateEmailTemplate, userId: number) {
    const response = await fetch('/api/dashboard/email-templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emailTemplate: {
          ...data,
          type: EmailTemplateType.NEWSLETTER,
          html: '',
        },
        userId,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to create email template');
    }
    return response.json();
  }

  public static async getAll(userId: number) {
    const response = await fetch(`/api/dashboard/email-templates/${userId}`);

    if (!response.ok) {
      throw new Error('Failed to get email templates');
    }
    return response.json();
  }

  public static async getById(templateId: string) {
    const response = await fetch(
      `/api/dashboard/email-templates/${templateId}`
    );

    if (!response.ok) {
      throw new Error('Failed to get email template');
    }
    return response.json();
  }

  public static async update(templateId: string, data: ICreateEmailTemplate) {
    const response = await fetch(
      `/api/dashboard/email-templates/${templateId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to update email template');
    }
    return response.json();
  }
}

export default EmailTemplatesAPI;
