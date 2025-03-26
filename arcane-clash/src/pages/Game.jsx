import React, { useState } from 'react';
import PlayerArea from '../components/PlayerArea';
import TradeRow from '../components/TradeRow';
import TurnIndicator from '../components/TurnIndicator';
import gameLogic from '../game/gameLogic';
import '../styles.css';

const Game = () => {
  const [gameState, setGameState] = useState(gameLogic.initializeGame());

  const playCard = (card) => {
    setGameState(prevState => gameLogic.playCard(prevState, card));
  };

  const buyCard = (card) => {
    setGameState(prevState => gameLogic.buyCard(prevState, card));
  };

  const endTurn = () => {
    setGameState(prevState => gameLogic.endTurn(prevState));
  };

  const drawCard = (player) => {
    setGameState(prevState => gameLogic.drawCard(prevState, player));
  };

  return (
    <div className="game">
      <h1>Star Realms Clone</h1>
      <TurnIndicator currentPlayer={gameState.currentPlayer} />
      <PlayerArea 
        player={gameState.players[0]} 
        onPlayCard={playCard} 
        onDraw={drawCard} 
      />
      <TradeRow tradeRow={gameState.tradeRow} onBuy={buyCard} />
      <PlayerArea 
        player={gameState.players[1]} 
        onPlayCard={playCard} 
        onDraw={drawCard} 
      />
      <button onClick={endTurn}>End Turn</button>
    </div>
  );
};

export default Game;
