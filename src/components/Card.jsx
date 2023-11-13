import React from 'react'

function Card({word,image,sentence,index}) {
  return (
    <div key={index}>
      <img src={image} alt={word}/>
      <h1>{word}</h1>
      <h2>{sentence}</h2>

    </div>
  )
}

export default Card