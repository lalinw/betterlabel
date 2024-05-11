import React, { Component } from 'react';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {

    return (
      <React.Fragment>
        <h2>Welcome to BetterLabel!</h2>
        <p>BetterLabel is here to help reading labels easier than before. See the FAQ section on how to use BetterLabel 😊</p>
        <div>
          BetterLabel can help you:
          <ul>
            <li><strong>tag wanted and unwanted ingredients</strong> from an ingredients list</li>
            <li><strong>compare ingredients</strong> between 2 products</li>
            <li><strong>find common ingredients</strong> between unlimited number of products</li>
          </ul>
          <br/>
          
        </div>

        <div>
          <h3>F.A.Q.</h3>
          Q. Is my data being sent anywhere?
          <br/>
          A. No. BetterLabel is a client-based website developed using ReactJS. The calculations are all made on your browser, so no data is being exchanged to any remote server.
          <br/>
          <br/>
          Q. How do I tag ingredients from a list?
          <br/>
          A. Simply type down the name of the ingredient to the wanted/unwanted ingredient box. To tag multiple ingredients, type down a comma-separated list. Then, copy and paste the ingredient list on the bottom text box. Ingredient names are not case-sensitive, but alternate name (e.g. water vs. aqua) may not be tagged correctly.
          <br/>
          <br/>
          Q. How do I compare ingredients between products?
          <br/>
          A. BetterLabel can help compare the relative rankings of ingredients between 2 products. Copy and paste a comma-separated ingredient list on each side. The product name is optional. Product's ingredients list are ordered by predominance by weight, meaning there is a geater amount of the ingredient that appears earlier in the list compared to one that appears later. Note that the ingredients are listed relative to each oither in that specific product only.
          <br/>
          <br/>
          Q. How do I find common ingredients from multiple products?
          <br/>
          A. Input the item name and ingredient list and click the button to add that particular item to the pool of items. Each item will be represented by its name. As more items are added, a cumulative list of ingredients will appear at the bottom in descending order of frequency. 
          <br/>

        </div>
        

      </React.Fragment>
    );
  }
}


export default AboutPage;
