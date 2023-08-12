import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

//í ½í±‡ This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Button: Story = {
    args: {
        //í ½í±‡ The args you need here will depend on your component
    },
};