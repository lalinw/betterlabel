
import React, { Component } from 'react';
import Xarrow from 'react-xarrows';
import './../App.css';


class IngredientsMatchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftInputString: "",
      leftInputArray: [],
      rightInputString: "",
      rightInputArray: [],
      leftInputName: "Item A",
      rightInputName: "Item B"
    };
  }

  componentDidMount() {
    // this.setState({ 
    //   leftInputArray: ["Sodium Chloride", "Sodium Citrate", "Citric Acid", "Sodium Laureth Sulfate", "Sodium Lauryl Sulfate", "fragrance"],
    //   rightInputArray: ["Sodium Citrate", "Citric not Acid", "Sodium Lauryl Sulfate", "oil", "Sodium Chloride", "Sodium Laureth Sulfate"]
    // });
  }

  itemFlagFormatter = (thisItem, flaggedItemsArray) => {
    for (let i = 0; i < flaggedItemsArray.length; i++) {
      if (thisItem.toLowerCase() === flaggedItemsArray[i].toLowerCase()) {
        //exact matches
        return <div style={{backgroundColor: "lightblue", borderColor: "red", borderStyle: "solid"}}>{thisItem}</div>;
      } else if (thisItem.toLowerCase().includes(flaggedItemsArray[i].toLowerCase())) {
        //contains matching phrase
        return <div style={{backgroundColor: "yellow", borderColor: "orange", borderStyle: "solid"}}>{thisItem}</div>;
      }
    }
    return <div>{thisItem}</div>;
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

  handleLeftInputName = (event) => {
    this.setState({ leftInputName: event.target.value });
  }

  handleRightInputName = (event) => {
    this.setState({ rightInputName: event.target.value });
  }

  handleLeftInput = (event) => {
    this.setState({ leftInputString: event.target.value });
  }


  handleRightInput = (event) => {
    this.setState({ rightInputString: event.target.value });
  }


  render() {
    // var a = ["Sodium Chloride", "Sodium Citrate", "Citric Acid", "Sodium Laureth Sulfate", "Sodium Lauryl Sulfate", "fragrance"];
    // var b = ["Sodium Citrate", "Citric not Acid", "Sodium Lauryl Sulfate", "oil", "Sodium Chloride", "Sodium Laureth Sulfate"];
    var a = this.state.leftInputArray
    var b = this.state.rightInputArray;
    var matchingIndex = [];
    for (var i = 0; i < a.length; i++) {
      matchingIndex[i] = -1; //defaults from no match
      for (var j = 0; j < b.length; j++) {
        if (a[i].toLowerCase() === b[j].toLowerCase()) {
          matchingIndex[i] = j;
        }
      }
    }

    return (
      <React.Fragment>
        <div>
          
        <div className="input-split">  
          <input
            id="itemmMatch-left-name"
            placeholder="item name"
            onChange={this.handleLeftInputName}
            ></input>
          <textarea 
              id="itemmMatch-left"
              placeholder="paste the list of ingredients here"
              onChange={this.handleLeftInput}
              ></textarea>
        </div>
        <div className="input-split">
          <input
            id="itemmMatch-right-name"
            placeholder="item name"
            onChange={this.handleRightInputName}
            ></input>
          <textarea 
            id="itemmMatch-right"
            placeholder="paste the list of ingredients here"
            onChange={this.handleRightInput}
            ></textarea>
        </div>
        <button
          className="compute-button"
          onClick={() => {
            if (this.state.leftInputString !== "" && this.state.rightInputString) {
              this.setState({
                leftInputArray: this.convertStringToArray(this.state.leftInputString),
                rightInputArray: this.convertStringToArray(this.state.rightInputString)
              });
            } else {
              alert("Remember to input 2 ingredients lists");
            }
            
          }}
          >Match product ingredients</button>

          <div className="result">
            <div className="ingredients-matching" id="left" >
              {matchingIndex.length > 0 && <h2>{this.state.leftInputName}</h2>}
              {a.map((key, index) => <div className="ingredients" id={"left" + index} >{key}</div>)}
            </div>

            <div className="ingredients-matching" id="canvas">
              
              {matchingIndex.map((key, index) => {
                if (key !== -1) {
                  return <Xarrow start={"left" + index} end={"right" + key} 
                            curveness="0" 
                            color="cornflowerblue"
                            strokeWidth="2"
                            showHead={false}
                            headSize="0"
                          />;
                }
                return null;
              })}
            </div>
            
            <div className="ingredients-matching" id="right" >
            {matchingIndex.length > 0 && <h2>{this.state.rightInputName}</h2>}
              {b.map((key, index) => <div className="ingredients" id={"right" + index} >{key}</div>)}
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}


export default IngredientsMatchPage;
