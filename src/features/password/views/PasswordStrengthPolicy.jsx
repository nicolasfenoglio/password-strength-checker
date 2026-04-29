export default function PasswordStrengthPolicy({ result }) {
  return (
    <li className="flex items-center gap-2 text-sm">
      <span
        className={`
                    w-2 h-2 min-w-2 min-h-2 rounded-full mt-1shrink-0
                    ${result.passed ? 'bg-success' : 'bg-danger'}
                `}
      />
      <span className={result.passed ? 'text-text' : 'text-muted'}>
        {result.message}
      </span>
    </li>
  );
}
