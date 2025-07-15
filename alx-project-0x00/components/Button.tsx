import React from 'react';
import { ButtonProps } from '@/interfaces'; // Import the new interface

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`bg-blue-500 text-white font-semibold py-2 px-4 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;