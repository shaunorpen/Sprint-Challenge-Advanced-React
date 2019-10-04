import React from 'react';
import axios from 'axios';
import './App.css';
import CountryCard from './components/CountryCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerData: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          playerData: res.data,
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  countryList = (playerData) => {
    const countries = [];
    playerData.map(player => {
      if (!countries.includes(player.country)) {
        countries.push(player.country)
      };
    });
    return countries.sort();
  }

  render() {
    return (
      <>
        <h1>Women's World Cup</h1>
        <div className="App">
          { this.countryList(this.state.playerData).map(country => 
              <CountryCard 
                country={country} 
                key={country}
                players={this.state.playerData.filter(player => player.country === country)} 
              />
            ) 
          }
        </div>
      </>
    );
  }
}

export default App;
