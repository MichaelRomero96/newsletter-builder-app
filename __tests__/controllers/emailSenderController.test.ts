import EmailSenderController from '../../src/server/controllers/emailSender';
import UsersController from '../../src/server/controllers/user';
import EmailTemplateController from '../../src/server/controllers/emailTemplates';

describe('EmailSenderController', () => {
  let user: {
    id: number;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  };
  let template: {
    id: number;
    type: string;
    name: string;
    subject: string | null;
    from: string | null;
    html: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: number | null;
  };

  const newTemplate = {
    name: 'Sample Template',
    subject: 'Test Subject',
    html: '<h1>Hello world</h1>',
    from: 'Acme <onboarding@resend.dev>',
    type: 'newsletter',
  };

  let emailId: number;

  it('Register a new user for create a new template', async () => {
    const newUser = {
      name: 'John Doe',
      email: 'test-email-123@gmail.com',
      password: '123456',
    };
    user = await UsersController.create(newUser);
  });

  it('Create a new template for a registered user', async () => {
    template = await EmailTemplateController.create(user.id, newTemplate);
    expect(template).toHaveProperty('id');
  });

  it('Successfully deliver an email', async () => {
    //Testing emails from: resend.com/docs/dashboard/emails/send-test-emails#test-delivered-emails
    const email = {
      to: ['delivered@resend.dev'],
      subject: 'hello world',
      html: template.html,
    };

    if (!template.from && !template.html) {
      throw new Error('Template from is required');
    }

    const response = await EmailSenderController.sendEmail(template.id, {
      ...email,
      from: template.from || '',
      html: template.html || '',
    });
    emailId = response.id;
    expect(response).toBeDefined();
  });

  /* it('Bounced an email', async () => {
    const email = {
      from: 'Acme <onboarding@resend.dev>',
      to: ['bounced@resend.dev'],
      subject: 'hello world',
    };

    const response = (await EmailSenderController.sendEmail(template.id, {
      ...email,
      html: template.html,
    })) as unknown as Error;
    expect(response).toBe('Error sending email');
  }); */

  it('Delete the sent email', async () => {
    const deletedEmail = await EmailSenderController.delete(emailId);
    expect(deletedEmail).toHaveProperty('id');
  });

  it('Delete the template', async () => {
    const response = await EmailTemplateController.delete(template.id);
    expect(response).toHaveProperty('id');
  });

  it('Delete the registered user', async () => {
    const deletedUser = await UsersController.delete(user.id);
    expect(deletedUser).toHaveProperty('id');
  });
  1;
});
