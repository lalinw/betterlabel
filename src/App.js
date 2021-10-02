import React, { Component } from 'react';
import './App.css';
import ItemIngredients from './Components/ItemIngredients';
import IngredientsMatch from './Components/IngredientsMatch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputString: "",
      inputArray: [],
      wantedItemsString: "",
      wantedItemsArray: [],
      flaggedItemsString: "",
      flaggedItemsArray: [],
      pageTag: true,
      pageMatch: false
    };
    // this.itemFlagFormatter = this.itemFlagFormatter.bind(this);
    this.convertStringToArray = this.convertStringToArray.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleWantedItems = this.handleWantedItems.bind(this);
    this.handleFlaggedItems = this.handleFlaggedItems.bind(this);
  }


  convertStringToArray(listAsString) {
    var replaceFullstop = listAsString.replaceAll('.', ' ');
    var split = replaceFullstop.split(","); 
    var trimmed = [];

    for (let i = 0; i < split.length; i++) {
      trimmed.push(split[i].trim());
    }
    return trimmed;
  }


  handleInput(event) {
    this.setState({ inputString: event.target.value });
  }


  handleWantedItems(event) {
    this.setState({ wantedItemsString: event.target.value });
    
  }


  handleFlaggedItems(event) {
    this.setState({ flaggedItemsString: event.target.value });
  }


  render() {
    return (
      <React.Fragment>
        {this.state.pageMatch && <IngredientsMatch/>}
        
        <div>Better Labels</div>

        <div className="input" id="input">
          <textarea 
            id="textarea-input"
            placeholder="paste the list of ingredients here"
            onChange={this.handleInput}
            ></textarea>
        </div>
        <div className="input" id="input-wanted">
          <textarea 
            id="textarea-input-wanted"
            placeholder="paste wanted ingredients here"
            onChange={this.handleWantedItems}
            ></textarea>
        </div>
        <div className="input" id="input-flagged">
          <textarea 
            id="textarea-input-flagged"
            placeholder="paste unwanted ingredients here"
            onChange={this.handleFlaggedItems}
            ></textarea>
        </div>
        <button
            onClick={() => {
              this.setState({
                inputArray: this.convertStringToArray(this.state.inputString),
                wantedItemsArray: this.convertStringToArray(this.state.wantedItemsString),
                flaggedItemsArray: this.convertStringToArray(this.state.flaggedItemsString)
              });
            }}
            >Tag my Ingredients</button>
        <ItemIngredients
          inputArray = {this.state.inputArray}
          flaggedItemsArray = {this.state.flaggedItemsArray}
          wantedItemsArray = {this.state.wantedItemsArray}
        />
      </React.Fragment>
    );
  }
}


export default App;
