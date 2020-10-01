import React from 'react';
import Potato from './Potato';
import logo from './logo.svg';
import './App.css';

// function Food(props) {
function Food({ fav }) {
  // console.log(props.fav);
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
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
        <h1>React's components</h1>
        <Potato />
        <Food fav='kimchi' />
        <Food fav='samgyupsal' />
        <Food fav='Jjukumi' />
      </header>
    </div>
  );
}

export default App;
