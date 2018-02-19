import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return (
        <div className="skinIcon">
            <img src={this.props.imageUrl} width="100%" height="auto" alt="skin-icon"/>
        </div>
    );
  }
}

export default Icon;
