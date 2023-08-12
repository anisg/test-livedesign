import type { Meta, StoryObj } from '@storybook/react';
import { BadgeLiveDesign } from './BadgeLiveDesign';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof BadgeLiveDesign> = {
    component: BadgeLiveDesign,
};

export default meta;
type Story = StoryObj<typeof BadgeLiveDesign>;

export const BadgeLiveDesign: Story = {
    args: {
        //👇 The args you need here will depend on your component
    },
};