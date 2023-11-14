import React,{useContext, useEffect,useState}  from 'react';
import { DataContext } from '../../DataContext';
import { useNavigate } from 'react-router-dom';
import GameCard from './GameCard';
import {GameContext} from './GameContext';
import "./Game.css";


function Game() {
    const navigate=useNavigate();
    const {dataItems}=useContext(DataContext);
    const {setAttemptCount,attemptCount,handleCardClick,isFlipped,setIsFlipped,matchedCards,setMatchedCards,setTime,time,startTime }=useContext(GameContext);
    const wordDeck= dataItems.map((dataItem)=>({...dataItem, type:"word"}));
    const sentenceDeck=dataItems.map((dataItem)=>({...dataItem, type:"sentence"}));
    const gameCards= wordDeck.concat(sentenceDeck);
  
    
    const onCardClick = (cardKey,matchKey) => handleCardClick(cardKey,matchKey);
   

    useEffect(() => {
      const interval = startTime(); 
  
      return () => {
          clearInterval(interval); 
      };
  }, []);
 
  if (matchedCards.length ===16){
    setMatchedCards([]);
    setIsFlipped(false);
    navigate("/result");
  }

  const learnAgain=()=>{
    navigate("/");
    setAttemptCount(0);
    setTime(0);
    setIsFlipped(false);
    setMatchedCards([]);
  }





  return (
    <div className="game">
    

    <div className="card-stage">
      {gameCards.map((gameCard, index)=> (<GameCard
    cardKey={index}
    matchKey={gameCard.key}
    content={gameCard.type === "word" ? gameCard.word : gameCard.sentence}
    onCardClick={onCardClick}
    isFlipped={isFlipped} // Pass the entire isFlipped object
/>))}
    </div>

    <div  className="side-info">
    <h1 className="game-title">Matching Game</h1>
    <p>Click to match</p>
    <h3>Time: {time}s</h3>
    <h3>Attempt: {attemptCount}</h3>
    <button className="learn-again-button" onClick={learnAgain}>Learn again</button>
    </div>

    </div>
  )
}

export default Game;