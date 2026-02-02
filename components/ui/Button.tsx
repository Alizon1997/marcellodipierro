import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-brand-dark disabled:opacity-50 disabled:cursor-not-allowed rounded-lg tracking-wide";
  
  const variants = {
    primary: "bg-brand-accent hover:bg-[#CC4400] text-white shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 border border-transparent",
    secondary: "bg-brand-surfaceHighlight hover:bg-brand-border text-brand-text border border-brand-border",
    outline: "bg-transparent hover:bg-brand-surfaceHighlight text-brand-text border border-brand-border hover:border-brand-accent/50",
    ghost: "bg-transparent hover:bg-brand-surfaceHighlight text-brand-muted hover:text-brand-text border border-transparent"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs font-semibold",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;