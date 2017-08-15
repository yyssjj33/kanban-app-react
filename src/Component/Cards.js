import React from 'react';

export const LeftCard = ({content, moveToRight}) => {
  return (
    <div className="card">
      <span className="content">{content}</span>
      <span className="right-arrow" onClick={moveToRight}>{">"}</span>
    </div>
  );
}

export const MiddleCard = ({content, moveToLeft, moveToRight}) => {
  return (
    <div className="card">
      <span className="left-arrow" onClick={moveToRight}>{"<"}</span>
      <span className="content">{content}</span>
      <span className="right-arrow" onClick={moveToLeft}>{">"}</span>
    </div>
  );
}

export const RightCard = ({content, moveToLeft}) => {
  return (
    <div className="card">
      <span className="left-arrow" onClick={moveToLeft}>{"<"}</span>
      <span className="content">{content}</span>
    </div>
  );
}