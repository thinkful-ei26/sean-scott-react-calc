import React from 'react';
import Button from './button.js';
import Output from './output.js';
import EqualsDisplay from './equalsDisplay';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      operand1: null,
      operand2: null,
      operator: null
    };
  }

  setOperand(operand) {
    let op;
    if (this.state.operator) {
      if (!this.state.operand2) op = operand;
      else op = this.state.operand2.concat(operand);
      this.setState({operand2: op});
    } else {
      if (!this.state.operand1) op = operand;
      else op = this.state.operand1.concat(operand);
      this.setState({operand1: op});
    }
  }
  setOperator(operator) {
    if (this.state.operand1) this.setState({operator});
  }
  clear() {
    this.setState({
      operand1: null,
      operand2: null,
      operator: null
    })
  }

  render() {
    return (
      <div>
        <Output value={`${this.state.operand1} ${this.state.operator} ${this.state.operand2}`}/>
        <Button label="1" onClick={op => this.setOperand(op)} />
        <Button label="2" onClick={op => this.setOperand(op)}/>
        <Button label="3" onClick={op => this.setOperand(op)}/>
        <Button label="+" onClick={op => this.setOperator(op)} />
        <br />
        <Button label="4" onClick={op => this.setOperand(op)}/>
        <Button label="5" onClick={op => this.setOperand(op)}/>
        <Button label="6" onClick={op => this.setOperand(op)}/>
        <Button label="-" onClick={op => this.setOperator(op)} />
        <br />
        <Button label="7" onClick={op => this.setOperand(op)}/>
        <Button label="8" onClick={op => this.setOperand(op)}/>
        <Button label="9" onClick={op => this.setOperand(op)}/>
        <Button label="x" onClick={op => this.setOperator(op)}/>
        <br />
        <Button label="C" onClick={() => this.clear()}/>
        <Button label="0" onClick={op => this.setOperand(op)}/>
        <Button label="=" />
        <Button label="/" onClick={op => this.setOperator(op)}/>
      </div>
    )
  }
}
