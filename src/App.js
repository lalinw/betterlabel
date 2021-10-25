import React, { Component } from 'react';
import './App.css';
import IngredientsMatchPage from './Components/IngredientsMatchPage';
import IngredientsTagPage from './Components/IngredientsTagPage';
import AboutPage from './Components/AboutPage';
import CommonIngredientsPage from './Components/CommonIngredientsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageAbout: true,
      pageTag: false,
      pageMatch: false,
      pageCommon: false      
    };
  }

  pageDisplayReset = () => {
    this.setState({
      pageAbout: false,
      pageTag: false,
      pageMatch: false,
      pageCommon: false  
    });
  }

  render() {
    
    return (
      <React.Fragment>
        <div><h1>BetterLabel™</h1></div>
        <div id="">
          <button 
            disabled={this.state.pageAbout}
            onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageAbout: true });
          }}>About</button>
          <button 
            disabled={this.state.pageTag}
            onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageTag: true });
          }}>Tag my Ingredients</button>
          <button 
            disabled={this.state.pageMatch}
            onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageMatch: true });
          }}>Compare Products</button>
          <button 
            disabled={this.state.pageCommon}
            onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageCommon: true });
          }}>Find Common Ingredients</button>
        </div>
        {this.state.pageAbout && <AboutPage/>}
        {this.state.pageTag && <IngredientsTagPage/>}
        {this.state.pageMatch && <IngredientsMatchPage/>}
        {this.state.pageCommon && <CommonIngredientsPage/>}

      </React.Fragment>
    );
  }
}


export default App;
