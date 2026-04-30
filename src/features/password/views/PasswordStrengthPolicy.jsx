export default function PasswordStrengthPolicy({ result }) {
  return (
    <li
      className={`flex items-start gap-2 text-sm ${result.grow ? 'col-span-2' : ''}`}
    >
      <span
        className={`
                    w-2 h-2 min-w-2 min-h-2 rounded-full mt-1 shrink-0
                    ${result.passed ? 'bg-success' : 'bg-danger'}
                `}
      />
      <span className={result.passed ? 'text-text' : 'text-muted'}>
        {result.message}
      </span>
    </li>
  );
}
