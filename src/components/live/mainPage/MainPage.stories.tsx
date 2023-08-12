import type { Meta, StoryObj } from '@storybook/react';
import * as UI from './MainPage';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof UI.MainPage> = {
    component: UI.MainPage,
};

export default meta;
type Story = StoryObj<typeof UI.MainPage>;

export const MainPage: Story = {
    args: {
        //👇 The args you need here will depend on your component
    },
};