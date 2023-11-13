import React from 'react'
import "./Card.css";

function Card({word,image,sentence,index}) {
  return (
    <div className="card" key={index}>

      <div className="card-image"><img src={image} alt={word}/></div>
      <div className="card-text">
      <h1 className="card-word">{word}</h1>
      <h2 className="card-sentence">{sentence}</h2>
      </div>

    </div>
  )
}

export default Card
//style the Card and Learn.  Then set in Learn using css so the answer fill in the blank.