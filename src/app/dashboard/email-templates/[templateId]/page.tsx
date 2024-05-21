'use client';
import { IEmailTemplate } from '@/app/interfaces/emailTemplates';
import EmailTemplatesAPI from '@/app/services/api/emailTemplates';
import EmailTemplateEditor from '@/components/EmailTemplateEditor';
import useAuthSession from '@/hooks/useAuthSession';
import { Editor } from 'grapesjs';
import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import Page from '@/components/ui/Page';
import EmailPreviewView from './EmailPreview';
import SendEmailsView from './SendEmailsView';
import SendingHistoryView from './SendingHistoryView';
import SettingsView from './SettingsView/SettingsView';
import juice from 'juice';

enum EmailTemplateView {
  EDITOR = 'editor',
  PREVIEW = 'preview',
  SEND_EMAILS = 'send-emails',
  SENDING_HISTORY = 'sending-history',
  TEMPLATE_SETTINGS = 'template-settings',
}

const SelectedTemplatePage = () => {
  const editorRef = useRef<Editor | null>(null);
  const session = useAuthSession();
  const pathname = usePathname();
  const [emailTemplate, setEmailTemplate] = useState<IEmailTemplate>();
  const segments = pathname.split('/');
  const id = segments[3];
  const [currentView, setCurrentView] = useState(EmailTemplateView.EDITOR);

  const saveOutput = () => {
    console.log('Saving output');
    if (editorRef.current) {
      const html = editorRef.current.getHtml();
      const css = editorRef.current.getCss();
      const styledHtml = `<style>${css}</style>${html}`;

      // Inline CSS with juice
      const inlinedHtml = juice(styledHtml);

      if (emailTemplate?.id) {
        EmailTemplatesAPI.update(emailTemplate.id, {
          ...emailTemplate,
          html: inlinedHtml,
        });
      }
    }
  };

  const setVariantView = (view: EmailTemplateView) =>
    currentView === view ? 'default' : 'outline';

  const View: Record<EmailTemplateView, ReactNode | ReactElement> = {
    [EmailTemplateView.EDITOR]: (
      <EmailTemplateEditor
        editorRef={editorRef}
        html={emailTemplate?.html as string}
        saveOutput={saveOutput}
      />
    ),
    [EmailTemplateView.PREVIEW]: (
      <EmailPreviewView emailTemplate={emailTemplate as IEmailTemplate} />
    ),
    [EmailTemplateView.SEND_EMAILS]: (
      <SendEmailsView emailTemplate={emailTemplate as IEmailTemplate} />
    ),
    [EmailTemplateView.SENDING_HISTORY]: <SendingHistoryView />,
    [EmailTemplateView.TEMPLATE_SETTINGS]: <SettingsView />,
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
              fn: () => setCurrentView(EmailTemplateView.EDITOR),
              label: 'Editor',
              variant: setVariantView(EmailTemplateView.EDITOR),
            },
            {
              fn: () => setCurrentView(EmailTemplateView.PREVIEW),
              label: 'Preview',
              variant: setVariantView(EmailTemplateView.PREVIEW),
            },
            {
              fn: () => setCurrentView(EmailTemplateView.SEND_EMAILS),
              label: 'Send Emails',
              variant: setVariantView(EmailTemplateView.SEND_EMAILS),
            },
            {
              fn: () => setCurrentView(EmailTemplateView.SENDING_HISTORY),
              label: 'Sending history',
              variant: setVariantView(EmailTemplateView.SENDING_HISTORY),
            },

            {
              fn: () => setCurrentView(EmailTemplateView.TEMPLATE_SETTINGS),
              label: 'Template Settings',
              variant: setVariantView(EmailTemplateView.TEMPLATE_SETTINGS),
            },
          ]}
        />
      </div>

      {View[currentView]}
    </>
  );
};

export default SelectedTemplatePage;
