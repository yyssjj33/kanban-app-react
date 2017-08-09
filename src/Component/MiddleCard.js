import React from 'react';

const MiddleCard = ({content, moveToLeft, moveToRight}) => {
  return (
    <div className="card">
      <span className="left-arrow" onClick={moveToRight}>{"<"}</span>
      <span className="content">{content}</span>
      <span className="right-arrow" onClick={moveToLeft}>{">"}</span>
    </div>
  );
}

export default MiddleCard;