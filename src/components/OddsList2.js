import React, { Component } from "react";

import OddsListItem2 from "./OddsListItem2";

class OddsList2 extends Component {
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
        const url = "http://localhost:3000/v1/odds";
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    extractData(gameData) {
        const gamesArray = gameData.sport_events;
        console.log(gamesArray);
        return gamesArray;
    }

    render() {
        return (
            <>
                <div>
                    {this.state.gamesArray.map(game => {
                        return <OddsListItem2 gameData={game} />;
                    })}
                </div>
            </>
        );
    }
}

export default OddsList2;
