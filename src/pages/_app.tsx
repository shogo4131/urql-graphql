import '../styles/globals.css';
import 'ress';
import { useCallback, useEffect } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Provider } from '@/providers';
import { isProtectedRoute, isTokenExpired } from '@/utils/token';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { events, push, asPath } = useRouter();

  const handleRouteChange = useCallback(
    (url: string) => {
      const token = localStorage.getItem('token');
      const invalid = token ? isTokenExpired(token) : true;

      if (invalid && isProtectedRoute(url)) {
        push('/login');
      }
    },
    [push]
  );

  useEffect(() => {
    // NOTE: 初回レンダリング時のtokenのチェックを行う
    handleRouteChange(asPath);

    events.on('routeChangeStart', handleRouteChange);
    return () => events.off('routeChangeStart', handleRouteChange);
  }, [asPath, events, handleRouteChange]);

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
