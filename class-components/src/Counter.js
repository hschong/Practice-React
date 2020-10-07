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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.count % 2 === 0) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate() in Counter');
    console.log(
      'prevProps, prevState, snapshot',
      prevProps,
      prevState,
      snapshot
    );
  }

  componentWillUnmount() {
    console.log('Good Bye');
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
