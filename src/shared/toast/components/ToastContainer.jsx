import Toast from './Toast';

export default function ToastContainer({
  toasts,
  removeToast,
  pauseTimer,
  resumeTimer,
}) {
  return (
    <div className="fixed top-5 right-5 flex flex-col gap-3 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onClose={removeToast}
          onPause={pauseTimer}
          onResume={resumeTimer}
        />
      ))}
    </div>
  );
}
