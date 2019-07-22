import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/nav.css";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        };
    }

    render() {
        const { routes } = this.props;
        return (
            <nav>
                <ul className="nav-ul">
                    {routes.map(route => (
                        <li key={`link-${route.linkName}`}>
                            <Link to={route.linkRoute}>{route.linkName}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Nav;
