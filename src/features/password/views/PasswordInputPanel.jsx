import PasswordInput from './PasswordInput';
import PasswordStrengthBar from './PasswordStrengthBar';
import PasswordStrengthPolicies from './PasswordStrengthPolicies';

export default function PasswordInputPanel({
  value,
  onChange,
  results,
  normalizedScore,
  onCopy,
}) {
  return (
    <div className="flex flex-col gap-1">
      <PasswordInput value={value} onChange={onChange} onCopy={onCopy} />
      <PasswordStrengthBar score={normalizedScore} />
      <PasswordStrengthPolicies className="mt-2" results={results} />
    </div>
  );
}
