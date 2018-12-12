import React from 'react';
import PropTypes from 'prop-types'

export default function Output(props) {
  return <div>
    <output>
      {props.value}
      <br />
      {props.equals}
    </output>
  </div>
}

Output.propTypes = { value: PropTypes.string, equals: PropTypes.string };
