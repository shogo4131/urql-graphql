import { Layout } from '@/features/auth/components/Layout';

import { Button } from '@/components/Elemets/Button';
import { TextField } from '@/components/Form/TextField';

import styles from './index.module.css';

export const RegisterPage = () => {
  return (
    <Layout title="新規登録">
      <form>
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
          type="email"
          htmlFor="email"
          label="メールアドレス"
          id="email"
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
        <TextField
          className={styles.textFields}
          type="password"
          htmlFor="password"
          label="パスワード確認"
          id="password"
          // eslint-disable-next-line no-console
          onChange={() => console.log(888)}
        />
        <div className={styles.registerButton}>
          <Button type="submit">登録</Button>
        </div>
      </form>
    </Layout>
  );
};
