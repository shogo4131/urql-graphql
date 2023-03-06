/* eslint-disable no-console */
import Link from 'next/link';

import { Layout } from '@/features/auth/components/Layout';
import { useLoginMutation } from '@/graphql/generated/graphql';

import { Button } from '@/components/Elemets/Button';
import { FieldWrapper } from '@/components/Form/FieldWrapper';
import { InputField } from '@/components/Form/InputField';

import styles from './index.module.css';

export const LoginPage = () => {
  const [, login] = useLoginMutation();

  const onSubmitHandler = async () => {
    await login({ username: '', password: '' });
  };

  return (
    <Layout title="テストアプリ">
      <form onSubmit={onSubmitHandler}>
        <FieldWrapper label="名前" htmlFor="name">
          <InputField type="text" id="name" onChange={() => console.log(888)} />
        </FieldWrapper>
        <FieldWrapper label="パスワード" htmlFor="password">
          <InputField type="password" id="password" onChange={() => console.log(888)} />
        </FieldWrapper>
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
