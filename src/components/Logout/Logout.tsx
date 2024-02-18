import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../security/AuthContext";

function Logout(){
    const authContext = useContext(AuthContext);
    authContext.logout();
    return(
        <div className="logout">See you next time. <Link to={"/login"}>Login again?</Link> </div>
    );
}

export default  Logout;