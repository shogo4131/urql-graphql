import type { FC, ReactNode } from 'react';

import type { FieldError } from 'react-hook-form';

import styles from './index.module.css';

// TODO: 型の生成を調べる
type ErrorMessage = Pick<FieldError, 'message'>;

type Props = {
  errror?: ErrorMessage;
  children: ReactNode;
  label: string;
  htmlFor: string;
};

export const FieldWrapper: FC<Props> = ({ errror, children, label, htmlFor }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
        <span className={styles.required}>*</span>
      </label>
      {children}
      <div className={styles.error}>{errror?.message && errror.message}</div>
    </div>
  );
};
