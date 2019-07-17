import React from "react";

import "../css/OddsListItem2";

const OddsListItem2 = props => {
    const { gameData } = props;
    console.log("list item 2's page", gameData);
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
                <div className="allBets-div">
                    <div className="rLine-a-div" />
                    <div className="rLine-h-div" />
                    <div className="mLine-a-div" />
                    <div className="mLine-h-div" />
                    <div className="total-o-div" />
                    <div className="total-u-div" />
                </div>
            </div>
        </>
    );
};

export default OddsListItem2;
