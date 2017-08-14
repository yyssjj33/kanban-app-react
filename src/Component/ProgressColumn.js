import React, {Component} from 'react';
import MiddleCard from './MiddleCard';
import {connect} from 'react-redux';
import {addCard, moveCard} from '../actions';
import { bindActionCreators } from 'redux'
class ProgressColumn extends Component{

  addCard = () => {
    let text = window.prompt("Add new card content!");
    this.props.addCard("progress", text);
  }

  onClickRight = (i) => {
    this.props.moveCard("progress", "review", i)
  }

  onClickLeft= (i) => {
    this.props.moveCard("progress", "todo", i)
  }
  
  render() {
    const {cards} = this.props;
    return <div className="column">
      <div className="column-header" style={{backgroundColor:"#39A59C"}}>
        {"Progress"}
      </div>
      <div>
        {cards.map(c => 
          <MiddleCard key={c.id} content={c.text} 
            moveToLeft={()=>this.onClickRight(c.id)}
            moveToRight={()=>this.onClickLeft(c.id)}
          />
        )}
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

export default connect(null, mapDispatchToProps)(ProgressColumn);
