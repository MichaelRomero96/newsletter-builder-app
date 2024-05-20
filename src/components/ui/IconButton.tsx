import { FC } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';

interface Props {
  icon: React.ReactNode;
  className?: string;
  variant?: 'success' | 'danger';
  size?: string | number;
  onClick?: () => void;
}

const IconButton: FC<Props> = ({ icon, variant, size, onClick, className }) => {
  const setVariant = variant === 'success' ? 'green' : 'red';

  return (
    <Button
      className={cn(
        `bg-${setVariant}-200 hover:bg-${setVariant}-300 h-${size} w-${size} rounded-full`,
        className
      )}
      variant="outline"
      size="icon"
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
