import React from 'react';

const LeftCard = ({content, moveToLeft}) => {
  return (
    <div className="card">
      <span className="left-arrow" onClick={moveToLeft}>{"<"}</span>
      <span className="content">{content}</span>
    </div>
  );
}

export default LeftCard;