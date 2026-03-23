import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = 'px-6 py-2 rounded-md font-subtitle font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-brand-highlight text-white hover:bg-brand-primary focus:ring-brand-highlight',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-tertiary focus:ring-brand-secondary',
    tertiary: 'bg-brand-highlight/10 text-brand-highlight hover:bg-brand-highlight hover:text-white focus:ring-brand-highlight',
  };

  return (
    <button 
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
