import React, { Component } from 'react';

export default class ContactForm extends Component {
  // defaultInput = null
  defaultInput = React.createRef();

  state = {
    name: '',
    phoneNumber: '',
  };

  handleChange = (e) => {
    this.setState({
      // append the new value to the array
      [e.target.name]: e.target.value,

      // replace the previous value with the new value
      // e.target.name: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', phoneNumber: '' });
    // this.defaultInput.focus();
    this.defaultInput.current.focus();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>ContactForm</p>
        <input
          name='name'
          placeholder='name'
          onChange={this.handleChange}
          value={this.state.name}
          // ref={ref => this.defaultInput = ref}
          ref={this.defaultInput}
        />
        <input
          name='phoneNumber'
          placeholder='phoneNumber'
          onChange={this.handleChange}
          value={this.state.phoneNumber}
        />
        <button type='submit'>register</button>
      </form>
    );
  }
}
