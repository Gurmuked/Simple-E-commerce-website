import React from 'react';

const Button = (props) =>(
    <button className={`px-16 py-3 ${props.style}`} onClick={props.onClick}>
     {props.value}
    </button>
  )
export default Button;