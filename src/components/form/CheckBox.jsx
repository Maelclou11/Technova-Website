import React from 'react'

function CheckBox({text, name, value, onChange}) {

    const handleCheckboxChange = (e) => {
      onChange(name, e.target.checked);
    };
    
  return (
    <div className='checkbox'>
      <label>
        <p>{text}</p>
        <input type="checkbox" name={name} checked={value} onChange={handleCheckboxChange} />
        <div className="isChecked"></div>
      </label>
    </div>
  )
}

export default CheckBox