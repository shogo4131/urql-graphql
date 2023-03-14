import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import z from 'zod';

import { Layout } from '@/features/auth/components/Layout';
import { useLoginMutation } from '@/graphql/generated/graphql';

import { Button } from '@/components/Elemets/Button';
import { FieldWrapper } from '@/components/Form/FieldWrapper';
import { InputField } from '@/components/Form/InputField';

import styles from './index.module.css';

const schema = z.object({
  name: z.string().min(1, '名前は必須です。').trim(),
  password: z.string().min(1, 'パスワードを入力してください。'),
});

type Schema = z.infer<typeof schema>;

export const LoginPage = () => {
  const [, login] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Schema>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const onClickLoginHandler: SubmitHandler<Schema> = async (data) => {
    await login({ username: data.name, password: data.password });
  };

  return (
    <Layout title="テストアプリ">
      <form className={styles.formGroup} onSubmit={handleSubmit(onClickLoginHandler)}>
        <FieldWrapper label="名前" htmlFor="name" errror={errors.name}>
          <InputField type="text" id="name" registration={register('name')} />
        </FieldWrapper>
        <FieldWrapper label="パスワード" htmlFor="password" errror={errors.password}>
          <InputField type="password" id="password" registration={register('password')} />
        </FieldWrapper>
        <div className={styles.loginButton}>
          <Button type="submit" disabled={!isValid}>
            ログイン
          </Button>
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
