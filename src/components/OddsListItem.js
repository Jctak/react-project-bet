import React from "react";

import MarketList from "./MarketList";

import "../css/oddsListItem.css";

const OddsListItem = props => {
    const { gameData, totalSelected } = props;
    const { eventHandler } = props;
    const markets = gameData.markets;
    return (
        <>
            {gameData.season.id === "sr:season:61503" ? (
                <div className="odds-container">
                    <div className="teamNames">
                        <div className="awayTeamName">
                            {gameData.competitors[1].name}
                        </div>
                        <div className="homeTeamName">
                            {gameData.competitors[0].name}
                        </div>
                    </div>
                    <div className="betTypes">
                        {markets.map((bType, i) => {
                            return (
                                <MarketList
                                    betType={bType}
                                    key={`market-${i}`}
                                    eHandler={eventHandler}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default OddsListItem;
