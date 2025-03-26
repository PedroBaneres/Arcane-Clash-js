import React from 'react';

const Card = ({ card, onPlay, onBuy }) => (
  <div className="card">
    <h3>{card.name}</h3>
    {card.attack && <p>⚔️ Attack: {card.attack}</p>}
    {card.trade && <p>💰 Trade: {card.trade}</p>}
    {card.defense && <p>🛡️ Defense: {card.defense}</p>}
    <p>💵 Cost: {card.cost}</p>
    {onPlay && <button onClick={() => onPlay(card)}>Play</button>}
    {onBuy && <button onClick={() => onBuy(card)}>Buy</button>}
  </div>
);

export default Card;
