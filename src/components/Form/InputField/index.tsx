import type { FC, ComponentProps } from 'react';

import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from './index.module.css';

type Props = {
  onChange: () => void;
  registration?: UseFormRegisterReturn;
} & Omit<ComponentProps<'input'>, 'onChange'>;

export const InputField: FC<Props> = ({ onChange, registration, ...props }) => {
  return (
    <>
      <input {...props} {...registration} className={styles.input} onChange={onChange} />
    </>
  );
};
