
import React, { Component } from 'react';
import Xarrow, {useXarrow, xarrowPropsType, Xwrapper} from 'react-xarrows';
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
    this.handleLeftInput = this.handleLeftInput.bind(this);
    this.handleRightInput = this.handleRightInput.bind(this);
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
    // var a = ["Sodium Chloride", "Sodium Citrate", "Citric Acid", "Sodium Laureth Sulfate", "Sodium Lauryl Sulfate", "fragrance"];
    // var b = ["Sodium Citrate", "Citric not Acid", "Sodium Lauryl Sulfate", "oil", "Sodium Chloride", "Sodium Laureth Sulfate"];
    var a = this.state.leftInputArray
    var b = this.state.rightInputArray;
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
            <div className="ingredients-matching" id="left" >
              {a.map((key, index) => <div className="ingredients" id={"left" + index} >{key}</div>)}
            </div>

            {/* TODO: Insert the lines after both div sides have been drawn */}
            <div className="ingredients-matching" id="canvas">
              {matchingIndex.map((key, index) => {
                if (key !== -1) {
                  return <Xarrow start={"left" + index} end={"right" + key} 
                            curveness="0" 
                            color="cornflowerblue"
                            strokeWidth="2"
                            showHead="false"
                            headSize="0"
                          />;
                }
                
              })}
            </div>
            
            <div className="ingredients-matching" id="right" >
              {b.map((key, index) => <div className="ingredients" id={"right" + index} >{key}</div>)}
            </div>
          </div>
          
          {/* {matchingIndex.map(i => <div>{i}</div>)} */}



        </div>
      </React.Fragment>
    );
  }
}


export default IngredientsMatchPage;
