import type { FC, ReactNode } from 'react';

import styles from './index.module.css';

type Props = {
  children: ReactNode;
  label: string;
  htmlFor: string;
};

export const FieldWrapper: FC<Props> = ({ children, label, htmlFor }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
        <span className={styles.required}>*</span>
      </label>
      {children}
    </div>
  );
};
