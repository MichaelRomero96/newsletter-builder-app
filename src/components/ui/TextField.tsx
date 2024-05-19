import Label from './Label';
import Input, { InputProps } from './Input';
import { FC } from 'react';

type ReactInputProps = InputProps & React.RefAttributes<HTMLInputElement>;

interface Props extends ReactInputProps {
  label?: string;
}

const TextField: FC<Props> = ({ label, value, ...props }) => {
  const randomNumber = Math.floor(Math.random() * 100);
  const id = label ? `${label}-${randomNumber}` : `${randomNumber}`;
  return (
    <div className="items-center gap-4">
      {label && (
        <Label htmlFor={id} className="text-right">
          {label}
        </Label>
      )}
      <Input id={id} value={value} className="mt-0.5 col-span-3" {...props} />
    </div>
  );
};

export default TextField;
