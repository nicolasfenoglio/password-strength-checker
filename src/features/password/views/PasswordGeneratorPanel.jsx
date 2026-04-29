import { useEffect, useState } from 'react';
import { useDebounce } from '../../../shared/hooks/debounce';

export default function PasswordGeneratorPanel({
  options,
  onOptionChange,
  onGenerate,
  className = '',
}) {
  const [inputValue, setInputValue] = useState(options.length);

  const debouncedValue = useDebounce(inputValue, 600);

  useEffect(() => {
    let value = Number(debouncedValue);

    if (isNaN(value)) return;

    if (value < 8) {
      value = 8;
      setInputValue(8);
    }
    if (value > 50) {
      value = 50;
      setInputValue(50);
    }

    onOptionChange('length', value);
  }, [debouncedValue, onOptionChange]);

  return (
    <div
      className={`
            w-full overflow-hidden transition-all duration-300 ease-in-out
            ${className}
          `}
    >
      <div className="bg-bg/50 border border-muted/20 rounded-md p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-primary-600 font-medium">
            Longitud
          </label>

          <div className="flex items-center gap-3">
            <input
              type="range"
              min="8"
              max="50"
              value={options.length}
              onChange={(e) => onOptionChange('length', Number(e.target.value))}
              className="flex-1 accent-primary"
            />

            <input
              type="number"
              min="8"
              max="50"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-16 px-2 py-1 text-sm text-center border border-muted/20 rounded-md bg-surface text-text outline-none focus:ring-focus"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.lowercase}
              onChange={(e) => onOptionChange('lowercase', e.target.checked)}
            />
            Minúsculas
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.uppercase}
              onChange={(e) => onOptionChange('uppercase', e.target.checked)}
            />
            Mayúsculas
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.numbers}
              onChange={(e) => onOptionChange('numbers', e.target.checked)}
            />
            Números
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={options.symbols}
              onChange={(e) => onOptionChange('symbols', e.target.checked)}
            />
            Símbolos
          </label>
        </div>
      </div>
    </div>
  );
}
