import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import Card from "../../Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./Learn.css";

function Learn() {
  const navigate = useNavigate();
  const { dataItems } = useContext(DataContext);

  return (
    <div className="learn-page">
      <h1 className="learn-page-title"> Let's learn!</h1>
      <p className="learn-instruction">
        Click the arrows <i className="fa-solid fa-circle-chevron-left" />,{" "}
        <i className="fa-solid fa-circle-chevron-right" /> or swipe <i className="fa-solid fa-arrow-left" />{" "}
        <i className="fa-solid fa-hand-point-up" />{" "}
        <i className="fa-solid fa-arrow-right" />
      </p>
      <div className="card-spot">
      <Slider>
          {dataItems.map(({ word, image, sentence }, index) =>
            <Card key={index} word={word} image={image} sentence={sentence} />
          )}
        
          <div className="slide-to-game">
          <h1>Now you are ready to play the game!</h1>
            <button onClick={() => navigate("/game")}>Start Game!</button>
          </div>
        </Slider>
       
      </div>
    </div>
  );
}

export default Learn;