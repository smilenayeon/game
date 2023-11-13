import React from 'react';
import { useNavigate } from 'react-router-dom';

function Game() {
    const navigate=useNavigate();
  return (
    <div>
    <h1>Game</h1>
    <button onClick={()=>{navigate("/")}}>Learn again</button>
    </div>
  )
}

export default Game