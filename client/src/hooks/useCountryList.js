import { useLocalStorage } from './useLocalStorage';

export const useCountryList = (playerData) => {
    const [countryList, setList] = useLocalStorage('countryList', []);

    const setCountryList = (playerData) => {
        const countries = playerData.map(player => player.country);
        const uniqueCountries = countries.filter((country, index, arr) => arr.indexOf(country) === index);
        const sortedUniqueCountries = uniqueCountries.sort();
        setList(sortedUniqueCountries);
    }

    return [countryList, setCountryList];
}