import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { InputField } from '@/components/Form/InputField';

import { FieldWrapper } from './index';

export default {
  component: FieldWrapper,
} as ComponentMeta<typeof FieldWrapper>;

export const Default: ComponentStoryObj<typeof FieldWrapper> = {
  args: {
    label: '名前',
    // eslint-disable-next-line no-console
    children: <InputField onChange={() => console.log('chage')} />,
  },
};

export const NotLabel: ComponentStoryObj<typeof FieldWrapper> = {
  args: {
    label: '名前',
    // eslint-disable-next-line no-console
    children: <InputField onChange={() => console.log('chage')} />,
  },
};
