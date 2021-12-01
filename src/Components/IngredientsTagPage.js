import React, { Component } from 'react';
import SummaryView from './SummaryView';
import ItemIngredients from './ItemIngredients'

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
      <div className="input" id="input">
      <textarea 
        id="textarea-input"
        placeholder="paste the list of ingredients here"
        onChange={this.handleInput}
        ></textarea>
      </div>
      <div className="input-split" id="input-wanted">
        <textarea 
          id="textarea-input-wanted"
          placeholder="paste wanted ingredients here"
          onChange={this.handleWantedItems}
          ></textarea>
      </div>
      <div className="input-split" id="input-flagged">
        <textarea 
          id="textarea-input-flagged"
          placeholder="paste unwanted ingredients here"
          onChange={this.handleFlaggedItems}
          ></textarea>
      </div>
      <button
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
        >Tag my Ingredients</button>
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
