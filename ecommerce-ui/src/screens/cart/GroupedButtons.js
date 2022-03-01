import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

class GroupedButtons extends React.Component {
  state = { counter: this.props.count , totalPrice: this.props.totalPrice};
  
  

  handleIncrement = () => {
    
    this.setState(state => ({ counter: state.counter + 1 }));
    this.props.onCounter(this.state.counter+1)
    
  };

  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
    this.props.onCounter(this.state.counter-1)
  };
  render() {
    const displayCounter = this.state.counter > 0;
    const count = this.props.count;
    console.log("button",count)
    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={this.handleIncrement} variant="contained">+</Button>
        {displayCounter && <Button disabled>{this.state.counter}</Button>}
        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
      </ButtonGroup>
    );
  }
}

export default GroupedButtons;
