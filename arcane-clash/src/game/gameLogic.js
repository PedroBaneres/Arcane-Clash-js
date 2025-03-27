// A simple deep clone using JSON (suitable if your state is pure data)
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const initializeGame = () => {
  // Create two players with sample data
  const player1 = {
    name: "Player 1",
    health: 50,
    tradePoints: 0,
    deck: [
        { id: 1, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 2, name: "Viper", cost: 0, attack: 1},
        { id: 3, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 4, name: "Viper", cost: 0, attack: 1},
        { id: 5, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 6, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 7, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 8, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 9, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 10, name: "Scout", cost: 0, attack: 0, trade: 1 },
    ],
    
    hand: [],
    discardPile: [],
  };

  const player2 = {
    name: "Player 2",
    health: 50,
    tradePoints: 0,
    deck: [
        { id: 1, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 2, name: "Viper", cost: 0, attack: 1},
        { id: 3, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 4, name: "Viper", cost: 0, attack: 1},
        { id: 5, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 6, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 7, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 8, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 9, name: "Scout", cost: 0, attack: 0, trade: 1 },
        { id: 10, name: "Scout", cost: 0, attack: 0, trade: 1 },
    ],
    hand: [],
    discardPile: [],
  };

  // Initial Trade Row with sample cards
  const tradeRow = [
    { id: 15, name: "Blob Fighter", cost: 4, attack: 3, trade: 2 },
    { id: 16, name: "Battle Station", cost: 5, attack: 0, trade: 4 },
    { id: 18, name: "Bgoo", cost: 9, attack: 10, trade: 2 },
    { id: 17, name: "Battle Stationsada", cost: 2, attack: 0, trade: 2 },
  ];

  

  return {
    players: [player1, player2],
    tradeRow,
    currentPlayer: 0,
  };
};

const playCard = (state, card) => {
  const newState = deepClone(state);
  const currentPlayer = newState.players[newState.currentPlayer];

  // Remove card from hand
  currentPlayer.hand = currentPlayer.hand.filter(c => c.id !== card.id);
  currentPlayer.discardPile.push(card);

  // Apply card effects: increase tradePoints and deal damage if applicable
  if (card.trade) {
    currentPlayer.tradePoints += card.trade;
  }
  if (card.attack) {
    const opponentIndex = (newState.currentPlayer + 1) % newState.players.length;
    newState.players[opponentIndex].health -= card.attack;
  }

  return newState;
};

const buyCard = (state, card) => {
  const newState = deepClone(state);
  const currentPlayer = newState.players[newState.currentPlayer];
  if (currentPlayer.tradePoints >= card.cost) {
    currentPlayer.tradePoints -= card.cost;
    currentPlayer.discardPile.push(card);
    // Remove card from the trade row
    newState.tradeRow = newState.tradeRow.filter(c => c.id !== card.id);
  }
  return newState;
};

const endTurn = (state) => {
  const newState = deepClone(state);
  newState.currentPlayer = (newState.currentPlayer + 1) % newState.players.length;
  newState.currentPlayer.deck = newState.currentPlayer.discardPile;
  newState.currentPlayer.drawCard;
  return newState;
};

const drawCard = (state, playerObj) => {
  const newState = deepClone(state);
  const player = newState.players.find(p => p.name === playerObj.name);
  if (player && player.deck.length > 0) {
    player.hand.push(player.deck.shift());
  }
  return newState;
};

export default {
  initializeGame,
  playCard,
  buyCard,
  endTurn,
  drawCard,
};
