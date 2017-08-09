import React, { Component } from 'react';

import './App.css';
import Column1 from './Component/Column1';
import Column2 from './Component/Column2';
import Column3 from './Component/Column3';
import Column4 from './Component/Column4';
class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      tasks: {
        winnie:["watch movie tonight","play games","listen to music","eating"],
        bob:["play golf", "read book"],
        thomas:["fly the dream", "go to shop","do work out"],
        george:["sleep"]
      }
    }
    this.onMove = this.onMove.bind(this);
    this.addCard = this.addCard.bind(this);
  }
  componentDidMount() {
    
  }
  onMove(obj) {
    const {tasks} = this.state;
    let currentTask = tasks[obj.name];
    let nextTask = tasks[obj.nextName];
    let removedTask = currentTask.splice(obj.index, 1);
    nextTask.push(removedTask[0]);
    this.setState({
      tasks: {
        ...this.state.tasks,
        [obj.name]: currentTask,
        [obj.nextName]: nextTask
      }
    })
    console.log(obj);
  }
  addCard(card) {
    const newCards = [...this.state.tasks[card.name], ...[card.text]];
    console.log(newCards);
    this.setState({
      tasks: {
        ...this.state.tasks,
        [card.name]: newCards
      }
    })
  }
  render() {
    const {tasks} = this.state;
    
    return (
      <div className="App">
        <Column1 cards={tasks["winnie"]} onMove={this.onMove} addCard={this.addCard}/>
        <Column2 cards={tasks["bob"]} onMove={this.onMove} addCard={this.addCard}/>
        <Column3 cards={tasks["thomas"]} onMove={this.onMove} addCard={this.addCard}/>
        <Column4 cards={tasks["george"]} onMove={this.onMove} addCard={this.addCard}/>
      </div>
    );
  }
}

export default App;
