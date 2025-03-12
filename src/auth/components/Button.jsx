// Button.jsx
import React from 'react';

const Button = ({ onClick, children, type = "button", style = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full p-3 rounded-md text-white ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;