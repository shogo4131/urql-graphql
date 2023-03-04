import type { FC, ComponentProps } from 'react';

import styles from './index.module.css';

type Props = {
  className?: string;
  label: string;
  htmlFor: string;
  onChange: () => void;
} & Omit<ComponentProps<'input'>, 'onChange'>;

export const TextField: FC<Props> = ({ className, label, htmlFor, onChange, ...props }) => {
  return (
    <div className={className}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <input {...props} className={styles.input} onChange={onChange} />
    </div>
  );
};
