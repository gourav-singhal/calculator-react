import Button from './Button';
import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <div className="component-button-panel">
        <Row>
          <Button name="clear" xs={9} clickHandler={this.handleClick} />
          <Button name="÷" xs={3} clickHandler={this.handleClick} orange />
        </Row>
        <Row>
          <Button name="7" xs={3} clickHandler={this.handleClick} />
          <Button name="8" xs={3} clickHandler={this.handleClick} />
          <Button name="9" xs={3} clickHandler={this.handleClick} />
          <Button name="-" xs={3} clickHandler={this.handleClick} orange />
        </Row>
        <Row>
          <Button name="4" xs={3} clickHandler={this.handleClick} />
          <Button name="5" xs={3} clickHandler={this.handleClick} />
          <Button name="6" xs={3} clickHandler={this.handleClick} />
          <Button name="+" xs={3} clickHandler={this.handleClick} orange />
        </Row>
        <Row>
          <Button name="1" xs={3} clickHandler={this.handleClick} />
          <Button name="2" xs={3} clickHandler={this.handleClick} />
          <Button name="3" xs={3} clickHandler={this.handleClick} />
          <Button name="=" xs={3} clickHandler={this.handleClick} orange />
        </Row>
        <Row>
          <Button name="" xs={3} clickHandler={this.handleClick} />
          <Button name="0" xs={3} clickHandler={this.handleClick} />
          <Button name="" xs={3} clickHandler={this.handleClick} />
          <Button name="" xs={3} clickHandler={this.handleClick} />
        </Row>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
export default ButtonPanel;
