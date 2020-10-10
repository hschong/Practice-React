import React from 'react';
import Foods from './Foods';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneNumberList from './components/PhoneNumberList';

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
    information: [],
  };

  handleRegister = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        id: this.id++,
        ...data,
        // name: data.name,
        // number: data.number,
      }),
    });
  };

  handleRemove = (id) => {
    const {information} = this.state
    this.setState({
      information: information.filter(info => info.id !== id)
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
          <PhoneForm onRegister={this.handleRegister} />
          {/* {JSON.stringify(this.state.information)} */}
          <PhoneNumberList 
            data={this.state.information} 
            onRemove={this.handleRemove}
          />
        </header>
      </div>
    );
  }
}
