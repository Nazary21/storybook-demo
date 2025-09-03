import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Define where to find stories
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  
  // Essential addons for a great Storybook experience
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  
  // Use Vite as the builder for fast development
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  
  // Enable TypeScript support
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};

export default config;
