import type { Preview } from '@storybook/react';
// Import Tailwind CSS styles
import '../src/index.css';

const preview: Preview = {
  // Configure global parameters
  parameters: {
    // Configure the actions addon
    actions: { argTypesRegex: '^on[A-Z].*' },
    
    // Configure the controls addon
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    
    // Configure the docs addon
    docs: {
      toc: true, // Enable table of contents
    },
    
    // Configure layout options
    layout: 'centered',
  },
};

export default preview;
