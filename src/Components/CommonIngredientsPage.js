
import React, { Component } from 'react';
import './../App.css';


class CommonIngredientsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //items: [{}]
      // {name: "", ingredients: [a, b, c...]}
      items: [{
        name: "sample item",
        ingredients: [
          "ingredient_a",
          "ingredient_b",
          "ingredient_c",
          "ingredient_d"
        ]
      }, {
        name: "sample item 2",
        ingredients: [
          "ingredient_d",
          "ingredient_e",
          "ingredient_f",
          "ingredient_g"
        ]
      }, {
        name: "sample item 3",
        ingredients: [
          "ingredient_c",
          "ingredient_d",
          "ingredient_e"
        ]
      }],
      map: new Map(),
      input: "",
      inputName: ""
    };
  }


  findCommonIngredients = () => {
    var commonIngredientsMap = new Map();
    this.state.items.forEach(item => {
      var keys = item.ingredients;
      keys.forEach(key => {
        if (commonIngredientsMap.has(key)) {
          var nameArray = commonIngredientsMap.get(key);
          nameArray.push(item.name);
          commonIngredientsMap.set(key, nameArray);
        } else {
          commonIngredientsMap.set(key, [item.name]);
        }
      })
    })
    // sort by descending value
    const commonIngredientsMapSorted = new Map(
      [...commonIngredientsMap.entries()].sort((a, b) => b[1].length - a[1].length)
    );
    console.log(commonIngredientsMapSorted);
    this.setState({ map: commonIngredientsMapSorted });
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


  //TODO: update to display for this component
  itemFlagFormatter = (thisItem) => {
    if (this.props.flaggedItemsArray !== undefined) {
      for (let i = 0; i < this.props.flaggedItemsArray.length; i++) {
        if (thisItem.toLowerCase() == this.props.flaggedItemsArray[i].toLowerCase()) {
          //exact matches
          return (
            <div className="ingredients flagged" style={{borderColor: "red"}}>
              {thisItem}
            </div>
          );
        } else if 
              (this.props.flaggedItemsArray[i] != "" 
              && thisItem.toLowerCase().includes(this.props.flaggedItemsArray[i].toLowerCase()) ) {
          //contains matching phrase
          return (
            <div className="ingredients flagged" style={{borderColor: "orange"}}>
              {thisItem}
            </div>
          );
        } 
      }
    }
    if (this.props.wantedItemsArray !== undefined) { 
      for (let i = 0; i < this.props.wantedItemsArray.length; i++) {
        if (thisItem.toLowerCase() == (this.props.wantedItemsArray[i].toLowerCase())) {
          //exact matches
          return (
            <div className="ingredients wanted" style={{borderColor: "green"}}>
              {thisItem}
            </div>
          );
        }
      }
    }
    return (
      <div className="ingredients" style={{borderColor: "aliceblue"}}>
        {thisItem}
      </div>
    );
  }


  addItem = () => {
    var itemName = this.state.inputName; 
    var ingredientsArray = this.convertStringToArray(this.state.input);
    const newItem = {
      name: itemName,
      ingredients: ingredientsArray
    };

    //TODO: clear the input and textarea

    //TODO: add item to the state items 

  }


  handleInput = (event) => {
    this.setState({ input: event.target.value });
  }


  handleInputName = (event) => {
    this.setState({ inputName: event.target.value });
  }

  
  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.items.map(item => item.name).join(", ")}
        </div>

        <div>
        <input
          placeholder="item name"
          onChange={this.handleInputName}
          ></input>
        <textarea 
          id="textarea-input"
          placeholder="place list of ingredients"
          onChange={this.handleInput}
          ></textarea>
        <button 
          onClick={this.addItem}
          >Add this Item</button>
        </div>
        
        <div>show results here</div>

        <div>
          this is the common ingredients page
          <button onClick={() => {
            this.findCommonIngredients();
          }}>find common ingredients</button>
        </div>
      </React.Fragment>
    );
  }
}


export default CommonIngredientsPage;
