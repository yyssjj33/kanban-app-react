import React, {Component} from 'react';
import LeftCard from './LeftCard';
import {connect} from 'react-redux';
import {addCard, moveCard} from '../actions';
import { bindActionCreators } from 'redux'

class TodoColumn extends Component{
  addCard = () => {
    let text = window.prompt("Add new card content!");
    this.props.addCard("todo", text);
  }

  onClickRight = (i) => {
    this.props.moveCard("todo", "progress", i)
  }

  render() {
    const {cards} = this.props;
    return <div className="column">
      <div className="column-header" style={{backgroundColor:"#8E6E95"}}>
        {"Todo"}
      </div>
      <div>
        {cards.map(c=><LeftCard key={c.id} content={c.text} moveToRight={()=>this.onClickRight(c.id)}/>)}
      </div>
      <button onClick={this.addCard}>Add Card</button>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: bindActionCreators(addCard, dispatch),
    moveCard: bindActionCreators(moveCard, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(TodoColumn);