import React, { Component } from "react";
import "../css/oddsList.css";

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
        const url = "http://localhost:3000/v1/odds";
        const response = await fetch(url);
        const data = response.json();
        return data;
    };

    extractData = gameData => {
        const gamesArray = gameData.sport_events;
        return gamesArray;
    };

    render() {
        const { gamesArray, totalPicked } = this.state;
        const { clickHandler } = this.props;

        return (
            <>
                {gamesArray.map(game => {
                    return (
                        <OddsListItem
                            gameData={game}
                            key={game.id}
                            eventHandler={clickHandler}
                        />
                    );
                })}
            </>
        );
    }
}

export default OddsList;
