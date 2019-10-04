import React from 'react';

export default class PlayerCard extends React.Component {
    render() {
        debugger
        return (
            <div>
                <p>Name: {this.props.player.name}</p>
                <p>Country: {this.props.player.country}</p>
                <p>Search Count: {this.props.player.searches}</p>
            </div>
        )
    }
}