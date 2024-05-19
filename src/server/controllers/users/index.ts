import { UserErrors } from '../../../constants/user/errors';
import PasswordEncryptor from '../../utils/password';
import db from '../../services/db';
import { Prisma } from '@prisma/client';

class Users {
  public static async create(user: Prisma.UserCreateInput) {
    try {
      const existingUser = await Users.findByEmail(user.email);

      if (existingUser) {
        throw new Error(UserErrors.AlreadyExists);
      }

      const encryptedPassword = await PasswordEncryptor.encrypt(user.password);
      const newUser = await db.user.create({
        data: { ...user, password: encryptedPassword },
      });
      return Promise.resolve(newUser);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async findByEmail(email: string) {
    try {
      const user = await db.user.findUnique({
        where: { email },
      });
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async findById(id: number) {
    try {
      const user = await db.user.findUnique({
        where: { id },
      });
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async update(id: number, data: Prisma.UserUpdateInput) {
    try {
      const user = await db.user.update({
        where: { id },
        data,
      });
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async delete(id: number) {
    try {
      const deletedUser = await db.user.delete({
        where: { id },
      });
      return Promise.resolve(deletedUser);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default Users;
