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
        <h2>Welcome to BetterLabel™!</h2>
        <p>BetterLabel™ is here to help reading labels easier than before.</p>
        <div>
          BetterLabel™ can help you:
          <ul>
            <li><strong>tag wanted and unwanted ingredients</strong> from an ingredients list</li>
            <li><strong>compare ingredients</strong> between 2 products</li>
            <li><strong>find common ingredients</strong> between unlimited number of products</li>
          </ul>
          <br/>
          See the FAQ section on how to use BetterLabel™ 😊
        </div>

        <div>
          Q. Is my data being sent anywhere?
          <br/>
          A. No. BetterLabel™ is a client-based website developed using ReactJS. The calculations are all made on your browser, so no data is being exchanged to any remote server.
          <br/>
          <br/>
          Q. How do I tag ingredients from a list?
          <br/>
          A. (pic + explanation)
          <br/>
          <br/>
          Q. How do I compare ingredients between products?
          <br/>
          A. (pic + explanation)
          <br/>
          <br/>
          Q. How do I find common ingredients from multiple products?
          <br/>
          A. (pic + explanation)
          <br/>

        </div>
        

      </React.Fragment>
    );
  }
}


export default AboutPage;
