import React, { Component } from 'react';

export default class FirstComponent extends Component {
    render() {
      return (
        <div className="firstcomponent">
  
          FirstComponent
        </div>
      );
    }
  }
  

export class SecondComponent extends Component {
    render() {
      return (
        <div className="secondcomponent">
  
          SecondComponent
        </div>
      );
    }
  }

  export  function ThirdComponent() {
    return (
      <div className="thirdcomponent">
        ThirdComponent
      </div>
    );
  }
  
  