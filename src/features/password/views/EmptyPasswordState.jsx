export default function EmptyPasswordState() {
  return (
    <div className="flex flex-col gap-3 p-4 border border-muted/20 rounded-md bg-bg/50 animate-fade-in">
      <p className="text-sm text-muted text-center">
        Ingresa una contraseña para continuar
      </p>

      <div className="flex flex-col gap-2 animate-pulse">
        <div className="h-3 w-32 bg-muted/30 rounded" />
        <div className="flex gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-2 flex-1 bg-muted/20 rounded-sm" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 animate-pulse">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-3 bg-muted/20 rounded w-full" />
        ))}
      </div>
    </div>
  );
}
