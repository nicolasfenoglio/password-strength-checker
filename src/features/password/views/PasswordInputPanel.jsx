import PasswordInput from './PasswordInput';
import PasswordStrengthBar from './PasswordStrengthBar';
import PasswordStrengthPolicies from './PasswordStrengthPolicies';

export default function PasswordInputPanel({
  value,
  onChange,
  results,
  normalizedScore,
}) {
  return (
    <div className="flex flex-col gap-1">
      <PasswordInput value={value} onChange={onChange} />
      <PasswordStrengthBar score={normalizedScore} />
      <PasswordStrengthPolicies className="mt-2" results={results} />
    </div>
  );
}
