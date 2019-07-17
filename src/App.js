import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Nav from "./components/sharedComponents/Nav";

import HomePage from "./components/HomePage";
import BetsPage from "./components/BetsPage";
import StandingsPage from "./components/Standings";

const routesArray = [
    { linkRoute: "/", linkName: "Homepage" },
    { linkRoute: "/bets", linkName: "Bets" },
    { linkRoute: "/standings", linkName: "Standings" }
];

function App() {
    return (
        <Router>
            <Nav routes={routesArray} />
            <Route
                path="/"
                exact
                render={routeProps => <HomePage {...routeProps} />}
            />
            <Route
                path="/bets"
                render={routeProps => <BetsPage {...routeProps} />}
            />
            <Route
                path="/standings"
                render={routeProps => <StandingsPage {...routeProps} />}
            />
        </Router>
    );
}

export default App;
