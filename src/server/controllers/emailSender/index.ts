import EmailSenderService from '../../services/emailSender';
import db from '../../services/db';
import {
  CreateEmailSenderEmailResponse,
  ISendEmail,
  ISendEmailWithAttachments,
} from './interfaces';
import { SEND_EMAIL_STATUS } from './interfaces';

class EmailSenderController {
  public static async sendEmail(templateId: number, email: ISendEmail) {
    try {
      let parsedEmail = email.from;
      // verify if the email contains 'resend.dev' domain, if not, set the domain to 'resend.dev'
      // the email comes in this format: "name@domain.com"
      // the email could be in this format: "<Name> email@domain.com"
      // if it is, we need to just send the domain to 'resend.dev' keeping in mind the format
      if (parsedEmail.includes('<')) {
        parsedEmail = `<${parsedEmail.split('<')[1]}`;
      } else if (!parsedEmail.includes('@resend.dev')) {
        parsedEmail = `${parsedEmail.split('@')[0]}@resend.dev`;
      }

      const emailSenderService = EmailSenderService.getInstance();
      const sentEmail: CreateEmailSenderEmailResponse =
        await emailSenderService.emails.send({ ...email, from: parsedEmail });

      if (sentEmail.error || !sentEmail.data) {
        throw new Error('Error sending email');
      }

      const { html, attachments, ...rest } = email as ISendEmailWithAttachments;

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
