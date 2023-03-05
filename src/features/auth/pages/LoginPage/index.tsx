import Link from 'next/link';

import { Layout } from '@/features/auth/components/Layout';
import { useLoginMutation } from '@/graphql/generated/graphql';

import { Button } from '@/components/Elemets/Button';
import { TextField } from '@/components/Form/TextField';

import styles from './index.module.css';

export const LoginPage = () => {
  const [, login] = useLoginMutation();

  const onSubmitHandler = async () => {
    await login({ username: '', password: '' });
  };

  return (
    <Layout title="テストアプリ">
      <form onSubmit={onSubmitHandler}>
        <TextField
          className={styles.textFields}
          type="text"
          htmlFor="name"
          label="名前"
          id="name"
          // eslint-disable-next-line no-console
          onChange={() => console.log(888)}
        />
        <TextField
          className={styles.textFields}
          type="password"
          htmlFor="password"
          label="パスワード"
          id="password"
          // eslint-disable-next-line no-console
          onChange={() => console.log(888)}
        />
        <div className={styles.loginButton}>
          <Button type="submit">ログイン</Button>
        </div>
      </form>
      <div className={styles.register}>
        新規登録の方は
        <Link href="/register" className={styles.link}>
          こちら
        </Link>
      </div>
    </Layout>
  );
};
