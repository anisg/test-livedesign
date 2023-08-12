import type { Meta, StoryObj } from '@storybook/react';
import * as UI from './BadgeLiveDesign';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof UI.BadgeLiveDesign> = {
    component: UI.BadgeLiveDesign,
};

export default meta;
type Story = StoryObj<typeof UI.BadgeLiveDesign>;

export const BadgeLiveDesign: Story = {
    args: {
        //👇 The args you need here will depend on your component
    },
};