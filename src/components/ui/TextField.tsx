import Label from './Label';
import Input, { InputProps } from './Input';
import { FC } from 'react';

type ReactInputProps = InputProps & React.RefAttributes<HTMLInputElement>;

interface Props extends ReactInputProps {
  label?: string;
  helper?: string;
}

const TextField: FC<Props> = ({ label, value, ...props }) => {
  return (
    <div className="items-center gap-4">
      <div className="flex text-left">
        {label && <Label className="text-right text-blue-500">{label}</Label>}
        {props.helper && (
          <Label className="text-xs text-right text-red-400">
            {props.helper}
          </Label>
        )}
      </div>
      <Input value={value} className="mt-0.5 col-span-3" {...props} />
    </div>
  );
};

export default TextField;
