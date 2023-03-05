import type { FC, ReactNode, ComponentProps } from 'react';

import styles from './index.module.css';

type Props = {
  children: ReactNode;
} & ComponentProps<'button'>;

export const Button: FC<Props> = ({ type = 'button', disabled = false, children, ...props }) => {
  return (
    <button {...props} className={styles.root} type={type} disabled={disabled}>
      <span>{children}</span>
    </button>
  );
};
