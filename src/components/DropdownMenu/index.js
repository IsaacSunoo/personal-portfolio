import React, { Component } from 'react';

class DropdownMenu extends Component {
  constructor() {
    super();
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { condition } = this.state;
    this.setState({condition: !condition})
  }

  render() {
    const { condition } = this.state;
    return (
      <div>
        <div className={condition ? 'dropdown-container open': 'dropdown-container'} onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          {/* <OverlayMenu menuDisplay={condition} /> */}
        </div>
      </div>
    );
  }
};

export default DropdownMenu;
