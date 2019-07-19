import React from "react";


export const BetML = props => {
    const {moneyL, wageSelected} = props;

    return (
        <>
            {moneyL[0] === "odds" ? (
            <div>{moneyL[1]}</div>
            ):(
                <></>
            )}
        </>
    );
};

export const BetTotal = props => {
    const {totals, wageSelected} = props;

    return (
        <>
            {totals[0] === "total" || totals[0] === "odds" ? (
            <div>
                {totals[1]}
            </div>
            ):(
                <></>
            )}
        </>
    );
};

export const BetRL = props => {
    const {runL, wageSelected} = props;

    return (
        <>
            {runL[0] === "odds" || runL[0] ==="spread" ? (
            <div>{runL[1]}</div>
            ):(
                <></>
            )}
        </>
    );
};

