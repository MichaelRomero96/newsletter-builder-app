import { IEmailTemplate } from '@/app/interfaces/emailTemplates';
import EmailTemplatesAPI from '@/app/services/api/emailTemplates';
import getDefaultNewTemplate from '@/components/EmailTemplateEditor/defaultNewTemplate';
import { Card, CardContent } from '@/components/ui/Card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import IconButton from '@/components/ui/IconButton';
import { MoreVerticalIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface Props {
  emailTemplate: IEmailTemplate;
  refresh: () => void;
}
const EmailPreview: FC<Props> = ({ emailTemplate, refresh }) => {
  const router = useRouter();

  const redirect = () => {
    router.push(`/dashboard/email-templates/${emailTemplate.id}`);
  };

  const handleDeleteEmailTemplate = async () => {
    await EmailTemplatesAPI.delete(emailTemplate.id);
    refresh();
  };

  return (
    <>
      <Card className="rounded-sm">
        <CardContent>
          <div className="flex">
            <p className="py-2 text-lg font-bold text-blue-500 flex-grow">
              {emailTemplate.name}
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <IconButton
                  size={6}
                  icon={<MoreVerticalIcon size={16} />}
                ></IconButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handleDeleteEmailTemplate}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div
              className="rounded-sm cursor-pointer"
              onClick={redirect}
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
    </>
  );
};

export default EmailPreview;
