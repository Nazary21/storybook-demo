import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';

// Define metadata for the Card component stories
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card container component with header, content, and footer sections. Perfect for displaying structured content with consistent styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated', 'glass', 'gradient'],
      description: 'Visual style variant of the card',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'default', 'lg', 'xl'],
      description: 'Padding size for the card',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card story
export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardContent>
        <p>This is a basic card with some content inside.</p>
      </CardContent>
    </Card>
  ),
};

// Card with header and footer
export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a card description that provides more context about the content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. It can contain any type of content including text, images, or other components.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A complete card with header, content, and footer sections.',
      },
    },
  },
};

// Card variants showcase
export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <Card variant="default" className="w-full">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Beautiful default styling with soft shadows and smooth animations.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Perfect for general content with subtle elegance.</p>
        </CardContent>
      </Card>
      
      <Card variant="outlined" className="w-full">
        <CardHeader>
          <CardTitle>Outlined Card</CardTitle>
          <CardDescription>Clean borders with hover interactions and modern spacing.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Minimalist design that focuses on content.</p>
        </CardContent>
      </Card>
      
      <Card variant="elevated" className="w-full">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>Enhanced shadows with lift animations for prominence.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Perfect for highlighting important information.</p>
        </CardContent>
      </Card>
      
      <Card variant="glass" className="w-full">
        <CardHeader>
          <CardTitle>Glass Card</CardTitle>
          <CardDescription>Modern glass morphism effect with backdrop blur.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Contemporary design with transparency effects.</p>
        </CardContent>
      </Card>
      
      <Card variant="gradient" className="w-full">
        <CardHeader>
          <CardTitle>Gradient Card</CardTitle>
          <CardDescription>Subtle gradient background for visual interest.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Eye-catching design with gradient backgrounds.</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Beautiful card variants with modern styling, animations, and visual effects.',
      },
    },
  },
};

// Product card example
export const ProductCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Premium Headphones</CardTitle>
            <CardDescription>Wireless noise-canceling headphones</CardDescription>
          </div>
          <Badge variant="success">In Stock</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-2xl font-bold">$299.99</p>
          <p className="text-sm text-gray-600">
            High-quality audio with active noise cancellation. Perfect for music lovers and professionals.
          </p>
          <ul className="text-sm space-y-1">
            <li>• 30-hour battery life</li>
            <li>• Bluetooth 5.0 connectivity</li>
            <li>• Premium build quality</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Add to Cart</Button>
        <Button variant="outline">Wishlist</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a product card with pricing, features, and actions.',
      },
    },
  },
};

// Profile card example
export const ProfileCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Senior Developer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          Experienced full-stack developer with expertise in React, Node.js, and cloud technologies. 
          Passionate about creating scalable and maintainable applications.
        </p>
        <div className="flex gap-2 mt-4">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Node.js</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a profile card with avatar, skills, and actions.',
      },
    },
  },
};
