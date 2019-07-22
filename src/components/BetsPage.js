import React, { Component } from "react";

import Wrapper from "./sharedComponents/Wrapper";
import OddsList from "./OddsList";

import "../css/betsPage.css";
class BetsPage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            showWager: false,
            wagerPick: 0,
            amoutBet: 0
        };
    }

    handleClick = e => {
        let event = parseFloat(e.odds);
        let usOdds = this.convertOdds(event);
        console.log(usOdds);
        if (e.odds !== undefined) {
            this.setState({
                showWager: true,
                wagerPick: (this.state.wagerPick += event)
            });
            console.log(this.state.wagerPick);
        }
    };

    convertOdds(odds) {
        return (odds - 1) * 100;
    }

    handleChange(e) {
        let val = parseFloat(e.target.value);
        this.setState({
            wagerPick: (this.state.wagerPick += val)
        });
    }

    getTotal(num1, num2) {
        return num1 * num2;
    }

    render() {
        return (
            <>
                <Wrapper>
                    <div className="betsPage--container">
                        <div className="">
                            <h2>All MLB Games</h2>
                            <OddsList clickHandler={this.handleClick} />
                        </div>
                        <div className="bet-slip-container">
                            <div className="bet-slip">
                                <h2>Bet Slip</h2>
                            </div>
                            <div className="bet-slip-info">
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        <input
                                            className="input"
                                            type="text"
                                            value={this.state.wagerPick.toFixed(
                                                2
                                            )}
                                            onChange={this.handleChange}
                                        />
                                        <input
                                            className="result-input"
                                            type="text"
                                            value={this.getTotal(
                                                this.state.wagerPick
                                            )}
                                            onChange={this.getTotal}
                                        />
                                    </label>
                                    <input
                                        className="submit-input"
                                        type="submit"
                                        value="Submit"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </>
        );
    }
}

export default BetsPage;
