import Image from 'next/image';

import LogoutIcon from '@/assets/exit.svg';

import styles from './index.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div>
        <h1>テストアプリ</h1>
      </div>
      <div className={styles.user}>
        <div>ユーザー名</div>
        <button type="button">
          <Image src={LogoutIcon} alt="ログアウト" />
        </button>
      </div>
    </header>
  );
};
