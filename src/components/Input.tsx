import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define beautiful modern input variants using direct Tailwind classes
const inputVariants = cva(
  // Base styles - modern input foundation
  'flex w-full rounded-lg border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out',
  {
    variants: {
      // Modern size variants
      size: {
        sm: 'h-8 px-3 text-xs rounded-md',
        default: 'h-10 px-3 text-sm rounded-lg',
        lg: 'h-12 px-4 text-base rounded-lg',
      },
      // Beautiful state variants
      variant: {
        default: [
          'border-gray-200 focus-visible:ring-blue-500 focus-visible:border-blue-500',
          'hover:border-gray-300 shadow-sm hover:shadow-md'
        ],
        error: [
          'border-red-300 text-red-900 focus-visible:ring-red-500 focus-visible:border-red-500',
          'hover:border-red-400 bg-red-50/50'
        ],
        success: [
          'border-green-300 text-green-900 focus-visible:ring-green-500 focus-visible:border-green-500',
          'hover:border-green-400 bg-green-50/50'
        ],
        warning: [
          'border-amber-300 text-amber-900 focus-visible:ring-amber-500 focus-visible:border-amber-500',
          'hover:border-amber-400 bg-amber-50/50'
        ],
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  }
);

// Define the props interface
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  // Additional custom props
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Input component - A flexible input field with label and error handling
 * 
 * Features:
 * - Multiple sizes (sm, default, lg)
 * - Error and success states
 * - Label and helper text support
 * - Proper accessibility
 * - Focus states
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, label, error, helperText, id, ...props }, ref) => {
    // Generate a unique ID if none provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    return (
      <div className="w-full group">
        {/* Modern Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-900 mb-2 transition-colors duration-200 group-hover:text-blue-700"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        {/* Input Container with Icon Support */}
        <div className="relative">
          <input
            id={inputId}
            className={inputVariants({ 
              size, 
              variant: error ? 'error' : variant, 
              className 
            })}
            ref={ref}
            {...props}
          />
          
          {/* Success Icon */}
          {variant === 'success' && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
          
          {/* Error Icon */}
          {error && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-4 w-4 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          )}
          
          {/* Warning Icon */}
          {variant === 'warning' && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-4 w-4 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Error message with icon */}
        {error && (
          <div className="mt-2 flex items-start space-x-2">
            <svg className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          </div>
        )}
        
        {/* Helper text (only show if no error) */}
        {!error && helperText && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
