import React from 'react';

const LeftCard = ({content, moveToRight}) => {
  return (
    <div className="card">
      <span className="content">{content}</span>
      <span className="right-arrow" onClick={moveToRight}>{">"}</span>
    </div>
  );
}

export default LeftCard;