import React, { Component } from 'react';

class Simple extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center login">
        {this.props.children}
      </div>
    );
  }
}

export default Simple;
