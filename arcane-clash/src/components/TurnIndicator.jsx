import React from 'react';

const TurnIndicator = ({ currentPlayer }) => (
  <div className="turn-indicator">
    <h2>Current Turn: Player {currentPlayer + 1}</h2>
  </div>
);

export default TurnIndicator;
