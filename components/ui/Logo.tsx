import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Storm X Digital" 
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;