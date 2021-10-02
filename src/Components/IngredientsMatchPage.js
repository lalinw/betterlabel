
import React, { Component } from 'react';
import './../App.css';

class IngredientsMatchPage extends Component {
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
        return <div style={{backgroundColor: "lightblue", borderColor: "red", borderStyle: "solid"}}>{thisItem}</div>;
      } else if (thisItem.toLowerCase().includes(flaggedItemsArray[i].toLowerCase())) {
        //contains matching phrase
        return <div style={{backgroundColor: "yellow", borderColor: "orange", borderStyle: "solid"}}>{thisItem}</div>;
      }
    }
    return <div>{thisItem}</div>;
  }

  render() {
    var a = ["Sodium Chloride", "Sodium Citrate", "Citric Acid", "Sodium Laureth Sulfate", "Sodium Lauryl Sulfate", "fragrance"];
    var b = ["Sodium Citrate", "Citric not Acid", "Sodium Lauryl Sulfate", "oil", "Sodium Chloride", "Sodium Laureth Sulfate"];
    var matchingIndex = [];
    for (var i = 0; i < a.length; i++) {
      matchingIndex[i] = -1; //defaults from no match
      for (var j = 0; j < b.length; j++) {
        if (a[i].toLowerCase() == b[j].toLowerCase()) {
          matchingIndex[i] = j;
        }
      }
    }

    return (
      <React.Fragment>
        <div>
          <div>
            <div className="ingredients-matching">{a.map(i => <div>{i}</div>)}</div>
            <svg>
              <line stroke-width="2px" stroke="#000000" x1="100" y1="5" x2="1000" y2="100"/>
              <line stroke-width="2px" stroke="#000000" x1="100" y1="10" x2="1000" y2="5"/>
            </svg>
            <div className="ingredients-matching">{b.map(i => <div>{i}</div>)}</div>
            
          </div>
          
          {matchingIndex.map(i => <div>{i}</div>)}
          
        </div>
      </React.Fragment>
    );
  }
}


export default IngredientsMatchPage;
