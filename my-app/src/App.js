import React from 'react';
// import Potato from './Potato';
// import logo from './logo.svg';
import './App.css';

const foodsILike = [
  {
    id: 1,
    name: 'kimbab',
    image: 'http://swisshansik.files.wordpress.com/2011/09/kimbap-2.jpg',
  },
  {
    id: 2,
    name: 'tteok-bokki',
    image: 'https://t1.daumcdn.net/cfile/tistory/217BA24450D1717633',
  },
  {
    id: 3,
    name: 'bibimbap',
    image: 'https://i.ytimg.com/vi/U_djLM9Z-qs/maxresdefault.jpg',
  },
];

// function Food(props) {
function Food({ foodName, foodPicture }) {
  // console.log(props.name);
  return (
    <div>
      <h1>I like {foodName}</h1>
      <img src={foodPicture} width='400' alt={foodName} />
    </div>
  );
}

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
          <Food key={food.id} foodName={food.name} foodPicture={food.image} />
        ))}
      </header>
    </div>
  );
}

export default App;
