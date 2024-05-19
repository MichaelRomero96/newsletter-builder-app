import EmailSenderService from '../../services/emailSender';
import db from '../../services/db';
import { CreateEmailSenderEmailResponse, ISendEmail } from './interfaces';
import { SEND_EMAIL_STATUS } from './interfaces';

class EmailSenderController {
  public static async sendEmail(templateId: number, email: ISendEmail) {
    try {
      const emailSenderService = EmailSenderService.getInstance();
      const sentEmail: CreateEmailSenderEmailResponse =
        await emailSenderService.emails.send(email);

      if (sentEmail.error || !sentEmail.data) {
        throw new Error('Error sending email');
      }

      const { html, ...rest } = email;

      const newEmail = await db.sentEmail.create({
        data: {
          status: SEND_EMAIL_STATUS.SENT,
          ...rest,
          emailServiceId: sentEmail.data?.id,
          emailTemplate: {
            connect: {
              id: templateId,
            },
          },
        },
      });
      return Promise.resolve(newEmail);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async delete(emailId: number) {
    try {
      const email = await db.sentEmail.delete({
        where: {
          id: emailId,
        },
      });
      return Promise.resolve(email);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default EmailSenderController;
