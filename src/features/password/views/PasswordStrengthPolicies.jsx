import PasswordStrengthPolicy from './PasswordStrengthPolicy';

export default function PasswordStrengthPolicies({ results, className = '' }) {
  const isTwoColumns = results.length >= 4;

  return (
    <div
      className={`flex flex-col gap-2 bg-bg/50 border border-muted/20 rounded-md p-4 ${className}`}
    >
      <h2 className="text-sm font-semibold text-primary-600">
        Políticas de Contraseña
      </h2>

      <ul
        className={`
                    gap-x-6 gap-y-1
                    ${isTwoColumns ? 'grid grid-cols-2' : 'flex flex-col'}
                `}
      >
        {results.map((result) => (
          <PasswordStrengthPolicy key={result.id} result={result} />
        ))}
      </ul>
    </div>
  );
}
