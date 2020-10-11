import React, { Component, Fragment } from 'react';

export default class Contact extends Component {
  state = {
    editing: false,
    name: '',
    phoneNumber: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }
    return this.props.contact !== nextProps.contact;
  }

  handleRemove = () => {
    const { contact, onRemove } = this.props;
    onRemove(contact.id);
  };

  handleToggleEdit = () => {
    // true -> false: onUpdate
    // false -> true: bring the existing data into new input boxes

    const { contact, onUpdate } = this.props;
    if (this.state.editing) {
      onUpdate(contact.id, {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
      });
    } else {
      this.setState({
        name: contact.name,
        phoneNumber: contact.phoneNumber,
      });
    }

    this.setState({
      editing: !this.state.editing,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, phoneNumber } = this.props.contact;
    const { editing } = this.state;

    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
    };

    console.log(name);

    return (
      <div style={style}>
        {editing ? (
          <Fragment>
            <div>
              name:
              <input
                name='name'
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div>
              phoneNumber:
              <input
                name='phoneNumber'
                onChange={this.handleChange}
                value={this.state.phoneNumber}
              />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <b>{name}</b>
            </div>
            <div>{phoneNumber}</div>
          </Fragment>
        )}
        <button onClick={this.handleRemove}>remove</button>
        <button onClick={this.handleToggleEdit}>
          {editing ? 'Apply' : 'Edit'}
        </button>
      </div>
    );
  }
}
