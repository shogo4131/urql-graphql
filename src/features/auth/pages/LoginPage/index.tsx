import { useLoginMutation } from '@/graphql/generated/graphql';

import { TextField } from '@/components/Form/TextField';

import styles from './index.module.css';

export const LoginPage = () => {
  const [, login] = useLoginMutation();

  const onSubmitHandler = async () => {
    await login({ username: '', password: '' });
  };

  return (
    <div className={styles.root}>
      <form className={styles.formGroup}>
        <h1 className={styles.title}>ログイン</h1>
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
        <div>
          <button type="button" onClick={onSubmitHandler}>
            ログイン
          </button>
        </div>
      </form>
    </div>
  );
};
