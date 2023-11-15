import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./components/DataContext";
import GameContextProvider from "./components/pages/game/GameContext";
import Learn from "./components/pages/learn/Learn";
import Game from "./components/pages/game/Game";
import Result from "./components/pages/result/Result";

function App() {
  return (
    <DataProvider>
      <GameContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Learn />} />
            <Route path="/game" element={<Game />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </GameContextProvider>
    </DataProvider>
  );
}

export default App;
