import React, {Component} from 'react';
import {MiddleCard, LeftCard, RightCard} from './Cards';
import {connect} from 'react-redux';
import {addCard, moveCard, removeCard} from '../actions';
import { bindActionCreators } from 'redux'

class Column extends Component{

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.cards !== nextProps.cards;
  }

  addCard = () => {
    const {currentCat} = this.props;
    const text = window.prompt("Add new card content!");
    if(text) {
      this.props.addCard(currentCat, text);
    } else {
      return;
    }
  }

  onClickLeft = (i) => {
    const {currentCat, nextCat} = this.props;
    this.props.moveCard(currentCat, nextCat, i)
  }

  onClickRight = (i) => {
    const {currentCat, prevCat} = this.props;
    this.props.moveCard(currentCat, prevCat, i)
  }

  onRemoveCard = (i) => {
    const {currentCat} = this.props;
    this.props.removeCard(currentCat, i);
  }

  renderCards = () => {
    const {cards, pos} = this.props;
    switch (pos) {
      case "left":
        return cards.map(c =>
                            <LeftCard key={c.id} content={c.text} 
                              moveToRight={()=>this.onClickLeft(c.id)}
                              removeCard={()=>this.onRemoveCard(c.id)}
                            />  
                        );
      case "middle":
        return cards.map(c => 
                          <MiddleCard key={c.id} content={c.text} 
                            moveToRight={()=>this.onClickRight(c.id)}
                            moveToLeft={()=>this.onClickLeft(c.id)}
                            removeCard={()=>this.onRemoveCard(c.id)}
                          />
                        )
      case "right":
        return cards.map(c =>
                          <RightCard key={c.id} content={c.text} 
                            moveToLeft={()=>this.onClickRight(c.id)}
                          />
                        )
      default:
        return ;
    }
  }

  render() {
    const {style, currentCat, pos} = this.props;
    return <div className="column">
      <div className="column-header" style={style}>
        {currentCat[0].toUpperCase()+currentCat.substr(1)}
      </div>
      <div>
        {this.renderCards()}
      </div>
      {pos==="left"?<button onClick={this.addCard}>Add Card</button>:null}
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: bindActionCreators(addCard, dispatch),
    moveCard: bindActionCreators(moveCard, dispatch),
    removeCard: bindActionCreators(removeCard, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Column);

