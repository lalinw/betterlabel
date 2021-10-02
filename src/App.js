import React, { Component } from 'react';
import './App.css';
import IngredientsMatchPage from './Components/IngredientsMatchPage';
import IngredientsTagPage from './Components/IngredientsTagPage';

class App extends Component {
  constructor() {
    super();
    this.state = {

      pageTag: true,
      pageMatch: false,
      pageAbout: false
    };
    // this.itemFlagFormatter = this.itemFlagFormatter.bind(this);

  }


  

  render() {
    return (
      <React.Fragment>
        {this.state.pageMatch && <IngredientsMatchPage/>}
        
        <div>Better Labels</div>

        <br/>
        <br/>
        {this.state.pageTag && <IngredientsTagPage/>}
        
      </React.Fragment>
    );
  }
}


export default App;
