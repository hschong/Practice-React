import React from 'react';
import Foods from './Foods';
import './App.css';
import PhoneNumberForm from './components/PhoneNumberForm';
import PhoneBook from './components/PhoneBook';

const foodsILike = [
  {
    id: 1,
    name: 'kimbab',
    image: 'http://swisshansik.files.wordpress.com/2011/09/kimbap-2.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'tteok-bokki',
    image: 'https://t1.daumcdn.net/cfile/tistory/217BA24450D1717633',
    rating: 4.2,
  },
  {
    id: 3,
    name: 'bibimbap',
    image: 'https://i.ytimg.com/vi/U_djLM9Z-qs/maxresdefault.jpg',
    rating: 4.6,
  },
];

export default class App extends React.Component {
  id = 0; // no need to render

  // need to render
  state = {
    phoneBook: [],
  };

  handleCreate = (formData) => {
    const { phoneBook } = this.state;
    this.setState({
      phoneBook: phoneBook.concat({
        id: this.id++,
        ...formData,
        // name: formData.name,
        // number: formData.number,
      }),
    });
  };

  handleDelete = (id) => {
    const {phoneBook} = this.state
    this.setState({
      phoneBook: phoneBook.filter(info => info.id !== id)
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          {/* {foodsILike.map((food) => (
          <Foods
            key={food.id}
            name={food.name}
            image={food.image}
            rating={food.rating}
          />
        ))} */}
          <PhoneNumberForm onRegister={this.handleCreate} />
          {/* {JSON.stringify(this.state.phoneBook)} */}
          <PhoneBook 
            phoneBook={this.state.phoneBook} 
            onRemove={this.handleDelete}
          />
        </header>
      </div>
    );
  }
}
