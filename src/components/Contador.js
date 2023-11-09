import React, { useState } from "react";

const Contador = (props) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <div>
      <label for={props.id}> {props.label} </label>
      <input id={props.id} type="text" value={value} placeholder={props.placeholder} onChange={handleInputChange}/>
      <p>Esse texto contém {value.length} caracteres.</p>
    </div>
  );
};

export default Contador;