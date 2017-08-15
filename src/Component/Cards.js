import React from 'react';

export const LeftCard = ({content, moveToRight, removeCard}) => {
  return (
    <div className="card">
      <span className="content">{content}</span>
      <span className="right-arrow" onClick={moveToRight}>{">"}</span>
      <span className="remove-card" onClick={removeCard}>x</span>
    </div>
  );
}

export const MiddleCard = ({content, moveToLeft, moveToRight, removeCard}) => {
  return (
    <div className="card">
      <span className="left-arrow" onClick={moveToRight}>{"<"}</span>
      <span className="content">{content}</span>
      <span className="right-arrow" onClick={moveToLeft}>{">"}</span>
      <span className="remove-card" onClick={removeCard}>x</span>
    </div>
  );
}

export const RightCard = ({content, moveToLeft, removeCard}) => {
  return (
    <div className="card">
      <span className="left-arrow" onClick={moveToLeft}>{"<"}</span>
      <span className="content">{content}</span>
      <span className="remove-card" onClick={removeCard}>x</span>
    </div>
  );
}