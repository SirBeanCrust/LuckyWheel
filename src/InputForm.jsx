// InputForm.jsx
import React, { useState } from 'react';

function InputForm({ addName }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addName(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit">Add Name</button>
    </form>
  );
}

export default InputForm;
