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
import TextField from '@/components/ui/TextField';
import { useState } from 'react';

const EmailTemplatesPage = () => {
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
      await EmailTemplatesAPI.create(newEmailTemplate);
      setOpenDialog(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <Page.Header title="Email Templates" />
        <div className="mt-14 grid justify-center gap-4">
          <p>No emails templates yet</p>
          <Button onClick={() => setOpenDialog(true)}>
            Create Email Template
          </Button>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-blue-500">
              Create Email Template
            </DialogTitle>
            <div className="pt-4 space-y-2">
              <div className="grid gap-3">
                <TextField name="name" label="Name*" onChange={handleChange} />
              </div>
              <div className="grid gap-3">
                <TextField
                  name="subject"
                  label="Subject"
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-3">
                <TextField name="from" label="From" onChange={handleChange} />
              </div>
              <div className="pt-4 flex justify-end space-x-2">
                <Button color="blue" onClick={() => setOpenDialog(false)}>
                  Cancel
                </Button>
                <Button color="blue" onClick={submit}>
                  Create
                </Button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmailTemplatesPage;
