import React from 'react';

import Button from '../Button';


import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const {
    createToast,
  } = React.useContext(ToastContext);

  const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      createToast(selectedVariant, message)
    },
    [message, selectedVariant, createToast],
  );

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

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
