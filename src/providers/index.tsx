import { FC, ReactNode } from 'react';

import { Provider as UrqlProvider } from 'urql';

import { client } from '@/libs/client';

import { AuthProvider } from './authProvider';

type Props = {
  children: ReactNode;
};

export const Provider: FC<Props> = ({ children }) => {
  return (
    <UrqlProvider value={client}>
      <AuthProvider>{children}</AuthProvider>
    </UrqlProvider>
  );
};
