import React from 'react';

import ToastShelf from "../ToastShelf";
import Toast from '../Toast';

export const ToastContext = React.createContext();

function ToastProvider({
  children
}) {
  const [toasts, setToasts] = React.useState([]);

  const dismissToast = React.useCallback(
    (id) => {
      setToasts(currentList => currentList.filter(toast => toast.id !== id));
    },
    [],
  );

  const createToast = React.useCallback(
    (variant, message) => {
      setToasts(currentList => [
        ...currentList,
        { id: crypto.randomUUID(), variant, message }
      ])
    },
    [],
  );

  React.useEffect(
    () => {
      const keyboardHandler = (e) => {
        if (e.key === "Escape") {
          setToasts([]);
        }
      }
      window.addEventListener("keydown", keyboardHandler);

      return () => window.removeEventListener("keydown", keyboardHandler);
    },
    [],
  );

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast }}
    >
      <ToastShelf>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            id={toast.id}
            variant={toast.variant}
            onDismiss={dismissToast}
          >
            {toast.message}
          </Toast>
        ))}
      </ToastShelf>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
