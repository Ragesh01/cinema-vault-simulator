
import React from 'react';
import { cn } from '@/lib/utils';

const ButtonCustom = React.forwardRef(
  ({ className, variant = 'primary', size = 'md', isLoading, icon, children, ...props }, ref) => {
    const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50';
    
    const variantClasses = {
      primary: 'bg-primary text-white hover:bg-primary-dark shadow-sm',
      secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
      ghost: 'bg-transparent hover:bg-gray-100 text-gray-800',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-800',
    };
    
    const sizeClasses = {
      sm: 'h-9 px-3 text-sm rounded',
      md: 'h-10 px-4 py-2 rounded-md',
      lg: 'h-11 px-6 py-2 text-base rounded-md',
    };
    
    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
        <span className={isLoading ? 'opacity-0' : 'flex items-center gap-2'}>
          {icon && <span>{icon}</span>}
          {children}
        </span>
      </button>
    );
  }
);

ButtonCustom.displayName = 'ButtonCustom';

export { ButtonCustom };
