
import React, { Component } from 'react';
import './../App.css';

class IngredientsMatchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftInputString: "",
      leftInputArray: [],
      rightInputString: "",
      rightInputArray: []

    };
    this.itemFlagFormatter = this.itemFlagFormatter.bind(this);
    this.convertStringToArray = this.convertStringToArray.bind(this);
    this.drawLines = this.drawLines.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      leftInputArray: ["Sodium Chloride", "Sodium Citrate", "Citric Acid", "Sodium Laureth Sulfate", "Sodium Lauryl Sulfate", "fragrance"],
      rightInputArray: ["Sodium Citrate", "Citric not Acid", "Sodium Lauryl Sulfate", "oil", "Sodium Chloride", "Sodium Laureth Sulfate"]
    });
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


  convertStringToArray(listAsString) {
    var replaceFullstop = listAsString.replaceAll('.', ' ');
    var split = replaceFullstop.split(","); 
    var trimmed = [];

    for (let i = 0; i < split.length; i++) {
      trimmed.push(split[i].trim());
    }
    return trimmed;
  }


  handleLeftInput(event) {
    this.setState({ leftInputString: event.target.value });
  }


  handleRightInput(event) {
    this.setState({ rightInputString: event.target.value });
  }

  drawLines() {
    // var myLine = new LeaderLine(
    //   document.getElementById('start'),
    //   document.getElementById('destination')
    // );
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
          <textarea 
              id="item-left"
              placeholder="paste the list of ingredients here"
              onChange={this.handleLeftInput}
              ></textarea>
        </div>
        <div>
          <textarea 
            id="item-right"
            placeholder="paste the list of ingredients here"
            onChange={this.handleRightInput}
            ></textarea>
        </div>
        <button
          onClick={() => {
            if (this.state.leftInputString != "" && this.state.rightInputString) {
              this.setState({
                leftInputArray: this.convertStringToArray(this.state.leftInputString),
                rightInputArray: this.convertStringToArray(this.state.rightInputString)
              });
            }
            
          }}
          >Match product ingredients</button>

          <div>
            <div className="ingredients-matching" id="start" >{a.map(i => <div className="ingredients">{i}</div>)}</div>
            <svg>
              <line stroke-width="2px" stroke="#000000" x1="100" y1="5" x2="1000" y2="100"/>
              <line stroke-width="2px" stroke="#000000" x1="100" y1="10" x2="1000" y2="5"/>
            </svg>
            <div className="ingredients-matching" id="destination" >{b.map(i => <div className="ingredients">{i}</div>)}</div>
            
          </div>
          
          {matchingIndex.map(i => <div>{i}</div>)}
          
        </div>
      </React.Fragment>
    );
  }
}


export default IngredientsMatchPage;
