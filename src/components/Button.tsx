import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, to, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-sage-800 text-sand-50 hover:bg-sage-700 shadow-sm hover:shadow-md",
    secondary: "bg-sand-200 text-sage-900 hover:bg-sand-300",
    outline: "border border-sage-300 text-sage-800 hover:border-sage-800 hover:bg-sage-50"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={combinedClassName}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">{children}</a>;
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
