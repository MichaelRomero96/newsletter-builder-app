import { ICreateEmailTemplate } from '@/app/interfaces/emailTemplates';

class EmailTemplatesAPI {
  public static async create(data: ICreateEmailTemplate) {
    const response = await fetch('/api/dashboard/email-templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to create email template');
    }
    return response.json();
  }
}

export default EmailTemplatesAPI;
