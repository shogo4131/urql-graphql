import type { FC, ComponentProps } from 'react';

import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from './index.module.css';

type Props = {
  registration?: UseFormRegisterReturn;
} & ComponentProps<'input'>;

export const InputField: FC<Props> = ({ registration, ...props }) => {
  return <input {...props} {...registration} className={styles.input} />;
};
