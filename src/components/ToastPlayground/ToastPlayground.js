import React from 'react';

import Button from '../Button';
import ToastShelf from "../ToastShelf";
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0]);

  const [toasts, setToasts] = React.useState([]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      const newToastMeta = {
        id: crypto.randomUUID(),
        message,
        variant: selectedVariant,
      };

      setToasts(currentList => [
        ...currentList,
        newToastMeta,
      ]);
    },
    [message, selectedVariant],
  );

  const dismissToast = React.useCallback(
    (id) => {
      setToasts(currentList => currentList.filter(toast => toast.id !== id));
    },
    [],
  );

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

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

      <form action='#' onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={e => setMessage(e.currentTarget.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(variant => (
              <label
                key={variant}
                htmlFor={`variant-${variant}`}
              >
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  checked={variant === selectedVariant}
                  value={variant}
                  onChange={e => setSelectedVariant(e.currentTarget.value)}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button
              type="submit"
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </form>

    </div>
  );
}

export default ToastPlayground;
