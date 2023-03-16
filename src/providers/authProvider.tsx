import { FC, ReactNode, createContext, useState } from 'react';

import {
  RegisterMutation,
  LoginMutation,
  useLoginMutation,
  useRegisterMutation,
} from '@/graphql/generated/graphql';

type AuthContextHandler = {
  registerHandler: (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<RegisterMutation | undefined>;
  loginHandler: (username: string, password: string) => Promise<LoginMutation | undefined>;
};

type Auth = {
  token?: string;
  isAuthCheck?: boolean;
};

type AuthContext = Auth & AuthContextHandler;

type Props = {
  children: ReactNode;
};

const exception = () => {
  throw new Error('AuthProvider is not set');
};

export const AuthContext = createContext<AuthContext>({
  registerHandler: exception,
  loginHandler: exception,
});

export const useAtuh = createContext(AuthContext);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [, register] = useRegisterMutation();
  const [, login] = useLoginMutation();

  const [isAuthCheck] = useState(false);

  const loginHandler: AuthContext['loginHandler'] = async (username: string, password: string) => {
    const res = await login({ username, password });
    localStorage.setItem('token', res.data?.login.token as string);
    return res.data;
  };

  const registerHandler: AuthContext['registerHandler'] = async (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    const res = await register({ registerInput: { username, email, password, confirmPassword } });
    localStorage.setItem('token', res.data?.register.token as string);
    return res.data;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthCheck,
        loginHandler,
        registerHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
