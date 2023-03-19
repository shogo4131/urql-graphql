import { FC, ReactNode } from 'react';

import { Header } from './Header';
import styles from './index.module.css';

type Props = {
  children: ReactNode;
  title: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Header />
      <main className={styles.root}>
        <h2>{title}</h2>
        {children}
      </main>
    </>
  );
};
