import { useState, useRef, useCallback } from 'react';

let idCounter = 0;

export default function useToasts() {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef(new Map());

  const clearTimer = useCallback((id) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer.timeout);
      timersRef.current.delete(id);
    }
  }, []);

  const removeToast = useCallback(
    (id) => {
      clearTimer(id);

      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, leaving: true } : t)),
      );

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 250);
    },
    [clearTimer],
  );

  const startTimer = useCallback(
    (toast) => {
      const startTime = Date.now();

      const timeout = setTimeout(() => {
        removeToast(toast.id);
      }, toast.remaining);

      timersRef.current.set(toast.id, {
        timeout,
        startTime,
      });
    },
    [removeToast],
  );

  const pauseTimer = useCallback((id) => {
    const timer = timersRef.current.get(id);
    if (!timer) return;

    clearTimeout(timer.timeout);

    const elapsed = Date.now() - timer.startTime;

    setToasts((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              remaining: Math.max(0, t.remaining - elapsed),
              paused: true,
            }
          : t,
      ),
    );
  }, []);

  const resumeTimer = useCallback(
    (id) => {
      setToasts((prev) => {
        return prev.map((t) => {
          if (t.id !== id) return t;

          const updated = { ...t, paused: false };

          // iniciar timer con datos actualizados
          startTimer(updated);

          return updated;
        });
      });
    },
    [startTimer],
  );

  const addToast = useCallback(
    (message, { type = 'info', duration = 3000 } = {}) => {
      const id = ++idCounter;

      const toast = {
        id,
        message,
        type,
        duration,
        remaining: duration,
        paused: false,
        leaving: false,
      };

      setToasts((prev) => [...prev, toast]);

      startTimer(toast);
    },
    [startTimer],
  );

  return {
    toasts,
    addToast,
    removeToast,
    pauseTimer,
    resumeTimer,
  };
}
