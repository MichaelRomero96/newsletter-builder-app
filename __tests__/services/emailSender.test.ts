// tests/emailService.test.ts
import EmailSenderService from '../../src/server/services/emailSender';

describe('EmailSenderService', () => {
  it('should create a singleton instance', () => {
    const instance1 = EmailSenderService.getInstance();
    const instance2 = EmailSenderService.getInstance();
    expect(instance1).toBe(instance2);
  });

  /* it('should throw an error if RESEND_API_KEY is not defined', () => {
    process.env.RESEND_API_KEY = undefined;

    expect(() => EmailSenderService.getInstance()).toThrow(
      'RESEND_API_KEY is not defined'
    );
  }); */
});
