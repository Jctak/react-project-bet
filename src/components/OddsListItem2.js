import React from "react";

import MarketList from "./MarketList";

import "../css/oddsListItem2.css";

const OddsListItem2 = props => {
    const { gameData } = props;
    return (
        <>
            <div className="odds-container">
                <div className="gametime-div" />
                <div className="teams-div">
                    <div className="awayTeam-div">
                        <div className="awayTeamName-div">
                            {gameData.competitors[1].name}
                        </div>
                        <div className="awayTeamPitcher-div">
                            {/* {console.log(gameData.away.probable_pitcher.first_name)} */}
                            {/* {gameData.away.probable_pitcher.preferred_name}{" "} */}
                            {/* {gameData.away.probable_pitcher.last_name} */}
                        </div>
                    </div>
                    <div className="homeTeam-div">
                        <div className="homeTeamName-div">
                            {gameData.competitors[0].name}
                        </div>
                        <div className="homeTeamPitcher-div">
                            {/* {gameData.home.probable_pitcher.preferred_name}{" "} */}
                            {/* {gameData.home.probable_pitcher.last_name} */}
                        </div>
                    </div>
                </div>
                <MarketList markets={gameData.markets} />
            </div>
        </>
    );
};

export default OddsListItem2;
