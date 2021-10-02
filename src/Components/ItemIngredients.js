
import React, { Component } from 'react';
import './../App.css';
import SummaryView from './SummaryView';

class ItemIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.itemFlagFormatter = this.itemFlagFormatter.bind(this);
  }

  itemFlagFormatter(thisItem) {
    if (this.props.flaggedItemsArray !== undefined) {
      for (let i = 0; i < this.props.flaggedItemsArray.length; i++) {
        if (thisItem.toLowerCase() == this.props.flaggedItemsArray[i].toLowerCase()) {
          //exact matches
          return <div className="ingredients flagged" style={{borderColor: "red"}}>{thisItem}</div>;
        } else if (thisItem.toLowerCase().includes(this.props.flaggedItemsArray[i].toLowerCase())) {
          //contains matching phrase
          return <div className="ingredients flagged" style={{borderColor: "orange"}}>{thisItem}</div>;
        } 
      }
    }
    if (this.props.wantedItemsArray !== undefined) { 
      for (let i = 0; i < this.props.wantedItemsArray.length; i++) {
        if (thisItem.toLowerCase() == (this.props.wantedItemsArray[i].toLowerCase())) {
          //exact matches
          return <div className="ingredients wanted" style={{borderColor: "green"}}>{thisItem}</div>;
        }
      }
    }
    return <div className="ingredients" style={{borderColor: "aliceblue"}}>{thisItem}</div>;
  }


  render() {
    return (
      <React.Fragment>
        <SummaryView
          inputArray = {this.props.inputArray}
          flaggedItemsArray = {this.props.flaggedItemsArray}
          wantedItemsArray = {this.props.wantedItemsArray}
          wantedItemsFound = {this.state.wantedItemsFound}
          flaggedItemsFound = {this.state.flaggedItemsFound}
          />
        <div>
          {this.props.inputArray.map((i) => this.itemFlagFormatter(i))}
        </div>
        
      </React.Fragment>
    );
  }
}


export default ItemIngredients;
