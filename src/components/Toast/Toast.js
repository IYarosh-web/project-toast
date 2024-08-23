import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({
  id,
  variant,
  children,
  onDismiss,
}) {
  const InfoTag = ICONS_BY_VARIANT[variant];

  const handleDismiss = React.useCallback(
    () => {
      onDismiss(id);
    },
    [id, onDismiss],
  );

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <InfoTag size={24} />
      </div>
      <p className={styles.content}>
        {variant === "error" && (
          <VisuallyHidden>
            error - 
          </VisuallyHidden>
        )}
        {children}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={handleDismiss}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
