import React, { Component } from 'react';
import SummaryView from './SummaryView';
import ItemIngredients from './ItemIngredients'

//Material UI
import Button from '@mui/material/Button';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

class IngredientsTagPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: "",
      inputArray: [],
      wantedItemsString: "",
      wantedItemsArray: [],
      flaggedItemsString: "",
      flaggedItemsArray: [],
    };
  }


  convertStringToArray = (listAsString) => {
    var replaceFullstop = listAsString.replaceAll('.', ' ');
    var split = replaceFullstop.split(","); 
    var trimmed = [];

    for (let i = 0; i < split.length; i++) {
      trimmed.push(split[i].trim());
    }
    return trimmed;
  }


  handleInput = (event) => {
    this.setState({ inputString: event.target.value });
  }


  handleWantedItems = (event) => {
    this.setState({ wantedItemsString: event.target.value });
  }


  handleFlaggedItems = (event) => {
    this.setState({ flaggedItemsString: event.target.value });
  }


  render() {

    return (
      <React.Fragment>
      <div className="input input-wrapper" id="input">
      <textarea 
        id="textarea-input"
        placeholder="paste the list of ingredients here"
        onChange={this.handleInput}
        ></textarea>
      </div>
      <div className="input-split" id="input-wanted">
        <div className="input-wrapper wanted">
          <textarea 
            className="wanted"
            id="textarea-input-wanted"
            placeholder="paste wanted ingredients here"
            onChange={this.handleWantedItems}
            ></textarea>
        </div>
      </div>
      <div className="input-split" id="input-flagged">
        <div className="input-wrapper flagged">
          <textarea 
            className="flagged"
            id="textarea-input-flagged"
            placeholder="paste unwanted ingredients here"
            onChange={this.handleFlaggedItems}
            ></textarea>
        </div>
      </div>
      <Button
        variant="contained" 
        disableElevation
        startIcon={<LocalOfferIcon/>}
        className="compute-button"
        onClick={() => {
          if (this.state.inputString !== "") {
            this.setState({ inputArray: this.convertStringToArray(this.state.inputString) });
            if (this.state.wantedItemsString !== "") {
              this.setState({ wantedItemsArray: this.convertStringToArray(this.state.wantedItemsString) });
            }
            if (this.state.flaggedItemsString !== "") {
              this.setState({ flaggedItemsArray: this.convertStringToArray(this.state.flaggedItemsString) });
            }
          } else {
            alert("Remember to input an ingredients list");
          }
          
        }}
        >Tag Ingredients</Button>
      <div className="result">
        <h3>Product Summary:</h3>
        <SummaryView
          inputArray = {this.state.inputArray}
          flaggedItemsArray = {this.state.flaggedItemsArray}
          wantedItemsArray = {this.state.wantedItemsArray}
          />
        <ItemIngredients
          inputArray = {this.state.inputArray}
          flaggedItemsArray = {this.state.flaggedItemsArray}
          wantedItemsArray = {this.state.wantedItemsArray}
        />
      </div>
      </React.Fragment>
    );
  }
}


export default IngredientsTagPage;
