import React,{useContext, useEffect,useState}  from 'react';
import { DataContext } from '../../DataContext';
import { useNavigate } from 'react-router-dom';
import GameCard from './GameCard';
import {GameContext} from './GameContext';
import "./Game.css";


function Game() {
    const navigate=useNavigate();
    const {dataItems}=useContext(DataContext);
    const {attemptCount,handleCardClick, matchedCards,isFlipped}=useContext(GameContext);
    const wordDeck= dataItems.map((dataItem)=>({...dataItem, type:"word"}));
    const sentenceDeck=dataItems.map((dataItem)=>({...dataItem, type:"sentence"}));
    const gameCards= wordDeck.concat(sentenceDeck);
    const [time,setTime]=useState(0);
    
    const onCardClick = (cardKey,matchKey) => handleCardClick(cardKey,matchKey);
    
    const startTime = () => {
      return setInterval(() => {
          setTime(prevTime => prevTime + 1);
      }, 1000);
  };

    useEffect(() => {
      const interval = startTime(); 
  
      return () => {
          clearInterval(interval); 
      };
  }, []);


    matchedCards.length=== 16 && navigate("/result");



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
    <button className="learn-again-button" onClick={()=>{navigate("/")}}>Learn again</button>
    </div>

    </div>
  )
}

export default Game;