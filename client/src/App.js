import React from 'react';
import './App.css';
import WomensWorldCup from './components/WomensWorldCup';
import { usePlayerData } from './hooks/usePlayerData';
import { useCountryList } from './hooks/useCountryList';

function App() {
  const [playerData, setPlayerData] = usePlayerData([]);
  const [countryList, setCountryList] = useCountryList([]);

  return <WomensWorldCup 
    playerData={playerData} 
    setPlayerData={setPlayerData}
    countryList={countryList}
    setCountryList={setCountryList} />
}

export default App;
