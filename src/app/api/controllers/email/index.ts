import EmailSenderService from '../../services/emailSender';

interface IEmail {
  from: string;
  to: string[];
  subject: string;
  text: string;
}

class EmailController {
  public static async sendEmail(email: IEmail): Promise<void> {
    try {
      const emailSender = EmailSenderService.getInstance();
      await Promise.resolve(emailSender.emails.send(email));
    } catch (error) {
      Promise.reject(error);
    }
  }
}

export default EmailController;
