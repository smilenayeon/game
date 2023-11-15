import React,{useRef, useEffect}  from 'react'
import "./Card.css";
import ChristmasAudio from "../../../assets/audio/Christmas.mp3";
import DanceAudio from "../../../assets/audio/dance.mp3";
import DonutsAudio from "../../../assets/audio/donuts.mp3";
import FriendsAudio from "../../../assets/audio/friends.mp3";
import HappyAudio from "../../../assets/audio/happy.mp3";
import PuppyAudio from "../../../assets/audio/puppy.mp3";
import SnowmanAudio from "../../../assets/audio/snowman.mp3";
import TeddybearAudio from "../../../assets/audio/teddybear.mp3";

function Card({word,image,sentence,index}) {

    const audioMap = {
       Christmas: ChristmasAudio,
       dance: DanceAudio,
       donuts: DonutsAudio,
       friends: FriendsAudio,
       happy: HappyAudio,
       puppy: PuppyAudio,
       snowman: SnowmanAudio,
       "teddy bear": TeddybearAudio,
     };
   const audioRef = useRef();
   
     useEffect(() => {
       if (audioMap[word]) {
         audioRef.current = new Audio(audioMap[word]);
       }
     }, [word]);
     const playAudio = () => {
       audioRef.current.play();
   
    }

  return (
    <div className="card" key={index}>
        <img className="card-image"src={image} alt={word}/>
      <div className="card-text">
        <h1 className="card-word">{word} <button className= "audio-button" onClick={playAudio}><i className="fa-solid fa-volume-high"></i></button></h1>
        <h2 className="card-sentence">{sentence}</h2>

      </div>

    </div>
  )
}

export default Card;
