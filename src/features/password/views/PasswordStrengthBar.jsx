export default function PasswordStrengthBar({ score }) {
  const totalBars = 4;
  const filledBars = Math.round(score * totalBars);

  const getColor = () => {
    if (score < 0.25) return 'bg-danger';
    if (score < 0.5) return 'bg-warning';
    if (score < 0.75) return 'bg-primary-400';
    return 'bg-success';
  };

  const getTextColor = () => {
    if (score < 0.25) return 'text-danger';
    if (score < 0.5) return 'text-warning';
    if (score < 0.75) return 'text-primary-400';
    return 'text-success';
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold text-muted flex flex-row items-end justify-between">
        Fortaleza
        <span className={`font-bold text-md ${getTextColor()}`}>
          {getLabel(score)}
        </span>
      </p>
      <div className="flex gap-1">
        {Array.from({ length: totalBars }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-sm transition ${
              i < filledBars ? getColor() : 'bg-muted/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function getLabel(score) {
  if (score < 0.25) return 'Muy débil';
  if (score < 0.5) return 'Débil';
  if (score < 0.75) return 'Aceptable';
  if (score < 0.9) return 'Fuerte';
  return 'Excelente';
}
