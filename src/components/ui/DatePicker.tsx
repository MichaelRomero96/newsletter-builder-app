'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarIcon } from '@radix-ui/react-icons';

import { cn } from '../../lib/utils';
import Button from './Button';
import Calendar from './Calendar';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import Label from './Label';
import { SelectSingleEventHandler } from 'react-day-picker';

interface Props {
  label?: string;
  size?: 'sm' | 'default' | 'lg';
  handleSelect: SelectSingleEventHandler;
  value: Date | null;
}

const DatePicker: React.FC<Props> = ({
  label,
  size = 'default',
  handleSelect,
  value,
}) => {
  const randomNumber = Math.floor(Math.random() * 100);
  const id = label ? `${label}-${randomNumber}` : `${randomNumber}`;
  return (
    <div className="grid">
      {label && (
        <Label htmlFor={id} className="text-left mb-2">
          {label}
        </Label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={id}
            size={size}
            variant={'outline'}
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? (
              format(value, 'PPP', { locale: es })
            ) : (
              <span>{label ? label : 'Seleccione una fecha'}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
