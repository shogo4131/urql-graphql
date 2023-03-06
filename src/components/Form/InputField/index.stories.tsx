import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { InputField } from './index';

export default {
  component: InputField,
} as ComponentMeta<typeof InputField>;

export const Default: ComponentStoryObj<typeof InputField> = {
  args: {},
};
