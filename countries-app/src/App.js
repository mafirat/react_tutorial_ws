import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LogButton from './LogButton'

import Navbar from './components/Navbar';
//import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CountryList from './components/CountryList';
import Country from './components/Country';

function App() {
  //const contact = LogButton(Contact)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container mt-2">
          <Switch>
            <Route component={CountryList} path='/' exact />
            <Route component={About} path='/about' />
            <Route component={LogButton(Contact)} path='/contact' />
            <Route component={Country} path='/:name' />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
