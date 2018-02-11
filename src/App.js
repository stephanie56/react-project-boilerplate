import React, { Component } from 'react';

import { Header } from './components/Header';
import { List } from './components/List';
import { Footer } from './components/Footer';

import { data } from './data/friends';

import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List title={"Section Title"} data={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
