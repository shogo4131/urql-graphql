import Image from 'next/image';

import LogoutIcon from '@/assets/exit.svg';
import { useAuth } from '@/providers/authProvider';

import styles from './index.module.css';

export const Header = () => {
  const { user, logoutHandler } = useAuth();

  // TODO: API作ったら修正
  const onClickLogoutHandler = () => {
    logoutHandler();
    window.location.assign('/login');
  };

  return (
    <header className={styles.root}>
      <div>
        <h1>テストアプリ</h1>
      </div>
      <div className={styles.user}>
        <div>{user}</div>
        <button type="button" onClick={onClickLogoutHandler}>
          <Image src={LogoutIcon} alt="ログアウト" />
        </button>
      </div>
    </header>
  );
};
