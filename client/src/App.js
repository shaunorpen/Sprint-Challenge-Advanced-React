import React from 'react';
import axios from 'axios';
import './App.css';

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
          this.state.worldCupData.map(player => {
            return (
              <div>
                <p>Name: {player.name}</p>
                <p>Country: {player.country}</p>
                <p>Search Count: {player.searches}</p>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default App;
