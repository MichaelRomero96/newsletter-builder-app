import db from '../../services/db';

class Users {
  public static async create(user: any) {
    try {
      const newUser = await db.user.create(user);
    } catch (error) {}
  }
}

export default Users;
