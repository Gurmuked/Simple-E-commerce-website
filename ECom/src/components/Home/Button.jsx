import React from 'react';

const Button = (props) =>(
    <button className={`px-16 py-3 ${props.style}`}>
     {props.value}
    </button>
  )
export default Button;