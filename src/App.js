import React, { Component } from 'react';
import './App.css';

//Components
import IngredientsMatchPage from './Components/IngredientsMatchPage';
import IngredientsTagPage from './Components/IngredientsTagPage';
import AboutPage from './Components/AboutPage';
import CommonIngredientsPage from './Components/CommonIngredientsPage';

// Material UI
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

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
        <div id="navigation">
          <Button 
            variant="outlined"
            disableElevation
            startIcon={<InfoIcon/>}
            disabled={this.state.pageAbout}
            onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageAbout: true });
          }}>About</Button>
          <Button 
            variant="outlined"
            disableElevation
            startIcon={<LocalOfferIcon/>}
            disabled={this.state.pageTag}
            onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageTag: true });
          }}>Tag Ingredients</Button>
          <Button 
            variant="outlined"
            disableElevation
            startIcon={<CompareArrowsIcon/>}
            disabled={this.state.pageMatch}
            onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageMatch: true });
          }}>Compare Products</Button>
          <Button 
            variant="outlined"
            disableElevation
            startIcon={<SearchIcon/>}
            disabled={this.state.pageCommon}
            onClick={() => {
            this.pageDisplayReset();
            this.setState({ pageCommon: true });
          }}>Find Common Ingredients</Button>
        </div>
        <div id="content">
          {this.state.pageAbout && <AboutPage/>}
          {this.state.pageTag && <IngredientsTagPage/>}
          {this.state.pageMatch && <IngredientsMatchPage/>}
          {this.state.pageCommon && <CommonIngredientsPage/>}
        </div>
      </React.Fragment>
    );
  }
}


export default App;
