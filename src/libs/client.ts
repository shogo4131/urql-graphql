import { createClient } from 'urql';

import { API_URL } from '@/config';

export const client = createClient({
  url: API_URL,
});
