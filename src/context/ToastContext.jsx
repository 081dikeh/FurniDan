import { createContext, useContext, useState, useCallback } from 'react';
import styles from './toast.module.css';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className={styles.toastWrapper}>
        {toasts.map(t => (
          <div
            key={t.id}
            className={`${styles.toast} ${t.type === 'error' ? styles.toastError : styles.toastSuccess}`}
          >
            <span className={styles.toastIcon}>{t.type === 'error' ? '✕' : '✓'}</span>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
