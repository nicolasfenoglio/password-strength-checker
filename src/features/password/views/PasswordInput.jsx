import { useState } from 'react';

import EyeIcon from '../../../shared/icons/EyeIcon';
import EyeSlashIcon from '../../../shared/icons/EyeSlashIcon';
import ClipboardIcon from '../../../shared/icons/ClipboardIcon';

export default function PasswordInput({ value, onChange, onCopy }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-2 justify-start">
      <div className="flex items-center bg-surface border border-muted/20 rounded-md shadow-elev overflow-hidden">
        <input
          className="flex-1 px-3 py-2 bg-transparent outline-none text-text placeholder:text-muted"
          placeholder="Contraseña"
          value={value}
          onChange={onChange}
          type={visible ? 'text' : 'password'}
        />
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="text-primary-600 hover:cursor-pointer"
        >
          {visible ? (
            <EyeSlashIcon className="size-4" />
          ) : (
            <EyeIcon className="size-4" />
          )}
        </button>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(value);
            if (onCopy) onCopy();
          }}
          className="flex flex-row items-center justify-between gap-1 px-3 py-2 m-2 h-full text-sm text-primary-600 hover:bg-primary-200/20 transition border rounded-md hover:cursor-pointer"
        >
          <ClipboardIcon className="size-5" />
          <p>Copiar</p>
        </button>
      </div>
    </div>
  );
}
