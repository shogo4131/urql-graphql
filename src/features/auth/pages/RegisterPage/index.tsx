/* eslint-disable no-console */
import { Layout } from '@/features/auth/components/Layout';

import { Button } from '@/components/Elemets/Button';
import { FieldWrapper } from '@/components/Form/FieldWrapper';
import { InputField } from '@/components/Form/InputField';

import styles from './index.module.css';

export const RegisterPage = () => {
  return (
    <Layout title="新規登録">
      <form>
        <FieldWrapper label="名前" htmlFor="name">
          <InputField type="text" id="name" onChange={() => console.log(888)} />
        </FieldWrapper>
        <FieldWrapper label="メールアドレス" htmlFor="email">
          <InputField type="email" id="email" onChange={() => console.log(888)} />
        </FieldWrapper>
        <FieldWrapper label="パスワード" htmlFor="password">
          <InputField type="password" id="password" onChange={() => console.log(888)} />
        </FieldWrapper>
        <FieldWrapper label="パスワード確認" htmlFor="confirm">
          <InputField type="password" id="confirm" onChange={() => console.log(888)} />
        </FieldWrapper>
        <div className={styles.registerButton}>
          <Button type="submit">登録</Button>
        </div>
      </form>
    </Layout>
  );
};
