import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import TodoColumn from './Component/TodoColumn';
import ProgressColumn from './Component/ProgressColumn';
import ReviewColumn from './Component/ReviewColumn';
import DoneColumn from './Component/DoneColumn';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoColumn cards={this.props.tasks["todo"]}/>
        <ProgressColumn cards={this.props.tasks["progress"]}/>
        <ReviewColumn cards={this.props.tasks["review"]}/>
        <DoneColumn cards={this.props.tasks["done"]}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({tasks: state})
export default connect(mapStateToProps)(App);
