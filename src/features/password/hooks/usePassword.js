import { useState } from 'react';
import { useDebounce } from '../../../shared/hooks/debounce';
import usePasswordStrength from './usePasswordStrength';
import { generatePassword } from '../../../domain/password/generator/passwordGenerator';

export default function usePassword() {
  const [password, setPassword] = useState('');
  const debouncedPassword = useDebounce(password, 100);
  const { results, normalizedScore } = usePasswordStrength(debouncedPassword);

  return {
    password,
    setPassword,
    results,
    normalizedScore,
  };
}
