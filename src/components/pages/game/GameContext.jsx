import React,{createContext, useState,useEffect} from "react";

export const GameContext= createContext();


 const  GameContextProvider= ({children})=>{


    const [time, setTime] = useState(0);
    const [attemptCount, setAttemptCount]=useState(0);
    const [flippedCards,setFlippedCards]=useState([]);
    const [isMatched,setIsMatched]=useState(false);
    const [isFlipped, setIsFlipped]=useState(false);
    const [matchedCards, setMatchedCards]=useState([]);

    const handleCardClick = (gameCard)=>{
        if (flippedCards.length<2){
            setIsFlipped(true);
            const newFlippedCards = [...flippedCards, gameCard];
            setFlippedCards(newFlippedCards);
        }}

        useEffect(() => {
            if (flippedCards.length === 2) {
                setAttemptCount(prevCount => prevCount + 1);
                matchCheck(flippedCards[0], flippedCards[1]);
            }
        }, [flippedCards]);

    const matchCheck = (card1,card2)=>{
        if (card1.matchKey===card2.matchKey){
         setIsMatched(true);
         const newMatchedCards = [card1,card2];
        setMatchedCards([...matchedCards,...newMatchedCards]);}
         else {// Delay resetting the cards to allow the player to see them
            setTimeout(() => {
                setFlippedCards([]);
                setIsFlipped(false);
            }, 1000); }
         }

         const startTime = () => {
            return setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        };
       

    const contextValue = {
        time,
        setTime,
        attemptCount,
        setAttemptCount,
        flippedCards,
        setFlippedCards,
        handleCardClick,
        startTime,
        isMatched,
        setIsMatched,
        isFlipped,
        setIsFlipped,
        matchedCards,
        setMatchedCards,
    };

    return(
    <GameContext.Provider value={contextValue}>
        {children}
    </GameContext.Provider>
);}



export default GameContextProvider;