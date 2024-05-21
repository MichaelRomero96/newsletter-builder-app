import { FC } from 'react';
import Toolbar from '../Toolbar';

interface HeaderProps {
  title: string;
  toolbarActions?: Action[];
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

const Header: FC<HeaderProps> = ({ title, toolbarActions }) => {
  return (
    <div className="flex">
      <h1 className="size-5 font-bold text-2xl w-10 grow">{title}</h1>
      {toolbarActions && <Toolbar actions={toolbarActions} />}
    </div>
  );
};

const Page = { Header };

export default Page;
