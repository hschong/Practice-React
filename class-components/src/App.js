import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    console.log('constructor');
    console.log('props: ', props);
  }

  increase = () => {
    console.log('increase: count = ', this.state.count);
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  decrease = () => {
    console.log('decrease: count = ', this.state.count);
    this.setState((current) => ({
      count: current.count - 1,
    }));
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
        <Counter count={this.state.count} />
        <button onClick={this.increase}>increase</button>
        <button onClick={this.decrease}>decrease</button>
      </div>
    );
  }
}

export default App;
