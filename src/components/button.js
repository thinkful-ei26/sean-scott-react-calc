import React from 'react';
import PropTypes from 'prop-types'

export default function Button(props) {
  return(
      <button onClick={() => props.onClick(props.label)}>{props.label}</button>
  )
}

Button.propTypes = { label: PropTypes.string, onClick: PropTypes.func };
