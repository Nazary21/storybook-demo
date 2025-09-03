import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define beautiful modern card variants using direct Tailwind classes
const cardVariants = cva(
  // Base styles - modern card foundation
  'rounded-xl border bg-white text-gray-900 transition-all duration-300 ease-out group',
  {
    variants: {
      // Beautiful visual variants
      variant: {
        default: [
          'border-gray-200 shadow-lg shadow-gray-900/5',
          'hover:shadow-xl hover:shadow-gray-900/10 hover:translate-y-[-2px]'
        ],
        outlined: [
          'border-2 border-gray-200 shadow-sm',
          'hover:border-blue-300 hover:shadow-md transition-all duration-300'
        ],
        elevated: [
          'border-gray-200 shadow-xl shadow-gray-900/10',
          'hover:shadow-2xl hover:shadow-gray-900/15 hover:translate-y-[-4px]'
        ],
        glass: [
          'backdrop-blur-xl bg-white/80 border-white/20 shadow-xl shadow-gray-900/10',
          'hover:shadow-2xl hover:shadow-gray-900/15'
        ],
        gradient: [
          'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 shadow-lg shadow-gray-900/5',
          'hover:shadow-xl hover:shadow-gray-900/10'
        ],
      },
      // Flexible padding options
      padding: {
        none: 'p-0',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
    },
  }
);

// Define the props interface
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  // Additional custom props can be added here
}

/**
 * Card component - A flexible container for content
 * 
 * Features:
 * - Multiple visual variants (default, outlined, elevated)
 * - Different padding options
 * - Responsive design
 * - Clean shadow system
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        className={cardVariants({ variant, padding, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

/**
 * CardHeader - Modern header section with beautiful typography
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-2 p-6 ${className || ''}`}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

/**
 * CardTitle - Beautiful title with modern typography
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-xl font-semibold leading-tight tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors duration-200 ${className || ''}`}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

/**
 * CardDescription - Elegant description text
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-gray-600 leading-relaxed ${className || ''}`}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

/**
 * CardContent - Spacious content area
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className || ''}`} {...props} />
));
CardContent.displayName = 'CardContent';

/**
 * CardFooter - Modern footer with flex layout
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center justify-between p-6 pt-0 border-t border-border/50 mt-4 ${className || ''}`}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
};
