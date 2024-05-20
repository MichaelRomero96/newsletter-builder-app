import { UserErrors } from '../../src/constants/user/errors';
import UsersController from '../../src/server/controllers/user';

describe('UsersController', () => {
  const testUser = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    password: '123456',
  };

  it('should create a new user', async () => {
    const newUser = await UsersController.create(testUser);
    expect(newUser.id).toBeDefined();
  });

  it('should not create a new user if the email already exists', async () => {
    try {
      await UsersController.create(testUser);
    } catch (error: any) {
      expect(error.message).toBe(UserErrors.AlreadyExists);
    }
  });

  it('should find an user by email', async () => {
    const foundUser = await UsersController.findByEmail(testUser.email);
    expect(foundUser?.id).toBeDefined();
  });

  it('should find an user by id', async () => {
    const userToFind = await UsersController.findByEmail(testUser.email);

    if (!userToFind) throw new Error('User not found');

    const foundUser = await UsersController.findById(userToFind.id);
    expect(foundUser?.id).toBeDefined();
  });

  it('should update an user', async () => {
    const userToUpdate = await UsersController.findByEmail(testUser.email);

    if (!userToUpdate) throw new Error('User not found');

    const updatedUser = await UsersController.update(userToUpdate.id, {
      name: 'Jane Doe',
    });
    expect(updatedUser.id).toBeDefined();
  });

  it('should delete an user', async () => {
    const userToDelete = await UsersController.findByEmail(testUser.email);

    if (!userToDelete) {
      throw new Error('User not found');
    }

    const deletedUser = await UsersController.delete(userToDelete.id);
    expect(deletedUser.id).toBeDefined();
  });
});
