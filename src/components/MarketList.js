import React from "react";

import { BetML, BetTotal, BetRL } from "./Bet";

import "../css/marketList.css";

const MarketList = props => {
    const { betType, selectedTotal } = props;
    const books = betType.books[0];
    const outcomes = books.outcomes;
    const { eHandler } = props;

    return (
        <>
            {betType.name === "2way" && books.id === "sr:book:6" ? (
                <>
                    {Object.values(outcomes).map((mlBet, id) => (
                        <div
                            className={`ml-${id}`}
                            key={`ml-${mlBet}-${id}`}
                            onClick={() => eHandler(mlBet)}
                        >
                            {Object.entries(mlBet).map(([key, value]) => (
                                <BetML
                                    moneyL={[key, value]}
                                    key={`${key}-${value}`}
                                    wageSelected={selectedTotal}
                                />
                            ))}
                        </div>
                    ))}
                </>
            ) : betType.name === "total" && books.id === "sr:book:6" ? (
                <>
                    {Object.values(outcomes).map((total, id) => (
                        <div
                            key={`${total}-${id}`}
                            className={`total-${id}`}
                            onClick={() => eHandler(total)}
                        >
                            {Object.entries(total).map(([key, value]) => (
                                <div key={`${key}-${value}-${id}`}>
                                    <BetTotal
                                        totals={[key, value]}
                                        wageSelected={selectedTotal}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </>
            ) : betType.name === "run_line" && books.id === "sr:book:6" ? (
                <>
                    {Object.values(outcomes).map((rlBet, id) => (
                        <div
                            key={id}
                            className={`rl-${id}`}
                            onClick={() => eHandler(rlBet)}
                        >
                            {Object.entries(rlBet).map(([key, value]) => (
                                <div key={`${key}-${value}`} className="">
                                    <BetRL
                                        runL={[key, value]}
                                        wageSelected={selectedTotal}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </>
            ) : null}
        </>
    );
};
export default MarketList;
