import React from "react";

import "../css/oddsListItem2.css";

const MarketList = props => {
    const { markets } = props;
    return (
        <div>
            <div className="allBets-div">
                <div className="rLine-a-div">
                    {markets[2].books[0].outcomes[1].spread}{" "}
                    {markets[2].books[0].outcomes[1].odds}
                </div>
                <div className="rLine-h-div">
                    {markets[2].books[0].outcomes[0].spread}{" "}
                    {markets[2].books[0].outcomes[0].odds}
                </div>
                <div className="mLine-a-div">
                    {markets[0].books[0].outcomes[1].odds}
                </div>
                <div className="mLine-h-div">
                    {markets[0].books[0].outcomes[0].odds}
                </div>
                <div className="total-o-div">
                    {markets[1].books[0].outcomes[0].total}{" "}
                    {markets[1].books[0].outcomes[0].odds}
                </div>
                <div className="total-u-div">
                    {markets[1].books[0].outcomes[1].total}{" "}
                    {markets[1].books[0].outcomes[1].odds}
                </div>
            </div>
            {/* {console.log(
                markets[2].books[0].outcomes[1].spread,
                markets[2].books[0].outcomes[1].odds,
                markets[2].books[0].outcomes[0].spread,
                markets[2].books[0].outcomes[0].odds,
                markets[0].books[0].outcomes[1].odds,
                markets[0].books[0].outcomes[0],
                markets[1].books[0].outcomes[0],
                markets[1].books[0].outcomes[1]
            )} */}
        </div>
    );
};

export default MarketList;
