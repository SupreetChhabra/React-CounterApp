import React, { Component } from 'react';
import FirstComponent, { SecondComponent, ThirdComponent } from './components/learning-components/MyComponents'
import Counter from './components/counter/Counter'
import TodoApp from './components/tofo/TodoApp'
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}


function LearningComponent() {
  return (
    <div className="LearningComponent">
      Hello World
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  );
}


export default App;