import { useState, useRef, useCallback } from 'react';

let idCounter = 0;

export default function useToasts() {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef(new Map());

  const startTimer = (toast) => {
    const startTime = Date.now();

    const timeout = setTimeout(() => {
      removeToast(toast.id);
    }, toast.remaining);

    timersRef.current.set(toast.id, {
      timeout,
      startTime,
    });
  };

  const pauseTimer = (id) => {
    const timer = timersRef.current.get(id);
    if (!timer) return;

    clearTimeout(timer.timeout);

    const elapsed = Date.now() - timer.startTime;

    setToasts((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, remaining: t.remaining - elapsed, paused: true }
          : t,
      ),
    );
  };

  const resumeTimer = (id) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, paused: false } : t)),
    );

    const toast = toasts.find((t) => t.id === id);
    if (toast) {
      startTimer(toast);
    }
  };

  const removeToast = useCallback((id) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, leaving: true } : t)),
    );

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      timersRef.current.delete(id);
    }, 250);
  }, []);

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
    [],
  );

  return {
    toasts,
    addToast,
    removeToast,
    pauseTimer,
    resumeTimer,
  };
}
