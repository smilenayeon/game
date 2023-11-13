import React, { createContext, useState } from "react";
import Christmas from "../assets/images/Christmas.jpg";
import Dance from "../assets/images/dance.jpg";
import Donuts from "../assets/images/donuts.jpg";
import Friends from "../assets/images/friends.jpg";
import Happy from "../assets/images/happy.jpg";
import Puppy from "../assets/images/puppy.jpg";
import Snowman from "../assets/images/snowman.jpg";
import TeddyBear from "../assets/images/teddybear.jpg";

//data for word set
 

  export const DataContext = createContext(null);

 const DataProvider = ({children})=>{
     class Data {
    word = "";
    image = "";
    sentence = "";
    constructor(word, image, sentence) {
      this.word = word;
      this.image = image;
      this.sentence = sentence;
    }
  }

  const dataItems = [
    new Data("Christmas", Christmas, "I celebrate _________ with my family."),
    new Data("dance", Dance, "She can _____ to the music."),
    new Data("donuts", Donuts, "We each had two ______ for dessert."),
    new Data("friends", Friends, "These _______ took a joyful group selfie."),
    new Data("happy", Happy, "She feels _____."),
    new Data("puppy", Puppy, "A baby dog is called a _____."),
    new Data("snowman", Snowman, "We build a _______ on a snowy day."),
    new Data("teddy bear",TeddyBear,"His favorite toy is the brown __________.")
  ];
  const [time, setTime] = useState(0);
  const [attemptCount, setAttemptCount]=useState(0);

  const contextValue = { dataItems, time, attemptCount, setTime, setAttemptCount };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};


export default DataProvider;

