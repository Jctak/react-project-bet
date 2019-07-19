import React from "react";

import MarketList from "./MarketList";

const OddsListItem = props => {
    const { gameData, totalSelected } = props;
    const {eventHandler} = props; 
    const markets = gameData.markets;
    return (
        <>
            {gameData.season.id === "sr:season:61503" ? (
                <div className="odds-container">
                    <div className="awayTeamName-div">
                        {gameData.competitors[1].name}
                    </div>
                    <div className="homeTeamName-div">
                        {gameData.competitors[0].name}
                    </div>
                    {markets.map((bType, i) => {
                        return (
                            <MarketList betType={bType} key={`market-${i}`} eHandler={eventHandler}/>
                        );
                    })}
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default OddsListItem;
