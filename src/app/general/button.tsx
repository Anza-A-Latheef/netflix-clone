import React from 'react';

interface ButtonProps {
   
    label: string;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
  }

const Button :React.FC<ButtonProps>= ({ label, onClick, className,icon }) => {
  return (
    <button className={`my-button color-btn color-btn:hover ${className}`} onClick={onClick}>
      {label}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};


export default Button;
