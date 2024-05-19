import EmailSenderService from '../../services/emailSender';
import { CreateEmailResponse, ISendEmail } from './interfaces';

class EmailController {
  public static async sendEmail(
    email: ISendEmail
  ): Promise<CreateEmailResponse> {
    try {
      const emailService = EmailSenderService.getInstance();
      return Promise.resolve(emailService.emails.send(email));
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default EmailController;
