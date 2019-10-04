import { useLocalStorage } from './useLocalStorage';

export const usePlayerData = (initialValue) => {
    const [playerData, setPlayerData] = useLocalStorage('playerData', initialValue);

    return [playerData, setPlayerData];
}