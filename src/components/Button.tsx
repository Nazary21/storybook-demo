import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define beautiful modern button variants using direct Tailwind classes
const buttonVariants = cva(
  // Base styles - modern, accessible, and smooth
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group',
  {
    variants: {
      // Beautiful visual variants with modern styling
      variant: {
        default: [
          'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25',
          'hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]',
          'active:scale-[0.98] border border-blue-600/20'
        ],
        destructive: [
          'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25',
          'hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:shadow-red-500/30 hover:scale-[1.02]',
          'active:scale-[0.98] border border-red-600/20'
        ],
        outline: [
          'border-2 border-gray-200 bg-white text-gray-900 shadow-sm',
          'hover:bg-gray-50 hover:border-blue-300 hover:text-blue-700 hover:shadow-md hover:scale-[1.02]',
          'active:scale-[0.98]'
        ],
        secondary: [
          'bg-gray-100 text-gray-900 shadow-sm border border-gray-200',
          'hover:bg-gray-200 hover:shadow-md hover:scale-[1.02]',
          'active:scale-[0.98]'
        ],
        ghost: [
          'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
          'hover:scale-[1.02] active:scale-[0.98] transition-all duration-200'
        ],
        link: [
          'text-blue-600 underline-offset-4 hover:underline hover:text-blue-700',
          'transition-colors duration-200'
        ],
        success: [
          'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/25',
          'hover:from-green-700 hover:to-green-800 hover:shadow-xl hover:shadow-green-500/30 hover:scale-[1.02]',
          'active:scale-[0.98] border border-green-600/20'
        ],
        warning: [
          'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25',
          'hover:from-amber-600 hover:to-amber-700 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02]',
          'active:scale-[0.98] border border-amber-500/20'
        ],
      },
      // Perfect size variants with proper spacing
      size: {
        sm: 'h-8 px-3 text-xs rounded-md',
        default: 'h-10 px-4 text-sm rounded-lg',
        lg: 'h-12 px-6 text-base rounded-lg',
        xl: 'h-14 px-8 text-lg rounded-xl',
        icon: 'h-10 w-10 rounded-lg',
        'icon-sm': 'h-8 w-8 rounded-md',
        'icon-lg': 'h-12 w-12 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Define the props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // Additional custom props can be added here
  asChild?: boolean;
}

/**
 * Button component - A versatile button with multiple variants and sizes
 * 
 * Features:
 * - Multiple visual variants (default, destructive, outline, etc.)
 * - Different sizes (sm, default, lg, icon)
 * - Proper accessibility support
 * - Consistent focus states
 * - Disabled states
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
