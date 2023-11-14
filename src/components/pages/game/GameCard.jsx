import React from 'react';


function GameCard({cardKey,matchKey,content,onCardClick,isFlipped}) {

  return (
    <div className={`game-card ${isFlipped===true ? 'flipped' : ''}`} onClick={onCardClick}>
    <h1>{content}</h1>
    </div>
  )
}

export default GameCard