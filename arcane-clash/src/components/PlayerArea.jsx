import React from 'react';
import Card from './Card';
import Deck from './Deck';
import DiscardPile from './DiscardPile';

const PlayerArea = ({ player, onPlayCard, onDraw }) => (
  <div className="player-area">
    <h2>{player.name}</h2>
    <p>❤️ Health: {player.health}</p>
    <p>💰 Trade Points: {player.tradePoints}</p>
    <Deck deck={player.deck} onDraw={() => onDraw(player)} />
    <DiscardPile discardPile={player.discardPile} />
    <div className="hand">
      {player.hand.map(card => (
        <Card key={card.id} card={card} onPlay={onPlayCard} />
      ))}
    </div>
  </div>
);

export default PlayerArea;
