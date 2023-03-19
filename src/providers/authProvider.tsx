import { type FC, type ReactNode, createContext, useContext, useState } from 'react';

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
  logoutHandler: () => void;
};

type Auth = {
  user?: string;
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
  logoutHandler: exception,
});

export const useAuth = () => useContext(AuthContext);

// TODO: ログアウトAPIを追加する
export const AuthProvider: FC<Props> = ({ children }) => {
  const [, register] = useRegisterMutation();
  const [, login] = useLoginMutation();

  const [isAuthCheck] = useState(false);
  const [user, setUser] = useState('');

  const loginHandler: AuthContext['loginHandler'] = async (username: string, password: string) => {
    const res = await login({ username, password });
    setUser(res.data?.login.username || '');
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
    setUser(res.data?.register.username || '');
    localStorage.setItem('token', res.data?.register.token || '');
    return res.data;
  };

  const logoutHandler: AuthContext['logoutHandler'] = () => {
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthCheck,
        loginHandler,
        registerHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
