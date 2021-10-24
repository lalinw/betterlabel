
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
      map: null
    };
  }

  

  findCommonIngredients = () => {
    var commonIngredientsMap = new Map();

    // TODO: tally up most common ingredients, count occurrences as values
    this.state.items.forEach(item => {
      var keys = item.ingredients;
      keys.forEach(key => {
        if (commonIngredientsMap.has(key)) {
          var currentCount = commonIngredientsMap.get(key);
          commonIngredientsMap.set(key, currentCount + 1);
        } else {
          commonIngredientsMap.set(key, 1);
        }
      })
    })
    // sort by descending value
    const commonIngredientsMapSorted = new Map([...commonIngredientsMap.entries()].sort((a, b) => b[1] - a[1]));
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
  itemFlagFormatter(thisItem) {
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



  render() {
    return (
      <React.Fragment>
        <div>
        <input
          placeholder="item name"
          ></input>
        <textarea 
          id="textarea-input"
          placeholder="place list of ingredients"
          onChange={this.handleInput}
          ></textarea>
        <button onClick={() => {
          this.findCommonIngredients();
        }}>Add this Item</button>
        </div>
        
        <div>{this.state.map}</div>

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
