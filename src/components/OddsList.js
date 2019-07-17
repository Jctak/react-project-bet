import React, { Component } from "react";

import OddsListItem from "./OddsListItem";

class OddsList extends Component {
    state = {
        gamesArray: []
    };

    async componentDidMount() {
        const gameData = await this.loadData();
        const gamesArray = this.extractData(gameData);
        this.setState({
            gamesArray
        });
    }

    loadData = async () => {
        const url = "http://localhost:3000/v1/games";
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    extractData(gameData) {
        const gamesArray = gameData.league.games;
        return gamesArray;
    }

    render() {
        return (
            <>
                <div>
                    {this.state.gamesArray.map(game => {
                        return <OddsListItem gameData={game.game} />;
                    })}
                </div>
            </>
        );
    }
}

export default OddsList;
