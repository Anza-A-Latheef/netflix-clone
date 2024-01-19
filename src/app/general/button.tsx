import React from 'react';

interface ButtonProps {
   
    label: string;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
    type?: "button" | "submit" | "reset";
  }

const Button :React.FC<ButtonProps>= ({ label, onClick, className,icon, type }) => {
  return (
    <button className={`my-button color-btn color-btn:hover ${className}`} type={type} onClick={onClick}>
      {label}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};


export default Button;
