import Button from '@/components/ui/Button';
import TextField from '@/components/ui/TextField';
import React, { FC } from 'react';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setOpenDialog: (value: boolean) => void;
  submit: () => void;
}
const CreateForm: FC<Props> = ({ setOpenDialog, handleChange, submit }) => {
  return (
    <div className="pt-4 space-y-2">
      <div className="grid gap-3">
        <TextField name="name" label="Name*" onChange={handleChange} />
      </div>
      <div className="grid gap-3">
        <TextField name="subject" label="Subject" onChange={handleChange} />
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
  );
};

export default CreateForm;
