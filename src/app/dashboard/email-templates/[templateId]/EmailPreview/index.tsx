import { IEmailTemplate } from '@/app/interfaces/emailTemplates';
import { FC } from 'react';

interface Props {
  emailTemplate: IEmailTemplate;
}
const EmailPreviewView: FC<Props> = ({ emailTemplate }) => {
  return (
    <div>
      <iframe
        srcDoc={emailTemplate.html}
        title="email-preview"
        width="100%"
        height="100%"
        style={{ minHeight: '80vh', border: 'none', overflow: 'hidden' }}
      />
    </div>
  );
};

export default EmailPreviewView;
