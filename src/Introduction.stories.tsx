import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/Card';
import { Badge } from './components/Badge';

// This is not a real component, just a container for our introduction
const Introduction = () => null;

const meta: Meta<typeof Introduction> = {
  title: 'Introduction',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Welcome to our component library! This design system provides a comprehensive set of primitive components built with React, TypeScript, and Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Component Library
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          A modern design system built with React, TypeScript, and Tailwind CSS
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Created by <strong>Nazarii Medukha</strong> for demo & testing purposes
        </p>
        <div className="flex justify-center gap-2">
          <Badge variant="default">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
          <Badge variant="success">Storybook</Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>🎨 Design System</CardTitle>
            <CardDescription>
              Consistent design tokens and components for building beautiful interfaces
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Unified color palette and typography</li>
              <li>• Consistent spacing and sizing</li>
              <li>• Accessible by default</li>
              <li>• Dark mode ready</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>⚡ Developer Experience</CardTitle>
            <CardDescription>
              Built for productivity with modern tooling and best practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• TypeScript for type safety</li>
              <li>• Storybook for development</li>
              <li>• Tailwind for styling</li>
              <li>• Class variance authority</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Component Preview</h2>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Component Demo</CardTitle>
            <CardDescription>
              See how our components work together to create beautiful interfaces
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Buttons */}
            <div>
              <h3 className="text-sm font-medium mb-3">Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
            </div>

            {/* Inputs */}
            <div>
              <h3 className="text-sm font-medium mb-3">Form Elements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  label="Email Address" 
                  placeholder="Enter your email"
                  helperText="We'll never share your email"
                />
                <Input 
                  label="Password" 
                  type="password"
                  placeholder="Enter password"
                />
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="text-sm font-medium mb-3">Status Indicators</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success">Active</Badge>
                <Badge variant="warning">Pending</Badge>
                <Badge variant="destructive">Error</Badge>
                <Badge variant="outline">Draft</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <p className="text-gray-600 mb-6">
          Explore the components in the sidebar to see all available options, variants, and usage examples.
        </p>
        <div className="flex justify-center gap-4">
          <Button>View Components</Button>
          <Button variant="outline">Documentation</Button>
        </div>
      </div>

      {/* Footer with attribution */}
      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
          <span>Built with ❤️ by</span>
          <Badge variant="outline" className="font-medium">
            Nazarii Medukha
          </Badge>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Demo & testing purposes • Modern React component library
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Welcome to our component library! This introduction showcases the key features and components available in the design system.',
      },
    },
  },
};

export const DesignTokens: Story = {
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Design Tokens</h1>
      
      <div className="space-y-12">
        {/* Colors */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-12 bg-primary-50 rounded border"></div>
              <p className="text-xs font-mono">primary-50</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-primary-500 rounded"></div>
              <p className="text-xs font-mono">primary-500</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-primary-600 rounded"></div>
              <p className="text-xs font-mono">primary-600</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-primary-700 rounded"></div>
              <p className="text-xs font-mono">primary-700</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Typography</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <p className="text-sm text-gray-500 font-mono">text-4xl font-bold</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Heading 2</h2>
              <p className="text-sm text-gray-500 font-mono">text-2xl font-semibold</p>
            </div>
            <div>
              <p className="text-base">Body text - Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-sm text-gray-500 font-mono">text-base</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Small text - Additional information or helper text</p>
              <p className="text-sm text-gray-500 font-mono">text-sm text-gray-600</p>
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Spacing</h2>
          <div className="space-y-2">
            {[1, 2, 4, 6, 8, 12, 16].map(space => (
              <div key={space} className="flex items-center gap-4">
                <div 
                  className="bg-primary-600 rounded"
                  style={{ width: `${space * 4}px`, height: '16px' }}
                ></div>
                <span className="text-sm font-mono">{space} ({space * 4}px)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of the design tokens used throughout the component library including colors, typography, and spacing.',
      },
    },
  },
};
