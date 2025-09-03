import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

// Define metadata for the Badge component stories
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Small status indicators and labels for displaying categories, statuses, or counts. Available in multiple colors and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'success', 'warning', 'outline', 'ghost', 'gradient'],
      description: 'Visual style variant of the badge',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'Size of the badge',
    },
    children: {
      control: { type: 'text' },
      description: 'Badge content',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default badge story
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

// Badge variants showcase
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="gradient">Gradient</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Beautiful badge variants with modern styling, subtle animations, and perfect hover effects.',
      },
    },
  },
};

// Badge sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">Extra Large</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple sizes with perfect proportions and consistent spacing.',
      },
    },
  },
};

// Status badges example
export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Order Status:</span>
        <Badge variant="warning">Pending</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Payment Status:</span>
        <Badge variant="success">Paid</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Subscription:</span>
        <Badge variant="default">Premium</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Account Status:</span>
        <Badge variant="destructive">Suspended</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of badges used for status indicators in different contexts.',
      },
    },
  },
};

// Category badges example
export const CategoryBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Article Categories:</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Technology</Badge>
          <Badge variant="secondary">Design</Badge>
          <Badge variant="secondary">Development</Badge>
          <Badge variant="secondary">Business</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Skills:</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Node.js</Badge>
          <Badge variant="outline">Python</Badge>
          <Badge variant="outline">AWS</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of badges used for categorization and tagging.',
      },
    },
  },
};

// Count badges example
export const CountBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span>Messages</span>
          <Badge variant="destructive" size="sm">3</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span>Notifications</span>
          <Badge variant="default" size="sm">12</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span>Cart Items</span>
          <Badge variant="success" size="sm">5</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of badges used for displaying counts and numbers.',
      },
    },
  },
};
