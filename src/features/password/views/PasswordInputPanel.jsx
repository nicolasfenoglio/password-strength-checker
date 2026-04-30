import PasswordInput from './PasswordInput';
import PasswordStrengthBar from './PasswordStrengthBar';
import PasswordStrengthPolicies from './PasswordStrengthPolicies';
import EmptyPasswordState from './EmptyPasswordState';

export default function PasswordInputPanel({
  value,
  onChange,
  results,
  normalizedScore,
  onCopy,
}) {
  const hasPassword = value && value.length > 0;

  return (
    <div className="flex flex-col gap-2">
      <PasswordInput value={value} onChange={onChange} onCopy={onCopy} />

      <div className="flex flex-col gap-2 min-h-25 transition-all">
        {hasPassword ? (
          <>
            <PasswordStrengthBar score={normalizedScore} />
            <PasswordStrengthPolicies results={results} />
          </>
        ) : (
          <EmptyPasswordState />
        )}
      </div>
    </div>
  );
}
