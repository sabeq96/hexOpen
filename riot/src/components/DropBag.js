import React, { Component } from 'react';

class DropBag extends Component {
  render() {
    return (
        <div className="dropBag">
            {this.props.children}
        </div>
    );
  }
}

export default DropBag;
