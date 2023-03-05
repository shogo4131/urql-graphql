import type { FC, ReactNode } from 'react';

import styles from './index.module.css';

type Props = {
  children: ReactNode;
  title: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.root}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </div>
  );
};
