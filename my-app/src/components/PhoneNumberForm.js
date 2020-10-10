import React, { Component } from 'react';

export default class PhoneNumberForm extends Component {
  state = {
    name: '',
    number: '',
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
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>PhoneNumberForm</p>
        <input
          name='name'
          placeholder='name'
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          name='number'
          placeholder='number'
          onChange={this.handleChange}
          value={this.state.number}
        />
        <button type='submit'>register</button>
      </form>
    );
  }
}
