import React from 'react';

class Detail extends React.Component {
  // ES6+ style
  static defaultProps = {
    title: 'no title',
  };

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return <span>{this.props.title}</span>;
      // return null;
    }
  }
}

// old style
// Detail.defaultProps = {
//   title: 'no title',
// };

export default Detail;
