import bcrypt from 'bcrypt';

class PasswordEncryptor {
  public static async encrypt(password: string, saltRounds = 10) {
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw error;
    }
  }
}

export default PasswordEncryptor;
