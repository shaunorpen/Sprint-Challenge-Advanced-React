import React from 'react';
import './App.css';
import WomensWorldCup from './components/WomensWorldCup';
import { usePlayerData } from './hooks/usePlayerData';

function App() {
  const [playerData, setPlayerData] = usePlayerData([]);

  return <WomensWorldCup playerData={playerData} setPlayerData={setPlayerData} />
}

export default App;
