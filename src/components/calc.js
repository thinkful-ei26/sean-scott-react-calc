import React from 'react';
import Button from './button.js';
import Output from './output.js';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      operand1: "",
      operand2: "",
      operator: "",
      equals: "",
    };
  }

  setOperand(operand) {
    if (this.state.equals) {
      this.setState({
        operand1: operand,
        operand2: "",
        operator: "",
        equals: "",
      });
    } else if (this.state.operator) this.setState({operand2: this.state.operand2 + operand});
    else this.setState({operand1: this.state.operand1 + operand});
  }
  setOperator(operator) {
    if (this.state.equals) {
      this.setState({
        operand1: this.state.equals,
        operand2: "",
        operator,
        equals: "",
      })
    } else if (this.state.operand2) {
      const op1 = Number(this.state.operand1);
      const op2 = Number(this.state.operand2);
      if (this.state.operator === '+') this.setState({operand1: (op1+op2).toString(), operand2: '', operator, equals: ''});
      else if (this.state.operator === '-') this.setState({operand1: (op1-op2).toString(), operand2: '', operator, equals: ''});
      else if (this.state.operator === '*') this.setState({operand1: (op1*op2).toString(), operand2: '', operator, equals: ''});
      else if (this.state.operator === '/') {
        if (op2 === 0) window.alert('Error: division by zero')
        else this.setState({operand1: (op1/op2).toString(), operand2: '', operator, equals: ''});
      }
    } else if (this.state.operand1) this.setState({operator});
  }
  clear() {
    this.setState({
      operand1: "",
      operand2: "",
      operator: "",
      equals: "",
    })
  }
  equals() {
    const op1 = Number(this.state.operand1);
    const op2 = Number(this.state.operand2);
    if (this.state.operator === "+") this.setState({equals: op1 + op2});
    else if (this.state.operator === "-") this.setState({equals: op1 - op2});
    else if (this.state.operator === "*") this.setState({equals: op1 * op2});
    else if (this.state.operator === "/") {
      if (op2 === 0) window.alert('Error: division by zero');
      else this.setState({equals: op1 / op2});
    }
  }

  render() {
    return (
      <div>
        <Output value={`${this.state.operand1} ${this.state.operator} ${this.state.operand2}`} equals={`=${this.state.equals}`}/>
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
        <Button label="*" onClick={op => this.setOperator(op)}/>
        <br />
        <Button label="C" onClick={() => this.clear()}/>
        <Button label="0" onClick={op => this.setOperand(op)}/>
        <Button label="=" onClick={() => this.equals()}/>
        <Button label="/" onClick={op => this.setOperator(op)}/>
      </div>
    )
  }
}
