import React from 'react';
import Card from './Card';

const TradeRow = ({ tradeRow, onBuy }) => (
  <div className="trade-row">
    <h2>Trade Row</h2>
    {tradeRow.map(card => (
      <Card key={card.id} card={card} onBuy={onBuy} />
    ))}
  </div>
);

export default TradeRow;
