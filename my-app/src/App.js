import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
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
    keyword: ''
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

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
          <ContactForm onRegister={this.handleCreate} />
          <input 
            value={this.state.keyword}
            onChange={this.handleChange}
            placeholder='Search...'
          />
          <PhoneBook 
            phoneBook={this.state.phoneBook.filter(
              contact => contact.name.indexOf(this.state.keyword) > -1
            )} 
            onRemove={this.handleDelete}
            onUpdate={this.handleUpdate}
          />
        </header>
      </div>
    );
  }
}
