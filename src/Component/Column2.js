import React, {Component} from 'react';
import MiddleCard from './MiddleCard';
class Column2 extends Component{
  componentDidMount() {

  }

  addCard() {
    let text = window.prompt("Add new card content!");
    this.props.addCard({name: "bob", text})
  }

  onClickRight = (i) => {
    this.props.onMove({
          index: i,
          name: "bob",
          nextName: "thomas"
        })
  }

  onClickLeft= (i) => {
    this.props.onMove({
          index: i,
          name: "bob",
          nextName: "winnie"
        })
  }
  render() {
    const {cards} = this.props;
    return <div className="column">
      <div className="column-header" style={{backgroundColor:"#39A59C"}}>
        {"Bob"}
      </div>
      <div>
        {cards.map( (c,i) => 
          <MiddleCard key={i} content={c} 
            moveToLeft={()=>this.onClickRight(i)}
            moveToRight={()=>this.onClickLeft(i)}
          />
        )}
      </div>
      <button onClick={this.addCard.bind(this)}>Add Card</button>
    </div>
  }
}

export default Column2;