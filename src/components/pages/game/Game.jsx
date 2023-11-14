import React,{useContext, useEffect}  from 'react';
import { DataContext } from '../../DataContext';
import { useNavigate } from 'react-router-dom';
import GameCard from './GameCard';
import {GameContext} from './GameContext';


function Game() {
    const navigate=useNavigate();
    const {dataItems}=useContext(DataContext);
    const {time,startTime,attemptCount,handleCardClick, matchedCards,isFlipped}=useContext(GameContext);
    const wordDeck= dataItems.map((dataItem)=>({...dataItem, type:"word"}));
    const sentenceDeck=dataItems.map((dataItem)=>({...dataItem, type:"sentence"}));
    const gameCards= wordDeck.concat(sentenceDeck);
   

    const onCardClick = (gameCard) => handleCardClick(gameCard);
    
    useEffect(()=>{startTime();
    return()=>{setTimeout(0)}},[]);


    matchedCards.length=== 16 && navigate("/result");



  return (
    <div>
    <h1>Matching Game</h1>
    <p>Click to filp the cards. Find the correct pairs.</p>
    <h3>{time}</h3>
    <h3>{attemptCount}</h3>
    <button onClick={()=>{navigate("/")}}>Learn again</button>

    <div className="card-stage">
      {gameCards.map((gameCard, index)=> (<GameCard cardKey={index} matchKey={gameCard.key} content={gameCard.type==="word"?gameCard.word : gameCard.sentence} onCardClick={() => onCardClick(gameCard)} isFlipped={isFlipped}/>))}
    </div>

    </div>
  )
}

export default Game;