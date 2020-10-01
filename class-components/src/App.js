import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
    console.log('add');
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
    console.log('minus');
  };

  componentDidMount() {
    console.log('componentDidMount()');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  render() {
    console.log('render()');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
