import React, { useState } from 'react';

function FormWithDropdown() {
  const [selectedOption, setSelectedOption] = useState('option1');
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Option: ', selectedOption);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="option1">String</option>
        <option value="option2">Number</option>
        <option value="option3">Boolean</option>
        <option value="option3">Object</option>
      </select>
      <button type="submit">Submit</button>
      <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
      <button onClick={() => this.props.onADD(this.props.id)}>ADD</button>


    </form>
  );
}

export default FormWithDropdown;
