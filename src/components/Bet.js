import React from "react";

const convertOdds = odds => {
    if (odds >= 2.0) {
        return "+" + Math.trunc((odds - 1) * 100);
    } else if (odds < 2.0) {
        return Math.trunc(-100 / (odds - 1));
    }
};

export const BetML = props => {
    const { moneyL, wageSelected } = props;

    return (
        <>
            {moneyL[0] === "odds" ? (
                <div className="div-money-line">{convertOdds(moneyL[1])}</div>
            ) : (
                <></>
            )}
        </>
    );
};

export const BetTotal = props => {
    const { totals, wageSelected } = props;

    return (
        <>
            {totals[0] === "total" ? (
                <div className="div-total-line">{totals[1]}</div>
            ) : totals[0] === "odds" ? (
                <div>({convertOdds(totals[1])})</div>
            ) : (
                <></>
            )}
        </>
    );
};

export const BetRL = props => {
    const { runL, wageSelected } = props;
    return (
        <>
            {runL[0] === "odds" ? (
                <div className="div-odds-line">({convertOdds(runL[1])})</div>
            ) : runL[0] === "spread" ? (
                <div className="div-odds-line">{runL[1]}</div>
            ) : (
                <></>
            )}
        </>
    );
};
