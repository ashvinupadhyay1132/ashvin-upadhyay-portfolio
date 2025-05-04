import React from 'react';
import useMagneticEffect from '../../hooks/useMagneticEffect';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
  icon?: React.ReactNode;
  href?: string;
  download?: boolean | string;  // Add this line
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  magnetic = false,
  className = '',
  icon,
  href,
  download, 
  ...props
}) => {
  const magneticRef = useMagneticEffect({ strength: 0.3, distance: 100 });
  
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 ease-out';
  
  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800',
    secondary: 'bg-gray-800 dark:bg-white dark:text-gray-900 text-white hover:bg-gray-700 dark:hover:bg-gray-100 active:bg-gray-900',
    outline: 'bg-transparent border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href}
        className={buttonClasses}
        ref={magnetic ? magneticRef as React.RefObject<HTMLAnchorElement> : undefined}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        download={download}
      >
        {icon && <span className="button-icon">{icon}</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button
      className={buttonClasses}
      ref={magnetic ? magneticRef as React.RefObject<HTMLButtonElement> : undefined}
      {...props}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;