'use client';
import { IEmailTemplate } from '@/app/interfaces/emailTemplates';
import EmailTemplatesAPI from '@/app/services/api/emailTemplates';
import EmailTemplateEditor from '@/components/EmailTemplateEditor';
import useAuthSession from '@/hooks/useAuthSession';
import { Editor } from 'grapesjs';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Header from '../../../../components/MainLayout/Header/index';
import Page from '@/components/ui/Page';

const SelectedTemplatePage = () => {
  const editorRef = useRef<Editor | null>(null);
  const session = useAuthSession();
  const pathname = usePathname();
  const [emailTemplate, setEmailTemplate] = useState<IEmailTemplate>();
  const segments = pathname.split('/');
  const id = segments[3];

  const saveOutput = () => {
    if (editorRef.current) {
      const html = editorRef.current.getHtml();
      const css = editorRef.current.getCss();
      const styledHtml = `<style>${css}</style>${html}`;

      if (emailTemplate?.id) {
        EmailTemplatesAPI.update(emailTemplate.id, {
          ...emailTemplate,
          html: styledHtml,
        });
      }
    }
  };

  useEffect(() => {
    if (!session) return;
    const getEmailTemplates = async () => {
      if (!session.id) return;
      const data = await EmailTemplatesAPI.getAll(Number(session.id));
      const selectedTemplate = data.find(
        (template: IEmailTemplate) => template.id == id
      );
      setEmailTemplate(selectedTemplate);
    };
    getEmailTemplates();
  }, [session.id]);

  if (!emailTemplate) return null;

  return (
    <>
      <div className="mb-8">
        <Page.Header
          title={emailTemplate.name}
          toolbarActions={[
            {
              fn: saveOutput,
              label: 'Sending history',
            },
            {
              fn: saveOutput,
              label: 'Send Emails',
            },
            {
              fn: saveOutput,
              label: 'Template Settings',
            },
          ]}
        />
      </div>

      <EmailTemplateEditor
        editorRef={editorRef}
        html={emailTemplate?.html}
        saveOutput={saveOutput}
      />
    </>
  );
};

export default SelectedTemplatePage;
