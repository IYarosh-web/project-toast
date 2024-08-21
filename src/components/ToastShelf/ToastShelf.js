import React from 'react';

import styles from './ToastShelf.module.css';

function ToastShelf({
  children
}) {
  return (
    <ol className={styles.wrapper}>
      {React.Children.map(children, toast => (
        <li className={styles.toastWrapper}>
          {toast}
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
