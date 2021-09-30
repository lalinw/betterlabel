
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flaggedItems: ["Sodium Chloride", "Sodium Citrate", "Citric Acid"]
    };
    this.itemFlagFormatter = this.itemFlagFormatter.bind(this);
    this.convertStringToArray = this.convertStringToArray.bind(this);
  }


  itemFlagFormatter(thisItem, flaggedItems) {
    for (let i = 0; i < flaggedItems.length; i++) {
      if (thisItem.toLowerCase() == flaggedItems[i].toLowerCase()) {
        return <div style={{backgroundColor: "lightblue", borderColor: "red", borderStyle: "solid"}}>{thisItem}</div>;
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

  render() {
    var sampleString = "Water, Petrolatum, Sodium Trideceth Sulfate, Mineral Oil/Huile Minerale, Sodium Chloride, Glycine Soja (Soybean) Oil, Cocamidopropyl Betaine, Fragrance/Parfum, Trideceth-3, Sodium Citrate, Guar Hydroxypropyltrimonium Chloride, Sodium Benzoate, Xanthan Gum, Citric Acid, Disodium Edta, Bht, Glyceryl Oleate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Butyrospermum Parkii (Shea) Butter, Methylchloroisothiazolinone, Methylisothiazolinone, Green 6.";
    var array = this.convertStringToArray(sampleString); 
    

    return (
      <React.Fragment>
        <div>Better Ingredient List</div>
        <textarea name="ingredients-input" placeholder="paste the list of ingredients here"></textarea>
        <button>better the labels</button>
        <textarea name="ingredients-input" placeholder="paste unwanted ingredients here"></textarea>
        <button>tag unwanted ingredients</button>
        <div>
          {array.map((i) => this.itemFlagFormatter(i, this.state.flaggedItems)) }
        </div>
      </React.Fragment>
    );
  }
}


export default App;
