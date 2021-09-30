
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputString: "",
      flaggedItems: ["Sodium Chloride", "Sodium Citrate", "Citric Acid", "Sodium Laureth Sulfate"],
      inputArray: []
    };
    this.itemFlagFormatter = this.itemFlagFormatter.bind(this);
    this.convertStringToArray = this.convertStringToArray.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  itemFlagFormatter(thisItem, flaggedItems) {
    for (let i = 0; i < flaggedItems.length; i++) {
      if (thisItem.toLowerCase() == flaggedItems[i].toLowerCase()) {
        return <div style={{backgroundColor: "lightblue", borderColor: "red", borderStyle: "solid"}}>{thisItem}</div>;
      }
    }
    return <div>{thisItem}</div>;
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
    this.setState({
      inputString: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>Better Ingredient List</div>
        <textarea 
          name="ingredients-input" 
          placeholder="paste the list of ingredients here"
          onChange={this.handleInput}
          ></textarea>
        <button
          onClick={() => {
            this.setState({
              inputArray: this.convertStringToArray(this.state.inputString)
            });
          }}
          >better the labels</button>
        <textarea name="ingredients-input" placeholder="paste unwanted ingredients here"></textarea>
        <button>tag unwanted ingredients</button>
        <div>
          {this.state.inputArray.map((i) => this.itemFlagFormatter(i, this.state.flaggedItems)) }
        </div>
      </React.Fragment>
    );
  }
}


export default App;
