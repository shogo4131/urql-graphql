import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import z from 'zod';

import { Layout } from '@/features/auth/components/Layout';
import { useRegisterMutation } from '@/graphql/generated/graphql';

import { Button } from '@/components/Elemets/Button';
import { FieldWrapper } from '@/components/Form/FieldWrapper';
import { InputField } from '@/components/Form/InputField';

import styles from './index.module.css';

const schema = z
  .object({
    name: z.string().min(1, '名前は必須です。').trim(),
    email: z.string().min(1, 'メールアドレスは必須です。').email('書式に誤りがあります。'),
    password: z.string().min(1, 'パスワードを入力してください。'),
    passwordConfirm: z.string().min(1, '確認パスワードを入力してください。'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'パスワードが一致しません。',
    path: ['passwordConfirm'],
  });

type Schema = z.infer<typeof schema>;

export const RegisterPage = () => {
  const [, register] = useRegisterMutation();

  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onClickRegisterHandler: SubmitHandler<Schema> = async (data) => {
    await register({
      registerInput: {
        username: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.passwordConfirm,
      },
    });
  };

  return (
    <Layout title="新規登録">
      <form className={styles.formGroup} onSubmit={handleSubmit(onClickRegisterHandler)}>
        <FieldWrapper label="名前" htmlFor="name" errror={errors.name}>
          <InputField type="text" id="name" registration={registerForm('name')} />
        </FieldWrapper>
        <FieldWrapper label="メールアドレス" htmlFor="email" errror={errors.email}>
          <InputField type="email" id="email" registration={registerForm('email')} />
        </FieldWrapper>
        <FieldWrapper label="パスワード" htmlFor="password" errror={errors.password}>
          <InputField type="password" id="password" registration={registerForm('password')} />
        </FieldWrapper>
        <FieldWrapper label="パスワード確認" htmlFor="confirm" errror={errors.passwordConfirm}>
          <InputField type="password" id="confirm" registration={registerForm('passwordConfirm')} />
        </FieldWrapper>
        <div className={styles.registerButton}>
          <Button type="submit">登録</Button>
        </div>
      </form>
    </Layout>
  );
};
