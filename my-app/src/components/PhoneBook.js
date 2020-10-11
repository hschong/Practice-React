import React, { Component } from 'react';
import Contact from './Contact';

export default class PhoneBook extends Component {
  static defaultProps = {
    phoneBook: [],
  };

  render() {
    const { phoneBook, onRemove, onUpdate } = this.props;
    console.log('rendering list');
    const list = phoneBook.map((e) => (
      <Contact onRemove={onRemove} onUpdate={onUpdate} contact={e} key={e.id} />
    ));

    return <div>{list}</div>;
  }
}
