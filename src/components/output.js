import React from 'react';

export default function Output(props) {
  return <div>
    <output>
      {props.value}
      <br />
      {props.equals}
    </output>
  </div>
}

// Output.defaultProps = {
//     value: 0
// };
Output.propTypes = { value: String, equals: String };
