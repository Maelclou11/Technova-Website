import React from 'react';

function TextInput({ name, labelText, type, placeholder, value, onChange, isRequired, errorMessage }) {
  const handleInputChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="text-input">
      <label htmlFor={name}>{labelText}</label>
      {errorMessage && <div className="fillTheMissing">{errorMessage}</div>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value || ''}
        onChange={handleInputChange}
        required={isRequired}
      />
    </div>
  );
}

export default TextInput;
