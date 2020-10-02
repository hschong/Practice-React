import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation /> {/* <Navigation /> must be in HashRouter */}
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
    </HashRouter>
    // <footer>
    // is need a fragment to render both at the same time.
    // </footer>
  );
}

export default App;
