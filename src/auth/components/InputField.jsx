// InputField.jsx
import React from 'react';

const InputField = ({ type, name, placeholder, value, onChange, required }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default InputField;