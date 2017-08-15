import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Column from './Component/Column';
class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Column pos={"left"} currentCat={"todo"} nextCat={"progress"} style={{backgroundColor:"#FFAAAA"}} cards={this.props.tasks["todo"]}/>
        <Column pos={"middle"} currentCat={"progress"} nextCat={"review"} prevCat={"todo"} style={{backgroundColor:"#D46A6A"}} cards={this.props.tasks["progress"]}/>
        <Column pos={"middle"} currentCat={"review"} nextCat={"done"} prevCat={"progress"} style={{backgroundColor:"#801515"}} cards={this.props.tasks["review"]}/>
        <Column pos={"right"} currentCat={"done"} prevCat={"review"} style={{backgroundColor:"lightpink"}} cards={this.props.tasks["done"]}/> 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({tasks: state})
export default connect(mapStateToProps)(App);
