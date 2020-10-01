import React from 'react';
// import Potato from './Potato';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

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

// function Food(props) {
function Food({ foodName, foodPicture, foodRating }) {
  // console.log(props.name);
  return (
    <div>
      <h2>I like {foodName}</h2>
      <h4>{foodRating}/5</h4>
      <img src={foodPicture} width='400' alt={foodName} />
    </div>
  );
}

Food.propTypes = {
  foodName: PropTypes.string.isRequired,
  foodPicture: PropTypes.string.isRequired,
  foodRating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Potato /> */}
        {foodsILike.map((food) => (
          <Food
            key={food.id}
            foodName={food.name}
            foodPicture={food.image}
            foodRating={food.rating}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
