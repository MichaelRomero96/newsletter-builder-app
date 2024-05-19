import { FC, useState } from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { cn } from '../../lib/utils';
import Button from './Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './Command';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { noResultsMessage, search } from '../../constants/common/ui';

interface Data {
  value: string;
  label: string;
}

interface Props {
  label: string;
  data: Data[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange?: (value: string) => void;
  noResultsLabel?: string;
  placeholder?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  staticLabel?: boolean;
}

const Combobox: FC<Props> = ({
  label,
  data,
  value,
  setValue,
  onChange,
  noResultsLabel = noResultsMessage,
  placeholder = search,
  staticLabel = false,
  size = 'default',
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size={size}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value && !staticLabel ? value : label}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandList>
            <CommandEmpty>{noResultsLabel}</CommandEmpty>
            <CommandGroup>
              {data.map((elem) => (
                <CommandItem
                  key={elem.value}
                  value={elem.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                    onChange && onChange(elem.value);
                  }}
                >
                  {elem.label}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === elem.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
