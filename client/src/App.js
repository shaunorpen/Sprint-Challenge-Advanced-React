import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { playerData } from './data/data';

import CountryCard from './components/CountryCard';

const countryList = (playerData) => {
  const countries = [];
  playerData.map(player => {
    if (!countries.includes(player.country)) {
      countries.push(player.country)
    };
  });
  return countries.sort();
}

const App = () => {
  return (
    <>
      <h1>Women's World Cup</h1>
      <div className="App">
        { countryList(playerData).map(country => 
            <CountryCard 
              country={country} 
              key={country}
              players={playerData.filter(player => player.country === country)} 
            />
          ) 
        }
      </div>
    </>
  );
}

export default App;
