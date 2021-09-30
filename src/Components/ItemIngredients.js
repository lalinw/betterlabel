
import React, { Component } from 'react';

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
        return <div style={{backgroundColor: "lightblue", borderColor: "red", borderStyle: "solid"}}>{thisItem}</div>;
      }
    }
    return <div>{thisItem}</div>;
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
