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
        this.state.worldCupData = res.data;
      })
      .catch(err => {
        alert(err.message);
      })
    }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
      </div>
    )
  }
}

export default App;
