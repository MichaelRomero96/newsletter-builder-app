import UsersController from '../../src/server/controllers/users';
import EmailTemplateController from '../../src/server/controllers/emailTemplates';

describe('emailtemplateController', () => {
  let user: any;
  let templateId: number;

  const newTemplate = {
    name: 'Sample Template',
    subject: 'Test Subject',
    body: '<h1>Hello world</h1>',
    type: 'newsletter',
  };

  it('Register a new user for create a new template', async () => {
    const newUser = {
      name: 'John Doe',
      email: 'john-template.test-6@gmail.com',
      password: '123456',
    };

    user = await UsersController.create(newUser);
  });

  it('Create a new template for a registered user', async () => {
    const template = await EmailTemplateController.create(user.id, newTemplate);

    expect(template).toHaveProperty('id');
    templateId = template.id;
  });

  it('Get all templates for a registered user', async () => {
    const userInformation = await EmailTemplateController.getAllByUserId(
      user.id
    );
    console.table(userInformation?.emailTemplates);
    expect(userInformation?.emailTemplates).toHaveLength(1);
  });

  it('Update an existing template', async () => {
    const updatedTemplate = {
      ...newTemplate,
      name: 'Updated Template',
    };

    const template = await EmailTemplateController.update(
      templateId,
      updatedTemplate
    );

    expect(template).toHaveProperty('id');
    expect(template.name).toBe('Updated Template');
  });

  it('Delete an existing template', async () => {
    const template = await EmailTemplateController.delete(templateId);

    expect(template).toHaveProperty('id');
  });

  it('Delete the registered user', async () => {
    const deletedUser = await UsersController.delete(user.id);

    expect(deletedUser).toHaveProperty('id');
  });
});
