'use client';
import {
  ICreateEmailTemplate,
  IEmailTemplate,
} from '@/app/interfaces/emailTemplates';
import EmailTemplatesAPI from '@/app/services/api/emailTemplates';
import Button from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import Page from '@/components/ui/Page';
import useAuthSession from '@/hooks/useAuthSession';
import { useEffect, useState } from 'react';
import CreateForm from './CreateForm';
import EmailPreview from './EmailPreview';
import { useEmailTemplatesStore } from '../../../store/index';

const EmailTemplatesPage = () => {
  const { updateTemplates } = useEmailTemplatesStore();
  const [emailTemplates, setEmailTemplates] = useState<IEmailTemplate[]>([]);
  const session = useAuthSession();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [newEmailTemplate, setNewEmailTemplate] =
    useState<ICreateEmailTemplate>({
      name: '',
      subject: '',
      from: '',
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmailTemplate({
      ...newEmailTemplate,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async () => {
    try {
      if (!session?.id) throw new Error('User not authenticated');
      await EmailTemplatesAPI.create(newEmailTemplate, session?.id);
      // get the Email templates list
      const data = await EmailTemplatesAPI.getAll(session?.id);
      setEmailTemplates(data);
      setOpenDialog(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!session) return;
    const getEmailTemplates = async () => {
      if (!session.id) return;
      const data = await EmailTemplatesAPI.getAll(session.id);

      setEmailTemplates(() => {
        updateTemplates(data);
        return data;
      });
    };
    getEmailTemplates();
  }, [session.id]);

  return (
    <>
      <Page.Header
        title="Email Templates"
        toolbarActions={[
          {
            label: 'Create Template',
            fn: () => setOpenDialog(true),
          },
        ]}
      />
      {emailTemplates.length < 0 && (
        <div>
          <div className="mt-14 grid justify-center gap-4">
            <p>No emails templates yet</p>
            <Button onClick={() => setOpenDialog(true)}>
              Create Email Template
            </Button>
          </div>
        </div>
      )}
      <div className="mt-8 grid gap-5 grid-cols-3">
        {emailTemplates.map((emailTemplate) => (
          <EmailPreview emailTemplate={emailTemplate} />
        ))}
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-blue-500">
              Create Email Template
            </DialogTitle>
            <CreateForm
              handleChange={handleChange}
              setOpenDialog={setOpenDialog}
              submit={submit}
            />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmailTemplatesPage;
