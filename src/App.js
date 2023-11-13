import React from 'react';
import './App.css';
import DataProvider from './components/DataContext';
import Learn from './components/pages/learn/Learn';
import Game from './components/pages/game/Game';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
  <DataProvider>
  <BrowserRouter>
  <Routes>
  <Route path="/"  element={<Learn/>}/>
  <Route path="/game" element={<Game/>}/>
 </Routes>
 </BrowserRouter>
 </DataProvider>


 
  );
}

export default App;
