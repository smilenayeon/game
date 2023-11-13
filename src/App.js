import React from 'react';
import './App.css';
import DataProvider from './components/DataContext';
import Learn from './components/pages/Learn';

function App() {
  return (
  <DataProvider>
 <Learn/>
 </DataProvider>
  );
}

export default App;
