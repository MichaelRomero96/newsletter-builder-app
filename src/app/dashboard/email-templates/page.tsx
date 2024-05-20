'use client';

import { ICreateEmailTemplate } from '@/app/interfaces/emailTemplates';
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

const EmailTemplatesPage = () => {
  const [emailTemplates, setEmailTemplates] = useState([]);
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
      const emailTemplates = await EmailTemplatesAPI.getAll(session.id);
      setEmailTemplates(emailTemplates);
    };
    getEmailTemplates();
  }, [session.id]);

  return (
    <>
      <Page.Header title="Email Templates" />
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
      <div>
        <EmailPreview />
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
