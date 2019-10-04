import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/PlayerCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worldCupData: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          worldCupData: res.data
        });
      })
      .catch(err => {
        alert(err.message);
      })
  }

  render() {

    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        {
          this.state.worldCupData.map(player => <PlayerCard player={player} />)
        }
      </div>
    )
  }
}

export default App;
