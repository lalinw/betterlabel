import React, { Component } from 'react';
import './App.css';
import ItemIngredients from './Components/ItemIngredients';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputString: "",
      inputArray: [],
      flaggedItemsString: "",
      flaggedItemsArray: ["Sodium Chloride", "Sodium Citrate", "Citric Acid", "Sodium Laureth Sulfate", "Sodium Lauryl Sulfate", "fragrance"]
    };
    // this.itemFlagFormatter = this.itemFlagFormatter.bind(this);
    this.convertStringToArray = this.convertStringToArray.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFlaggedInput = this.handleFlaggedInput.bind(this);
  }


  // itemFlagFormatter(thisItem, flaggedItems) {
  //   for (let i = 0; i < flaggedItems.length; i++) {
  //     if (thisItem.toLowerCase() == flaggedItems[i].toLowerCase()) {
  //       return <div style={{backgroundColor: "lightblue", borderColor: "red", borderStyle: "solid"}}>{thisItem}</div>;
  //     }
  //   }
  //   return <div>{thisItem}</div>;
  // }

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
    this.setState({
      inputString: event.target.value
    });
  }

  handleFlaggedInput(event) {
    this.setState({
      flaggedItemsString: event.target.value
    });
    
  }

  render() {
    return (
      <React.Fragment>
        <div>Better Labels</div>
        <textarea 
          rows="8"
          cols="80"
          name="ingredients-input" 
          placeholder="paste the list of ingredients here"
          onChange={this.handleInput}
          ></textarea>
          <br/>
        <button
          onClick={() => {
            this.setState({
              inputArray: this.convertStringToArray(this.state.inputString)
            });
          }}
          >better the labels</button>
        <br/>
        <br/>
        <textarea 
          rows="4"
          cols="80"
          name="ingredients-input" 
          placeholder="paste unwanted ingredients here"
          onChange={this.handleFlaggedInput}
          ></textarea>
          <br/>
        <button
          onClick={() => {
            if (this.state.flaggedItemsString != "") {
              this.setState({
                flaggedItemsArray: this.convertStringToArray(this.state.flaggedItemsString)
              });
            }
            
          }}
          >tag unwanted ingredients</button>
        <br/>
        <ItemIngredients
          inputArray = {this.state.inputArray}
          flaggedItemsArray = {this.state.flaggedItemsArray}
        />
      </React.Fragment>
    );
  }
}


export default App;
