import React, { Component } from 'react';
import './App.css';
import IngredientsMatchPage from './Components/IngredientsMatchPage';
import IngredientsTagPage from './Components/IngredientsTagPage';
import AboutPage from './Components/AboutPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageTag: true,
      pageMatch: true,
      pageAbout: false
    };
  }

  render() {
    
    return (
      <React.Fragment>
        <div>Better Labels</div>
        {this.state.pageTag && <IngredientsTagPage/>}
        {this.state.pageMatch && <IngredientsMatchPage/>}
        {this.state.pageAbout && <AboutPage/>}

      </React.Fragment>
    );
  }
}


export default App;
