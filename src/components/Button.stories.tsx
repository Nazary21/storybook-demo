import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Define metadata for the Button component stories
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Center the component in the Canvas tab
    layout: 'centered',
    // Add component documentation
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states. Built with Tailwind CSS and class-variance-authority for consistent styling.',
      },
    },
  },
  // Define available controls in the Controls tab
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'success', 'warning'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl', 'icon', 'icon-sm', 'icon-lg'],
      description: 'Size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
  },
  // Add component tags for better organization
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default button story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Button variants showcase
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-6">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Beautiful button variants with modern styling, subtle animations, and perfect shadows.',
      },
    },
  },
};

// Button sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple sizes with perfect proportions and spacing.',
      },
    },
  },
};

// Icon button showcase
export const IconButtons: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <Button size="icon-sm" variant="outline">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </Button>
      <Button size="icon" variant="default">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </Button>
      <Button size="icon-lg" variant="success">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon buttons in different sizes with beautiful SVG icons.',
      },
    },
  },
};

// Disabled states
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Default Disabled</Button>
      <Button variant="destructive" disabled>Destructive Disabled</Button>
      <Button variant="outline" disabled>Outline Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons in disabled state with reduced opacity and no interaction.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    children: 'Click me!',
    onClick: () => alert('Button clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button that responds to clicks.',
      },
    },
  },
};
