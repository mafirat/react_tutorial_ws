import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import LogButton from './LogButton'

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  //const contact = LogButton(Contact)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Route component={Home} path='/' exact/>
          <Route component={About} path='/about'/>
          <Route component={LogButton(Contact)} path='/contact'/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
