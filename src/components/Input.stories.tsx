import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

// Define metadata for the Input component stories
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input field component with label, error handling, and helper text support. Features multiple sizes and validation states.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
      description: 'Size of the input field',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: 'Visual state of the input',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text for the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text to display below input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default input story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

// Input with label
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

// Input sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="sm" placeholder="Small input" label="Small" />
      <Input size="default" placeholder="Default input" label="Default" />
      <Input size="lg" placeholder="Large input" label="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes available for the input component.',
      },
    },
  },
};

// Input states showcase
export const States: Story = {
  render: () => (
    <div className="space-y-6 w-96 p-6">
      <Input 
        label="Default State" 
        placeholder="Enter your text..."
        helperText="This is helpful information about the field"
      />
      <Input 
        label="Success State" 
        variant="success"
        placeholder="Valid input"
        helperText="Great! This input looks perfect"
      />
      <Input 
        label="Warning State" 
        variant="warning"
        placeholder="Potentially problematic input"
        helperText="This might need your attention"
      />
      <Input 
        label="Error State" 
        placeholder="Invalid input"
        error="This field is required and cannot be empty"
      />
      <Input 
        label="Disabled State" 
        placeholder="Disabled input"
        disabled
        helperText="This field is currently unavailable"
      />
      <Input 
        label="Required Field" 
        placeholder="Enter required information"
        required
        helperText="This field must be completed"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Beautiful input states with icons, colors, and smooth animations.',
      },
    },
  },
};

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <Input 
        label="First Name" 
        placeholder="Enter your first name"
        required
      />
      <Input 
        label="Email Address" 
        type="email"
        placeholder="Enter your email"
        helperText="We'll never share your email"
        required
      />
      <Input 
        label="Password" 
        type="password"
        placeholder="Enter your password"
        helperText="Must be at least 8 characters"
        required
      />
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of inputs used in a form context with different types and validation.',
      },
    },
  },
};
