import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { playerData } from './data/data';

import CountryCard from './components/CountryCard';

const App = () => {
  
  const countries = [];

  playerData.map(player => {
    if (!countries.includes(player.country)) {
      countries.push(player.country)
    };
  });

  return (
    <>
      <h1>Women's World Cup</h1>
      <div className="App">
        { countries.sort().map(
            country => <CountryCard 
              country={country} 
              key={country}
              players={playerData.filter(player => player.country === country)} 
            />) 
        }
      </div>
    </>
  );
}

export default App;
