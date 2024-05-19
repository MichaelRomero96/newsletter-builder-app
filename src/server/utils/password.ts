import bcrypt from 'bcrypt';

class Password {
  public static async encrypt(password: string, saltRounds = 10) {
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw error;
    }
  }

  public static async compare(password: string, hashedPassword: string) {
    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      return isMatch;
    } catch (error) {
      throw error;
    }
  }
}

export default Password;
