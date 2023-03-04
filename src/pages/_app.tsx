import '../styles/globals.css';
import 'ress';
import type { AppProps } from 'next/app';

import { Provider } from 'urql';

import { client } from '@/libs/client';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
