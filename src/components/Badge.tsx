import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define beautiful modern badge variants using direct Tailwind classes
const badgeVariants = cva(
  // Base styles - modern badge foundation
  'inline-flex items-center rounded-full font-medium transition-all duration-200 ease-in-out',
  {
    variants: {
      // Beautiful visual variants with modern colors
      variant: {
        default: [
          'bg-blue-600 text-white shadow-lg shadow-blue-500/25',
          'hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105'
        ],
        secondary: [
          'bg-gray-100 text-gray-900 border border-gray-200',
          'hover:bg-gray-200 hover:scale-105'
        ],
        destructive: [
          'bg-red-600 text-white shadow-lg shadow-red-500/25',
          'hover:bg-red-700 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105'
        ],
        success: [
          'bg-green-600 text-white shadow-lg shadow-green-500/25',
          'hover:bg-green-700 hover:shadow-xl hover:shadow-green-500/30 hover:scale-105'
        ],
        warning: [
          'bg-amber-500 text-white shadow-lg shadow-amber-500/25',
          'hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105'
        ],
        outline: [
          'border-2 border-gray-200 bg-white text-gray-900',
          'hover:bg-gray-50 hover:border-gray-300 hover:scale-105'
        ],
        ghost: [
          'text-gray-700 bg-transparent',
          'hover:bg-gray-100 hover:text-gray-900 hover:scale-105'
        ],
        gradient: [
          'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25',
          'hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105'
        ],
      },
      // Modern size variants with perfect proportions
      size: {
        sm: 'px-2 py-0.5 text-xs h-5',
        default: 'px-2.5 py-1 text-xs h-6',
        lg: 'px-3 py-1.5 text-sm h-7',
        xl: 'px-4 py-2 text-base h-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Define the props interface
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  // Additional custom props can be added here
}

/**
 * Badge component - Small status indicators and labels
 * 
 * Features:
 * - Multiple color variants (default, secondary, destructive, etc.)
 * - Different sizes (sm, default, lg)
 * - Hover states
 * - Accessible focus states
 * - Flexible content support
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={badgeVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
