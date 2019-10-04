import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/PlayerCard';

import { usePlayerData } from './hooks/usePlayerData';

const App = () => {
  const [playerData, setPlayerData] = usePlayerData();

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        setPlayerData(res.data);
      })
      .catch(err => {
        alert(err.message);
      })
  });

  return (
    <div className="App">
      <h1>Women's World Cup</h1>
      {
        playerData.map(player => <PlayerCard player={player} />)
      }
    </div>
  );
}

export default App;
