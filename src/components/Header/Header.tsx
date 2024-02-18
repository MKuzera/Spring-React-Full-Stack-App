import React, {useContext} from "react";
import {Link} from "react-router-dom";

import {AuthContext} from "../../security/AuthContext";
function Header(){
    const authContext = useContext(AuthContext);
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse">
                            <h2>Your Expenditures Manager</h2>

                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    { authContext.isAuthenticated && <Link className="nav-link" to={`/start/${authContext.username}`}>Start</Link> }
                                </li>
                                <li className="nav-item fs-5">
                                    {authContext.isAuthenticated &&  <Link className="nav-link" to="/expenditures">Expenditures</Link> }
                                </li>
                                <li className="nav-item fs-5">
                                    {authContext.isAuthenticated &&  <Link className="nav-link" to="/ex">Add</Link> }
                                </li>

                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!authContext.isAuthenticated &&    <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {authContext.isAuthenticated && <Link className="nav-link" to="/logout">Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;