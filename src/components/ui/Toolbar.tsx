import { FC } from 'react';
import Button from './Button';

interface Props {
  actions: Action[];
}

interface Action {
  fn: () => void;
  label: string;
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
}

const Toolbar: FC<Props> = ({ actions }) => {
  return (
    <div className="flex space-x-1">
      {actions.map((action) => (
        <Button key={action.label} onClick={action.fn} variant={action.variant}>
          {action.label}
        </Button>
      ))}
    </div>
  );
};

export default Toolbar;
