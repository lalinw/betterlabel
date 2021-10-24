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
      pageAbout: false,
      pageTag: true,
      pageMatch: true,
      pageCommon: true      
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
        <div>Better Labels</div>
        <div id="">
          <button onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageAbout: true });
          }}>About</button>
          <button onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageTag: true });
          }}>Tag my Ingredients</button>
          <button onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageMatch: true });
          }}>Compare Products</button>
          <button onClick={() => {
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
