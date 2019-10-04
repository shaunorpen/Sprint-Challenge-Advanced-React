import React from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

class WomensWorldCup extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.props.setCountryList(res.data);
        this.props.setPlayerData(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <h1>Women's World Cup</h1>
        <div className="App">
          { this.props.countryList.map(country => 
              <CountryCard 
                country={country} 
                key={country}
                players={this.props.playerData.filter(player => player.country === country)} 
              />
            ) 
          }
        </div>
      </>
    );
  }
}

export default WomensWorldCup;
