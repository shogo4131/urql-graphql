import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { TextField } from './index';

export default {
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStoryObj<typeof TextField> = {
  args: {
    label: '名前',
    htmlFor: 'name',
    id: 'name',
  },
};
