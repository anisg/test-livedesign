import type { Meta, StoryObj } from '@storybook/react';
import * as UI from './Button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof UI.Button> = {
    component: UI.Button,
};

export default meta;
type Story = StoryObj<typeof UI.Button>;

export const Button: Story = {
    args: {
        //👇 The args you need here will depend on your component
    },
};