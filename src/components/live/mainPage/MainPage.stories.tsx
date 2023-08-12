import type { Meta, StoryObj } from '@storybook/react';
import { MainPage } from './MainPage';

//í ½í±‡ This default export determines where your story goes in the story list
const meta: Meta<typeof MainPage> = {
    component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const MainPage: Story = {
    args: {
        //í ½í±‡ The args you need here will depend on your component
    },
};