// import React, { Component } from "react";

// import OddsList from "./OddsList";

// class BetsPage extends Component {
//     render() {
//         return (
//             <>
//                 <h2>All MLB Games</h2>
//                 <OddsList />
//             </>
//         );
//     }
// }

// export default BetsPage;


// import React, { Component } from "react";

// import OddsListItem from "./OddsListItem";

// class OddsList extends Component {
//     state = {
//         gamesArray: []
//     };

//     async componentDidMount() {
//         const gameData = await this.loadData();
//         const gamesArray = this.extractData(gameData);
//         this.setState({
//             gamesArray
//         });
//     }

//     loadData = async () => {
//         const url = "http://localhost:3000/v1/odds";
//         const response = await fetch(url);
//         const data = response.json();
//         return data;
//     };

//     extractData = gameData => {
//         const gamesArray = gameData.sport_events;
//         console.log(gamesArray);
//         return gamesArray;
//     };

//     render() {
//         const { gamesArray } = this.state;
//         return (
//             <>
//                 {gamesArray.map(game => {
//                     return <OddsListItem gameData={game} key={game.id} />;
//                 })}
//             </>
//         );
//     }
// }

// export default OddsList;

// import React from "react";

// import MarketList from "./MarketList";

// const OddsListItem = props => {
//     const { gameData } = props;
//     // const competitors = gameData.competitors;
//     const markets = gameData.markets;
//     return (
//         <>
//             {gameData.season.id === "sr:season:61503" ? (
//                 <div className="odds-container">
//                     <div className="awayTeamName-div">
//                         {gameData.competitors[1].name}
//                     </div>
//                     <div className="homeTeamName-div">
//                         {gameData.competitors[0].name}
//                     </div>
//                     {markets.map((bType, i) => {
//                         return (
//                             <MarketList betType={bType} key={`market-${i}`} />
//                         );
//                     })}
//                 </div>
//             ) : (
//                 <></>
//             )}
//         </>
//     );
// };

// export default OddsListItem;

// import React from "react";

// import {BetML, BetTotal, BetRL} from "./Bet";

// import "../css/marketList.css";

// const MarketList = props => {
//     const { betType } = props;
//     const books = betType.books[0];
//     const outcomes = books.outcomes;

//     return (
//         <div className="allBets-div">
//             {betType.name === "2way" && books.id === "sr:book:6" ? (
//             <div className="ml-div">
//                 {Object.values(outcomes).map((mlBet, id) => 
//                     <div key={id} className="">
//                         {Object.entries(mlBet).map(([key, value]) => 
//                             <div key={`${key}-${value}`} className="">
//                                 <BetML moneyL={[key, value]} />
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//             ) : betType.name === "total" && books.id === "sr:book:6" ? (
//                 <div className="totalOU-div">
//                     {Object.values(outcomes).map((total, id) => 
//                     <div key={id} className="">
//                         {Object.entries(total).map(([key, value]) => 
//                             <div key={`${key}-${value}`} className="">
//                                 <BetTotal totals={[key, value]} />
//                             </div>
//                         )}
//                     </div>
//                 )}
//                 </div>
//             ) : betType.name === "run_line" && books.id === "sr:book:6" ? (
//                 <div className="rl-div">
//                     {Object.values(outcomes).map((rlBet, id) => 
//                     <div key={id} className="">
//                         {Object.entries(rlBet).map(([key, value]) => 
//                             <div key={`${key}-${value}`} className="">
//                                 {console.log()}
//                                 <BetRL runL={[key, value]} />
//                             </div>
//                         )}
//                     </div>
//                 )}
//                 </div>
//             ) : (
//                 <>
//                 </>
//             )}
//         </div>
//     );
// };
// export default MarketList;


// import React from "react";

// export const BetML = props => {
//     const {moneyL} = props;

//     return (
//         <div>
//             {moneyL[0] === "odds" ? (
//             <div>{moneyL[1]}</div>
//             ):(
//                 <></>
//             )}
//         </div>
//     );
// };

// export const BetTotal = props => {
//     const {totals} = props;

//     return (
//         <div>
//             {totals[0] === "total" || totals[0] === "odds" ? (
//             <div className="">
//                 {totals[1]}
//             </div>
//             ):(
//                 <></>
//             )}
//         </div>
//     );
// };

// export const BetRL = props => {
//     const {runL} = props;

//     return (
//         <div className="">
//             {runL[0] === "odds" || runL[0] ==="spread" ? (
//             <div className="">{runL[1]}</div>
//             ):(
//                 <></>
//             )}
//         </div>
//     );
// };


// import React from "react";



// export const BetML = props => {
//     const {moneyL, wageSelected} = props;

//     return (
//         <div>
//             {moneyL[0] === "odds" ? (
//             <div onClick={() => getBetsClicked()}>{moneyL[1]}{console.log("moooooney",moneyL[1])}</div>
//             ):(
//                 <></>
//             )}
//         </div>
//     );
// };

// export const BetTotal = props => {
//     const {totals, wageSelected} = props;

//     return (
//         <div>
//             {totals[0] === "total" || totals[0] === "odds" ? (
//             <div className="" onClick={() => getBetsClicked()}>
//                 {totals[1]}
//             </div>
//             ):(
//                 <></>
//             )}
//         </div>
//     );
// };

// export const BetRL = props => {
//     const {runL, wageSelected} = props;

//     return (
//         <div className="">
//             {runL[0] === "odds" || runL[0] ==="spread" ? (
//             <div className="" onClick={() => getBetsClicked()}>{runL[1]}</div>
//             ):(
//                 <></>
//             )}
//         </div>
//     );
// };

