import { useState } from 'react';

import { generatePassword } from '../../../domain/password/generator/passwordGenerator';

export default function usePasswordGenerator({ setPassword }) {
  const [options, setOptions] = useState({
    length: 16,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  });
  const generateInternalPassword = () => {
    const generated = generatePassword(options);
    setPassword(generated);
  };

  return {
    options,
    setOptions,
    generatePassword: generateInternalPassword,
  };
}
