import { useMemo } from 'react';
import { evaluatePassword } from '../../../domain/password/evaluator/passwordEvaluator';
import { lengthPolicy } from '../../../domain/password/policies/lengthScorePolicy';
import { uppercasePolicy } from '../../../domain/password/policies/uppercasePolicy';
import { sequenceAndRepetitionPolicy } from '../../../domain/password/policies/sequenceAndRepetitionPolicy';
import { lowercasePolicy } from '../../../domain/password/policies/lowercasePolicy';
import { hasSymbolsPolicy } from '../../../domain/password/policies/hasSymbolsPolicy';
import { hasNumbersPolicy } from '../../../domain/password/policies/hasNumbersPolicy';
import { passphrasePolicy } from '../../../domain/password/policies/passphrasePolicy';

const policies = [
  lengthPolicy,
  uppercasePolicy,
  lowercasePolicy,
  sequenceAndRepetitionPolicy,
  hasSymbolsPolicy,
  hasNumbersPolicy,
  passphrasePolicy,
];

export default function usePasswordStrength(password) {
  return useMemo(() => {
    return evaluatePassword(password, policies);
  }, [password]);
}
