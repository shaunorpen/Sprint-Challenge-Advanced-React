import React from 'react';
import PlayerCard from './PlayerCard';

export default class CountryCard extends React.Component {
    render() {
        return (
            <div className='country-card'>
                <h2>{this.props.country}</h2>
                <ul>
                    {this.props.players.sort((a, b) => {
                        const nameA = a.name.toUpperCase();
                        const nameB = b.name.toUpperCase();
                        if (nameA < nameB) {
                          return -1;
                        }
                        if (nameA > nameB) {
                          return 1;
                        }
                        return 0;
                    }).map(player => <PlayerCard player={player} key={player.id} />)}
                </ul>
            </div>
        );
    }
}