import React from 'react';
import "./GameCard.css";


function GameCard({cardKey, matchKey, content, onCardClick, isFlipped}) {
  return (
      <div className={`game-card ${isFlipped[cardKey] ? 'flipped' : ''}`} onClick={() => onCardClick(cardKey,matchKey)}>
          <h1 className="card-content">{content}</h1>
      </div>
  );
}

export default GameCard