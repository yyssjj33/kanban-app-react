import React, {Component} from 'react';
import LeftCard from './LeftCard';
class Column extends Component{

  componentDidMount() {
    
  }
  addCard() {
    let text = window.prompt("Add new card content!");
    this.props.addCard({name: "winnie", text})
  }

  onClickRight = (i) => {
    this.props.onMove({
      index: i,
      name: "winnie",
      nextName: "bob"
    })
  }

  render() {
    const {cards} = this.props;
    return <div className="column">
      <div className="column-header" style={{backgroundColor:"#8E6E95"}}>
        {"Winnie"}
      </div>
      <div>
        {cards.map((c, i)=><LeftCard key={i} content={c} moveToRight={()=>this.onClickRight(i)}/>)}
      </div>
      <button onClick={this.addCard.bind(this)}>Add Card</button>
    </div>
  }
}

export default Column;