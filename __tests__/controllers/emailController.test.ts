import EmailSenderController from '../../src/app/api/controllers/emailSender';

describe('EmailSenderController', () => {
  it('Successfully deliver an email', async () => {
    //Testing emails from: resend.com/docs/dashboard/emails/send-test-emails#test-delivered-emails
    const email = {
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'hello world',
      text: 'it works!',
    };
    const response = await EmailSenderController.sendEmail(email);
    expect(response.data).toBeDefined();
  });

  it('Bounced an email', async () => {
    const email = {
      from: 'Acme <onboarding@resend.dev>',
      to: ['bounced@resend.dev'],
      subject: 'hello world',
      text: 'it works!',
    };
    const response = await EmailSenderController.sendEmail(email);
    expect(response.error).toBe(null);
  });
});
