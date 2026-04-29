import { useMemo } from 'react';
import { evaluatePassword } from '../../../domain/password/evaluator/passwordEvaluator';
import { minLengthPolicy } from '../../../domain/password/policies/minLengthPolicy';
import { uppercasePolicy } from '../../../domain/password/policies/uppercasePolicy';
import { sequenceAndRepetitionPolicy } from '../../../domain/password/policies/sequenceAndRepetitionPolicy';
import { lowercasePolicy } from '../../../domain/password/policies/lowercasePolicy';
import { hasSymbolsPolicy } from '../../../domain/password/policies/hasSymbolsPolicy';
import { hasNumbersPolicy } from '../../../domain/password/policies/hasNumbersPolicy';

const policies = [
  minLengthPolicy,
  uppercasePolicy,
  lowercasePolicy,
  sequenceAndRepetitionPolicy,
  hasSymbolsPolicy,
  hasNumbersPolicy,
];

export function usePasswordStrength(password) {
  return useMemo(() => {
    return evaluatePassword(password, policies);
  }, [password]);
}
