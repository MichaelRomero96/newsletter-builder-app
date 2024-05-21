import { ISendEmail } from '../../interfaces/sendEmails';

class sendEmailsAPI {
  public static async send(email: ISendEmail, templateId: number) {
    const response = await fetch('/api/dashboard/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        templateId,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to create email template');
    }
    return response.json();
  }
}

export default sendEmailsAPI;
