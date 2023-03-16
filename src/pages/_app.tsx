import '../styles/globals.css';
import 'ress';
import type { AppProps } from 'next/app';

import { Provider } from '@/providers';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
