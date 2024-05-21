import { IEmailTemplate } from '@/app/interfaces/emailTemplates';
import sendEmailsAPI from '@/app/services/api/sendEmails';
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import TextField from '@/components/ui/TextField';
import { CircleX } from 'lucide-react';
import { FC, useState } from 'react';

interface Props {
  emailTemplate: IEmailTemplate;
}
const SendEmailsView: FC<Props> = ({ emailTemplate }) => {
  const [recipient, setRecipient] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [recipients, setRecipients] = useState<string[]>([]);

  const sendEmail = async () => {
    let attachments;
    if (file) {
      const buffer = await file.arrayBuffer();
      attachments = [
        {
          filename: file.name,
          content: Buffer.from(buffer),
          contentType: file.type,
        },
      ];
    }
    const emailData = {
      from: emailTemplate.from,
      to: recipients,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      attachments,
    };
    await sendEmailsAPI.send(emailData, Number(emailTemplate.id));
  };

  const addRecipient = () => {
    setRecipients([...recipients, recipient]);
    setRecipient('');
  };

  const removeRecipient = (email: string) => {
    setRecipients(recipients.filter((r) => r !== email));
  };

  return (
    <div className="px-2 w-1/2">
      <div className="flex gap-2 w-full">
        <TextField
          style={{ width: '200px' }}
          label="New Recipient"
          onChange={({ target }) => setRecipient(target.value)}
          value={recipient}
        />
        <Button className="mt-4 flex gap-3 items-center" onClick={addRecipient}>
          Add recipient
        </Button>
      </div>
      <div className="pt-5 flex gap-2" style={{ maxWidth: '600px' }}>
        {recipients.map((r) => (
          <div
            style={{ maxWidth: '200px' }}
            className="flex items-center p-1 border-solid border-2 border-blue-100 rounded-lg"
          >
            <p className="text-sm grow">{r}</p>
            <IconButton
              onClick={() => removeRecipient(r)}
              size={5}
              icon={<CircleX size={20} />}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-3 items-center">
        <p className="text-sm text-blue-500">Attachments</p>
        <TextField
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        />
      </div>
      <Button className="mt-4 flex gap-3 items-center" onClick={sendEmail}>
        Send Email
      </Button>
    </div>
  );
};

export default SendEmailsView;
