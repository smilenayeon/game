import React,{createContext, useState,useEffect} from "react";

export const GameContext= createContext();


 const  GameContextProvider= ({children})=>{


    const [attemptCount, setAttemptCount]=useState(0);
    const [flippedCards,setFlippedCards]=useState([]);
    const [isMatched,setIsMatched]=useState(false);
    const [isFlipped, setIsFlipped]=useState(false);
    const [matchedCards, setMatchedCards]=useState([]);

    const handleCardClick = (cardKey, matchKey) => {
        if (flippedCards.length < 2) {
            setIsFlipped(prevFlipped => ({...prevFlipped, [cardKey]: true}));
            const newFlippedCard = { cardKey, matchKey };
            setFlippedCards(prevFlippedCards => [...prevFlippedCards, newFlippedCard]);
        }
    };
    
    useEffect(() => {
        if (flippedCards.length === 2) {
            setAttemptCount(prevCount => prevCount + 1);
            matchCheck(flippedCards[0], flippedCards[1]);
        }
    }, [flippedCards]);
    
    const matchCheck = (flippedCard1, flippedCard2) => {
        if (flippedCard1.matchKey === flippedCard2.matchKey) {
            setIsMatched(true);
            const newMatchedCards = [flippedCard1.cardKey, flippedCard2.cardKey];
            setMatchedCards(prevMatchedCards => [...prevMatchedCards, ...newMatchedCards]);
        } else {
            setTimeout(() => {
                setIsFlipped(prevFlipped => ({
                    ...prevFlipped,
                    [flippedCard1.cardKey]: false,
                    [flippedCard2.cardKey]: false
                }));
            }, 800);
        }
        setFlippedCards([]);
    };
    const contextValue = {
        attemptCount,
        setAttemptCount,
        flippedCards,
        setFlippedCards,
        handleCardClick,
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