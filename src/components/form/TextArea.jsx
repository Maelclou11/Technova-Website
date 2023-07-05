import React from 'react';

function TextArea({ labelText, name, placeholder, value, onChange }) {
  const handleTextAreaChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="text-area">
      <label htmlFor={name}>{labelText}</label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        value={value || ''}
        onChange={handleTextAreaChange}
      />
    </div>
  );
}

export default TextArea;
