import React, {Component} from 'react';
import RightCard from './RightCard';
class Column4 extends Component{
  componentDidMount() {
    
  }
  addCard() {
    let text = window.prompt("Add new card content!");
    this.props.addCard({name: "winnie", text})
  }

  onClickLeft = (i) => {
    this.props.onMove({
      index: i,
      name: "george",
      nextName: "thomas"
    })
  }

  render() {
    const {cards} = this.props;
    return <div className="column">
      <div className="column-header" style={{backgroundColor:"red"}}>
        {"George"}
      </div>
      <div>
        {cards.map((c, i)=><RightCard key={i} content={c} moveToLeft={()=>this.onClickLeft(i)}/>)}
      </div>
      <button onClick={this.addCard.bind(this)}>Add Card</button>
    </div>
  }
}

export default Column4;