import { Resend } from 'resend';

class EmailSenderService extends Resend {
  private static instance: EmailSenderService;

  private constructor(apiKey: string) {
    super(apiKey);
  }

  public static getInstance(): EmailSenderService {
    try {
      if (!EmailSenderService.instance) {
        if (process.env.RESEND_API_KEY === undefined) {
          throw new Error('RESEND_API_KEY is not defined');
        }
        EmailSenderService.instance = new EmailSenderService(
          process.env.RESEND_API_KEY
        );
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
    return EmailSenderService.instance;
  }
}

export default EmailSenderService;
