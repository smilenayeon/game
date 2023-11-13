import React, {useContext} from 'react';
import { DataContext } from '../DataContext';
import Card from '../Card';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

function Learn() {
    const navigate=useNavigate();
    const{dataItems}= useContext(DataContext);
    const settings = {
        dots: true,  // Shows dot indicators
        infinite: true,
        speed: 500,
        slidesToShow: 1,  // Number of slides to show at once
        slidesToScroll: 1
      };
      
  return (
    <div className="learn-page">
    <h1>Let's learn!</h1>
    <div>
    <Slider >
    {dataItems.map(
        ({word,image,sentence},index) =>
            (<Card key={index} word={word} image={image} sentence={sentence}/>)
            )}
            <div>
            <h1>Now you are ready to play the game!</h1>
            <button onClick={()=> navigate("/game")}>Start Game!</button>
          
            </div>
            
        </Slider>
    </div>
    </div>
  )
}

export default Learn