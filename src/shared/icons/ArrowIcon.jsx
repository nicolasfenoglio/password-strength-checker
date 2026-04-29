import { ArrowDownIcon } from './ArrowDownIcon';

export default function ArrowIcon({ open, className = 'size-2' }) {
  return (
    <ArrowDownIcon
      className={`${className} ${open ? 'rotate-180' : 'rotate-0'}`}
    />
  );
}
