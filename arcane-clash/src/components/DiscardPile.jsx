import React from 'react';

const DiscardPile = ({ discardPile }) => (
  <div className="discard-pile">
    <h3>Discard Pile ({discardPile.length} cards)</h3>
  </div>
);

export default DiscardPile;
