
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var sampleString = "Water/Eau, Petrolatum, Sodium Trideceth Sulfate, Mineral Oil/Huile Minerale, Sodium Chloride, Glycine Soja (Soybean) Oil, Cocamidopropyl Betaine, Fragrance/Parfum, Trideceth-3, Sodium Citrate, Guar Hydroxypropyltrimonium Chloride, Sodium Benzoate, Xanthan Gum, Citric Acid, Disodium Edta, Bht, Glyceryl Oleate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Butyrospermum Parkii (Shea) Butter, Methylchloroisothiazolinone, Methylisothiazolinone, Green 6.";
    var treatedString = sampleString.replaceAll('.', ' ');
    var array = treatedString.split(","); 


    return (
      <React.Fragment>
        <div>Better Ingredient List</div>
        <textarea name="ingredients-input" placeholder="paste the list of ingredients here"></textarea>
        <button>better the labels</button>
        <textarea name="ingredients-input" placeholder="paste unwanted ingredients here"></textarea>
        <button>tag unwanted ingredients</button>
        <div>
          {array.map((i) => {
            var trimmed = i.trim();
            const toCompared = "Xanthan Gum";
            if ( trimmed.toLowerCase() == toCompared.toLowerCase() ) {

              return <div style={{backgroundColor: "lightblue"}}>{trimmed}</div>
            }
            return <div value={trimmed}>{trimmed}</div>
          })}
        </div>
      </React.Fragment>
    );
  }
}


export default App;
