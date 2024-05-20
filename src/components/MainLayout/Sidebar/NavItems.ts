import { type LucideIcon, Mails, Contact, Home } from 'lucide-react';
import { IconProps } from '@radix-ui/react-icons/dist/types';

export interface NavItem {
  title: string;
  href: string;
  icon?:
    | LucideIcon
    | React.ForwardRefExoticComponent<
        IconProps & React.RefAttributes<SVGSVGElement>
      >;
  color?: string;
  isChidren?: boolean;
  children?: NavItem[];
}

export const NavItems: NavItem[] = [
  {
    title: 'Home',
    icon: Home,
    href: '/',
    color: 'text-blue-500',
  },
  {
    title: 'Email templates',
    icon: Mails,
    href: '/email-templates',
    color: 'text-blue-500',
  },
  {
    title: 'Recipients',
    icon: Contact,
    href: '/recipients',
    color: 'text-blue-500',
  },
];
