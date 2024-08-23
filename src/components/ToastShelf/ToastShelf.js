import React from 'react';

import styles from './ToastShelf.module.css';

function ToastShelf({
  children
}) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {React.Children.map(children, toast => (
        <li className={styles.toastWrapper}>
          {toast}
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
