import EmailSenderService from '../../services/emailSender';
import { CreateEmailResponse, ISendEmail } from './interfaces';

class EmailSenderController {
  public static async sendEmail(
    email: ISendEmail
  ): Promise<CreateEmailResponse> {
    try {
      const emailSenderService = EmailSenderService.getInstance();
      return Promise.resolve(emailSenderService.emails.send(email));
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default EmailSenderController;
