import React,{useContext} from 'react';
import {GameContext} from '../game/GameContext';
import { useNavigate } from 'react-router-dom';
import "./Result.css";
import Trophy from "../../../assets/images/trophy.png";

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
    <div className="result-page">
    <div className="result-text">
    <h1 className="result-title">Result</h1>
    <h2 className="result-time">Time: {time}s</h2>
    <h2 className="result-attempt">Attempt: {attemptCount}</h2>
    <button className="play-again" onClick={playGame}>Play Again</button>
    <button className="learn-again" onClick={learnAgain}>Learn Again</button>
    </div>
    <img src={Trophy} alt="trophy"/>

    </div>
  )
}

export default Result