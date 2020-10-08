import React, { Component } from 'react';

export default class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>PhoneForm</p>
        {/* <input onChange={this.handleChange} value={this.state.name} /> */}
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
        {this.state.name}
        {this.state.number}
      </div>
    );
  }
}
