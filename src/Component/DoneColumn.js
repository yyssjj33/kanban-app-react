import React, {Component} from 'react';
import RightCard from './RightCard';
import {connect} from 'react-redux';
import {addCard, moveCard} from '../actions';
import { bindActionCreators } from 'redux'

class DoneColumn extends Component{

  addCard = () => {
    let text = window.prompt("Add new card content!");
    this.props.addCard("done", text);
  }

  onClickLeft = (i) => {
    this.props.moveCard("done", "review", i)
  }

  render() {
    const {cards} = this.props;
    return <div className="column">
      <div className="column-header" style={{backgroundColor:"red"}}>
        {"Done"}
      </div>
      <div>
        {cards.map(c=><RightCard key={c.id} content={c.text} moveToLeft={()=>this.onClickLeft(c.id)}/>)}
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

export default connect(null, mapDispatchToProps)(DoneColumn);