import { IEmailTemplate } from '@/app/interfaces/emailTemplates';
import getDefaultNewTemplate from '@/components/EmailTemplateEditor/defaultNewTemplate';
import { Card, CardContent } from '@/components/ui/Card';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface Props {
  emailTemplate: IEmailTemplate;
}
const EmailPreview: FC<Props> = ({ emailTemplate }) => {
  const router = useRouter();

  const redirect = () => {
    router.push(`/dashboard/email-templates/${emailTemplate.id}`);
  };

  return (
    <Card className="rounded-sm" onClick={redirect}>
      <CardContent>
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <p className="py-2 text-lg font-bold text-blue-500">
            {emailTemplate.name}
          </p>
          <div
            className="rounded-sm"
            style={{
              flex: '1 1 auto',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                transform: 'scale(1)',
                transformOrigin: '0 0',
                width: '300%',
                height: '400%',
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <iframe
                srcDoc={
                  emailTemplate.html.length > 0
                    ? emailTemplate.html
                    : getDefaultNewTemplate()
                }
                title="email-preview"
                width="100%"
                height="250px"
                style={{ border: 'none', overflow: 'hidden' }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailPreview;
