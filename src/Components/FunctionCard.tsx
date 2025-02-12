import React from 'react';
import './FunctionCard.css';

const FunctionCard = () => {
  return (
    <div className="card-box">
      <div className="header">
        <div>
          <div className="dot-container">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </div>
        <h4 className="heading-text">Function: 1</h4>
      </div>

      <div>
        <div className="input-container">
          <label htmlFor="label" className="label">
            Equation
          </label>
          <input type="text" id="label" className="input" />
        </div>
        <div className="input-container">
          <label htmlFor="next function" className="label">
            Next function
          </label>
          <input
            disabled
            type="text"
            value={'Function 2'}
            id="label"
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;
