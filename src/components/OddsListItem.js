import React from "react";

const OddsListItem = props => {
    const { gameData } = props;
    console.log("list items page", gameData);
    return (
        <>
            <div className="odds-container">
                <div className="gametime-div" />
                <div className="teams-div">
                    <div className="awayTeam-div">
                        <div className="awayTeamName-div">
                            {gameData.away.market} {gameData.away.name}
                        </div>
                        <div className="awayTeamPitcher-div">
                            {/* {console.log(gameData.away.probable_pitcher.first_name)} */}
                            {/* {gameData.away.probable_pitcher.preferred_name}{" "} */}
                            {/* {gameData.away.probable_pitcher.last_name} */}
                        </div>
                    </div>
                    <div className="homeTeam-div">
                        <div className="homeTeamName-div">
                            {gameData.home.market} {gameData.home.name}
                        </div>
                        <div className="homeTeamPitcher-div">
                            {/* {gameData.home.probable_pitcher.preferred_name}{" "} */}
                            {/* {gameData.home.probable_pitcher.last_name} */}
                        </div>
                    </div>
                </div>
                <div className="allBets-div">
                    <div className="rLine-a-div">1</div>
                    <div className="rLine-h-div">2</div>
                    <div className="mLine-a-div">3</div>
                    <div className="mLine-h-div">4</div>
                    <div className="total-o-div">5</div>
                    <div className="total-u-div">6</div>
                </div>
            </div>
        </>
    );
};

export default OddsListItem;
