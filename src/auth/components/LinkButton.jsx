// LinkButton.jsx
import React from 'react';

const LinkButton = ({ children, href, className = "" }) => {
  return (
    <a href={href} className={`text-purple-600 hover:underline ${className}`}>
      {children}
    </a>
  );
};

export default LinkButton;