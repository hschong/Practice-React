import React from 'react';
import './App.css';
import PhoneNumberForm from './components/PhoneNumberForm';
import PhoneBook from './components/PhoneBook';

export default class App extends React.Component {
  id = 3; // no need to render

  // need to render
  state = {
    phoneBook: [
      {
        id: 0,
        name: 'Heeseok',
        phoneNumber: '010-0000-0000' 
      },
      {
        id: 1,
        name: 'Bergkamp',
        phoneNumber: '010-0000-0001' 
      },
      {
        id: 2,
        name: 'Aubameyang',
        phoneNumber: '010-0000-0002' 
      },
    ],
  };

  handleCreate = (formData) => {
    const { phoneBook } = this.state;
    this.setState({
      phoneBook: phoneBook.concat({
        id: this.id++,
        ...formData,
        // name: formData.name,
        // phoneNumber: formData.phoneNumber,
      }),
    });
  };

  handleUpdate = (id, newContact) => {
    const {phoneBook} = this.state
    this.setState({
      phoneBook: phoneBook.map(
        contact => {
          if (contact.id === id)
            return {id, ...newContact}
          else
            return contact
        }
      )
    })
  }

  handleDelete = (id) => {
    const {phoneBook} = this.state
    this.setState({
      phoneBook: phoneBook.filter(contact => contact.id !== id)
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <PhoneNumberForm onRegister={this.handleCreate} />
          {/* {JSON.stringify(this.state.phoneBook)} */}
          <PhoneBook 
            phoneBook={this.state.phoneBook} 
            onRemove={this.handleDelete}
            onUpdate={this.handleUpdate}
          />
        </header>
      </div>
    );
  }
}
