import React from 'react';

const Card = ({ 
  children, 
  className = '',
  padding = 'default',
  onClick,
  variant = 'default',
  ...props 
}) => {
  const paddings = {
    none: '',
    sm: 'p-2',
    default: 'p-4',
    lg: 'p-6',
  };

  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white border border-gray-200 shadow-sm',
    outline: 'bg-transparent border border-gray-300',
    gradient: 'bg-gradient-to-br from-primary to-primary-light text-white',
  };

  const baseStyles = 'rounded-xl transition-all';
  const clickableStyles = onClick ? 'cursor-pointer hover:shadow-md active:scale-[0.98]' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${clickableStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Sub-components for better organization
Card.Header = ({ children, className = '' }) => (
  <div className={`mb-3 ${className}`}>
    {children}
  </div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`mt-3 pt-3 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

Card.Title = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

Card.Subtitle = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-600 ${className}`}>
    {children}
  </p>
);

export default Card;