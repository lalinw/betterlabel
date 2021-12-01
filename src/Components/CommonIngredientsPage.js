
import React, { Component } from 'react';
import './../App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


class CommonIngredientsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //items: [{}]
      // {name: "", ingredients: [a, b, c...]}
      items: [],
      ingredientsMap: new Map(),
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
    this.setState({ ingredientsMap: commonIngredientsMapSorted });

    this.state.ingredientsMap.forEach((item) => console.log(this.state.ingredientsMap.get(item.key)));
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


  commonIngredientsFormatter = (thisItem) => {
    //color in rgb() format
    const startColor = [255,255,255]; // color for least common
    const endColor = [31,147,213]; // color for most common
    var RGBdiff = [
      endColor[0] - startColor[0],
      endColor[1] - startColor[1],
      endColor[2] - startColor[2]
    ];
    
    var stepsInt = this.state.items.length; //the number of steps in the gradient
    var stepsPerc = 100 / (stepsInt); //the percentage representation of the step

    var i = this.state.ingredientsMap.get(thisItem).length;
    var rValue = (RGBdiff[0] > 0) 
    ? Math.round(RGBdiff[0] / 100 * (stepsPerc * (i - 1)))
    : Math.round((startColor[0] + (RGBdiff[0]) / 100 * (stepsPerc * (i - 1))));
    
    var gValue = (RGBdiff[1] > 0) 
      ? Math.round(RGBdiff[1] / 100 * (stepsPerc * (i - 1))) 
      : Math.round((startColor[1] + (RGBdiff[1]) / 100 * (stepsPerc * (i - 1))));
      
    var bValue = (RGBdiff[2] > 0) 
      ? Math.round(RGBdiff[2] / 100 * (stepsPerc * (i - 1))) 
      : Math.round((startColor[2] + (RGBdiff[2]) / 100 * (stepsPerc * (i - 1))));
    
    console.log(rValue + "-" + gValue + "-" + bValue);
    var colorRGB = "rgb(" + rValue + ',' + gValue + ',' + bValue + ")";

    return (
      <div className="ingredients commontooltip" style={{borderColor: "aliceblue", backgroundColor: colorRGB, width: "30em"}} title={i + " source item(s): " + this.state.ingredientsMap.get(thisItem).join(', ')}>
        {thisItem}
      </div>
    );
  }


  addItem = () => {
    if (this.state.inputName !== "" && this.state.input !== "") {
      var itemName = this.state.inputName; 
      var ingredientsArray = this.convertStringToArray(this.state.input);
      const newItem = {
        name: itemName,
        ingredients: ingredientsArray
      };

      document.getElementById("commoningredients-name").value = '';
      document.getElementById("commoningredients-input").value = '';

      this.setState( prevState => ({ 
        items: [...prevState.items, newItem],
        input: "",
        inputName: ""
      }), () => {
        this.findCommonIngredients()
      });
    } else {
      alert("Please input name AND ingredients list to add item");
    }
    
  }

  deleteItem = (event) => {
    var itemToDelete = event.currentTarget.value;
    const newItemArray = this.state.items.filter((thisItem) => thisItem.name !== itemToDelete);
    this.setState({ 
      items: newItemArray 
    }, () => {
      this.findCommonIngredients()
    });
  }


  handleInput = (event) => {
    this.setState({ input: event.target.value });
  }


  handleInputName = (event) => {
    this.setState({ inputName: event.target.value });
  }

  
  displayItem = (item) => {
    return (
      <div key={item.name} className="commonIngredientItem">
        <div style={{display: "inline-block", width: "90%", overflowWrap: "break-word", verticalAlign: "top"}}>
          {item.name} 
        </div>
        <div style={{display: "inline-block", width: "10%"}}>
          <IconButton aria-label="delete" value={item.name} onClick={this.deleteItem}>
            <HighlightOffIcon/>
          </IconButton>
        </div>
        
        {/* <div>[{item.ingredients.join(", ")}]</div> */}
        
      </div>
    );
  }

  render() {
    let mapKeys = Array.from( this.state.ingredientsMap.keys() );

    return (
      <React.Fragment>
        <div>
          {this.state.items.map((item) => this.displayItem(item))}
        </div>
          
        <div>
          <div className="input-wrapper">
            <input
              id="commoningredients-name"
              placeholder="item name"
              onChange={this.handleInputName}
              ></input>
          </div>
          <div className="input-wrapper">
            <textarea 
              id="commoningredients-input"
              placeholder="place list of ingredients"
              onChange={this.handleInput}
              ></textarea>
          </div>
          <Button 
            variant="contained" 
            disableElevation
            startIcon={<AddIcon />}
            className="compute-button"
            onClick={this.addItem}>
            Add this item
          </Button>
        </div>
        
        <div className="result">
          <h3>Common ingredients in descending order:</h3>
          {this.state.items.length !== 0
            ? <p>hover on each ingredient to see source item(s)</p>
            : <p><i>no ingredients to display</i></p>
          }
          {this.state.ingredientsMap.length !== 0 &&
          mapKeys.map((item) => this.commonIngredientsFormatter(item))}
        </div>

      </React.Fragment>
    );
  }
}


export default CommonIngredientsPage;
