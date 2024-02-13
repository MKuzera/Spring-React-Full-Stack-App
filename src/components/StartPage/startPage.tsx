import React from "react";
import {useParams} from "react-router-dom";

interface RouteParams {
    username: string;
}
function StartPage() {
    const params: Partial<RouteParams> = useParams();
    const username: string = params.username || "";


    return(

        <div className={"startPage"}>
            Hello {username}


        </div>
    )
}
export default StartPage;