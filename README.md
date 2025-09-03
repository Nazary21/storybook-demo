# Component Library

A modern component library built with React, TypeScript, Tailwind CSS, and Storybook.

## 🚀 Quick Start

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start Storybook:
   ```bash
   npm run storybook
   ```

4. Open your browser to [http://localhost:6006](http://localhost:6006)

## 📦 Components

This library includes the following primitive components:

### Button
- **Variants**: default, destructive, outline, secondary, ghost, link
- **Sizes**: default, sm, lg, icon
- **Features**: Accessible focus states, disabled states, consistent styling

### Input
- **Sizes**: default, sm, lg
- **States**: default, error, success
- **Features**: Label support, error messages, helper text, accessibility

### Card
- **Variants**: default, outlined, elevated
- **Sections**: CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Features**: Flexible layout, consistent spacing, shadow system

### Badge
- **Variants**: default, secondary, destructive, success, warning, outline
- **Sizes**: default, sm, lg
- **Features**: Status indicators, category labels, count displays

## 🛠 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Storybook 8** - Component development and documentation
- **Vite** - Fast build tool
- **Class Variance Authority** - Component variants

## 📖 Development

### Available Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run build` - Build the component library
- `npm run dev` - Start Vite development server

### Project Structure

```
src/
├── components/          # Component implementations
│   ├── Button.tsx      # Button component
│   ├── Button.stories.tsx
│   ├── Input.tsx       # Input component
│   ├── Input.stories.tsx
│   ├── Card.tsx        # Card component
│   ├── Card.stories.tsx
│   ├── Badge.tsx       # Badge component
│   ├── Badge.stories.tsx
│   └── index.ts        # Component exports
├── index.css           # Global styles and Tailwind imports
└── Introduction.stories.tsx  # Welcome documentation
```

### Design Tokens

The component library uses Tailwind CSS for consistent design tokens:

- **Colors**: Primary palette with 50-900 shades
- **Typography**: Font sizes from xs to 4xl
- **Spacing**: Consistent spacing scale (1-16)
- **Shadows**: Subtle shadow system for elevation
- **Border Radius**: Consistent rounding (sm, md, lg)

### Component Architecture

Components are built using:

- **React.forwardRef** for proper ref forwarding
- **Class Variance Authority** for variant management
- **TypeScript interfaces** for prop definitions
- **Tailwind classes** for styling
- **Accessibility best practices**

## 🎨 Customization

### Tailwind Configuration

Customize the design system by modifying `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          // Add your brand colors
        },
      },
    },
  },
}
```

### Component Variants

Add new variants by extending the `cva` configuration in each component:

```typescript
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        // Add new variants here
        custom: "custom-classes",
      },
    },
  }
);
```

## 📚 Documentation

- **Storybook**: Interactive component documentation at [http://localhost:6006](http://localhost:6006)
- **Component APIs**: Full TypeScript definitions with JSDoc comments
- **Usage Examples**: Multiple story examples for each component

## 🚀 Usage in Your App

1. Export components from this library
2. Import them in your application:

```typescript
import { Button, Input, Card, Badge } from './path-to-library';

function MyApp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Input label="Email" placeholder="Enter email" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}
```

## 🤝 Contributing

1. Create feature branches for new components
2. Follow the existing component patterns
3. Add comprehensive Storybook stories
4. Include TypeScript definitions
5. Test accessibility and responsive behavior

## 📄 License

ISC License - feel free to use in your projects!
