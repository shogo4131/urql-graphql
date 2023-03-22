import { useEffect } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    push('login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Home;
