import React, { Component } from 'react';
import './../App.css';

class SummaryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var wanted = 0;
    var flagged = 0;
    var potentialFlag = 0;

    for (let i = 0; i < this.props.inputArray.length; i++) {
      for (let j = 0; j < this.props.wantedItemsArray.length; j++) {
        if (this.props.inputArray[i].toLowerCase() === (this.props.wantedItemsArray[j].toLowerCase())) {
          wanted++;
        }
      }
      for (let j = 0; j < this.props.flaggedItemsArray.length; j++) {
        if (this.props.inputArray[i].toLowerCase() === (this.props.flaggedItemsArray[j].toLowerCase())) {
          flagged++;
        } else if (this.props.inputArray[i].toLowerCase().includes(this.props.flaggedItemsArray[j].toLowerCase())) {
          potentialFlag++;
        }
      }
    }

    return (
      <React.Fragment>
        <div className="summary">
          {this.props.inputArray.length !== 0
          ? 
          <React.Fragment>
            <div className="summary-stats" id="stats-input">
              <h3>Total ingredients</h3>
              <h2>{this.props.inputArray.length}</h2>
            </div>
            <div className="summary-stats wanted" id="stats-wanted">
              <h3>Desired ingredients</h3>
              <h2>{wanted}</h2> 
              <p>out of {this.props.wantedItemsArray.length} found</p>
            </div>
            <div className="summary-stats flagged" id="stats-flagged">
              <h3>Flagged ingredients</h3>
              <h2>{flagged}</h2>
              <p>out of {this.props.flaggedItemsArray.length} flagged</p>
              <p>({potentialFlag} potentially unwanted items)</p>
            </div>
          </React.Fragment>
          : <p>Summary cannot be displayed until there is an ingredients list.</p>
          }
          
        </div>
      </React.Fragment>
    );
  }
}


export default SummaryView;
