import React,{useContext} from 'react';
import {GameContext} from '../game/GameContext';
import { useNavigate } from 'react-router-dom';

function Result() {
    const navigate=useNavigate();
    const {time,attemptCount,setAttemptCount,setTime,setIsFlipped,setMatchedCards} = useContext(GameContext);
    
  
    const learnAgain=()=>{
        navigate("/");
        setAttemptCount(0);
        setTime(0);
        setIsFlipped(false);
        setMatchedCards([]);
      }
      const playGame=()=>{
        navigate("/game");
        setAttemptCount(0);
        setTime(0);
        setIsFlipped(false);
        setMatchedCards([]);
      }

  return (
    <div>
    Result
    <h2>Time: {time}s</h2>
    <h2>Attempt: {attemptCount}</h2>
    <button onClick={playGame}>Play Game</button>
    <button onClick={learnAgain}>Learn Again</button>

    </div>
  )
}

export default Result