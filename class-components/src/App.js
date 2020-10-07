import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  state = {
    count: 0,
    error: false,
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

  // for child components
  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ error: true });
  }

  render() {
    console.log('render()');
    if (this.state.error) {
      return <div>An error happened</div>;
    }
    return (
      <div>
        {this.state.count < 10 && (
          <div>
            <Counter count={this.state.count} />
            <button onClick={this.increase}>increase</button>
            <button onClick={this.decrease}>decrease</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
