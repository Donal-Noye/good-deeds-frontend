import React from 'react';
import styles from './dialog.module.scss';

interface GoodDeedDialogProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<GoodDeedDialogProps> = ({
  children,
	onClose
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleInsideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles.dialogBackdrop} ${styles['open']}`}
      onClick={handleBackdropClick}
    >
      <div
        className={`${styles.dialogContainer} ${styles['open']}`}
        onClick={handleInsideClick}
      >
        {children}
      </div>
    </div>
  );
};
