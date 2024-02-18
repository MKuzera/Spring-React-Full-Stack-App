import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {retrieveUserById} from "../../Api/UserApiService";
import {useAuth} from "../../security/AuthContext";

interface RouteParams {
    username: string;
}

interface User {
    name: string;
    surname: string;
    id: number;
}
function StartPage() {
    const params: Partial<RouteParams> = useParams();
    const authContext = useAuth();
    const [error, setError] = useState(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        retrieveUserById(authContext.userid)
            .then((response: any) => {
                setUser(response.data);
            })
            .catch((error: any) => {
                setError(error);
            })
            .finally(() => {

            });
    }, []);


    return(

        <div className={"startPage"}>
            {user && (  <div>
            Hello {user.name} {user.surname} , your expenditures are <Link to="/expenditures">here</Link>

                </div>
            )}
            {error && (
                <div>
                    <h3>Something went wrong. {JSON.stringify(error)}</h3>
                </div>
            )}

        </div>
    )
}




export default StartPage;