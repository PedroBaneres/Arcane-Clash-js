import React from 'react';

const Deck = ({ deck, onDraw }) => (
  <div className="deck">
    <h3>Deck ({deck.length} cards)</h3>
    <button onClick={onDraw} disabled={deck.length === 0}>Draw</button>
  </div>
);

export default Deck;
