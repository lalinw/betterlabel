
import React, { Component } from 'react';
import './../App.css';

class ItemIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.itemFlagFormatter = this.itemFlagFormatter.bind(this);
  }

  itemFlagFormatter(thisItem, flaggedItemsArray) {
    for (let i = 0; i < flaggedItemsArray.length; i++) {
      if (thisItem.toLowerCase() == flaggedItemsArray[i].toLowerCase()) {
        //exact matches
        return <div className="ingredients" style={{backgroundColor: "lightblue", borderColor: "red", borderStyle: "solid"}}>{thisItem}</div>;
      } else if (thisItem.toLowerCase().includes(flaggedItemsArray[i].toLowerCase())) {
        //contains matching phrase
        return <div className="ingredients" style={{backgroundColor: "yellow", borderColor: "orange", borderStyle: "solid"}}>{thisItem}</div>;
      }
    }
    return <div className="ingredients">{thisItem}</div>;
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.inputArray.map((i) => this.itemFlagFormatter(i, this.props.flaggedItemsArray)) }
        </div>
      </React.Fragment>
    );
  }
}


export default ItemIngredients;
