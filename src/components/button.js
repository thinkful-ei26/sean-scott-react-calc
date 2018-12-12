import React from 'react';

export default function Button(props) {
  return(
      <button onClick={event => props.onClick(props.label)}>{props.label}</button>
  )
}

Button.propTypes = { label: String };
