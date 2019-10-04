import { useState } from 'react';

export const usePlayerData = () => {
    const [playerData, setPlayerData] = useState([]);

    return [playerData, setPlayerData];
}