import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, book: true });
    }, 6000);
    console.log('componentDidMount:', this.state);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>{isLoading ? 'Loading...' : 'We are ready'}</h1>
      </div>
    );
  }
}

export default App;
