import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.count !== nextProps.count) {
      console.log('getDerivedStateFromProps: render again');
      return {
        count: nextProps.count,
      };
    }

    console.log('getDerivedStateFromProps: nothing to render');
    return null;
  }

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
