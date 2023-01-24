---
to: <%= absPath %>/<%= component_name %>.stories.jsx
---
import React from 'react';
import { <%= component_name %> } from './';

const Template = (args) => <<%= component_name %> {...args} />;

export const story = Template.bind({});
story.storyName = 'default'