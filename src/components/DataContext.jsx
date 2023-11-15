import React, { createContext } from "react";
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

const DataProvider = ({ children }) => {
  class Data {
    key = "";
    word = "";
    image = "";
    sentence = "";
    constructor(key, word, image, sentence) {
      this.key = key;
      this.word = word;
      this.image = image;
      this.sentence = sentence;
    }
  }

  const dataItems = [
    new Data(
      "1",
      "Christmas",
      Christmas,
      "I celebrate _________ with my family."
    ),
    new Data("2", "dance", Dance, "She can _____ to the music."),
    new Data("3", "donuts", Donuts, "We each had two ______ for dessert."),
    new Data("4","friends",Friends,"These _______ took a joyful group selfie."),
    new Data("5", "happy", Happy, "She feels _____."),
    new Data("6", "puppy", Puppy, "A baby dog is called a _____."),
    new Data("7", "snowman", Snowman, "We build a _______ on a snowy day."),
    new Data("8","teddy bear",TeddyBear,"His favorite toy is the brown __________.")
  ];

  const contextValue = { dataItems };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
