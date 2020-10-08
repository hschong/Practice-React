import React from 'react';
import Foods from './Foods';
import './App.css';
import PhoneForm from './components/PhoneForm';

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

function App() {
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
        <PhoneForm />
      </header>
    </div>
  );
}

export default App;
