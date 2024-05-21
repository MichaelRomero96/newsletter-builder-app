import { IEmailTemplate } from '@/app/interfaces/emailTemplates';
import sendEmailsAPI from '@/app/services/api/sendEmails';
import Button from '@/components/ui/Button';
import TextField from '@/components/ui/TextField';
import { FC, useState } from 'react';

interface Props {
  emailTemplate: IEmailTemplate;
}
const SendEmailsView: FC<Props> = ({ emailTemplate }) => {
  const [recipient, setRecipient] = useState('');

  const sendEmail = () => {
    const emailData = {
      from: 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    };
    const response = sendEmailsAPI.send(emailData, Number(emailTemplate.id));
    console.log(response);
  };

  return (
    <div className="px-2 w-96">
      <div className="flex items-end gap-3">
        <TextField
          label="Recipient"
          onChange={({ target }) => setRecipient(target.value)}
          value={recipient}
        />
        <Button onClick={sendEmail}>Send</Button>
      </div>
    </div>
  );
};

export default SendEmailsView;
