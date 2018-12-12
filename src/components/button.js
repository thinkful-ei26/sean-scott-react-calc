import React from 'react';

export default function Button(props) {
  return(
      <button onClick={() => props.onClick(props.label)}>{props.label}</button>
  )
}

Button.propTypes = { label: String, onClick: '' };
