export default function Toast({ toast, onClose, onPause, onResume }) {
  const base =
    'relative overflow-hidden flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg min-w-[250px]';

  const types = {
    info: 'bg-gray-800 text-white',
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    warning: 'bg-yellow-400 text-black',
  };

  return (
    <div
      onMouseEnter={() => onPause(toast.id)}
      onMouseLeave={() => onResume(toast.id)}
      className={`
        ${base}
        ${types[toast.type]}
        ${toast.leaving ? 'animate-toast-out' : 'animate-toast-in'}
      `}
    >
      <span className="flex-1">{toast.message}</span>
      <button
        onClick={() => onClose(toast.id)}
        className="opacity-70 hover:opacity-100"
      >
        ✕
      </button>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-black/20">
        <div
          className="h-full bg-white/80"
          style={{
            width: '100%',
            animation: `toast-progress ${toast.duration}ms linear forwards`,
            animationPlayState: toast.paused ? 'paused' : 'running',
          }}
        />
      </div>
    </div>
  );
}
