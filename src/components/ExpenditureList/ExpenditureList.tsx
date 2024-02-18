import './expenditures.css';
import {useEffect, useState} from "react";
import {retrieveExpendituresByUserId} from "../../Api/getExpenditures";
import {useAuth} from "../../security/AuthContext";
import {deleteExpenditureByID} from "../../Api/deleteExpenditureApi";
import {useNavigate} from "react-router-dom";

interface Expenditure {
    id: number;
    title: string;
    description:string;
    price: number;
    localDate: Date;
    userId:number;
}

function ExpenditureList(){
    const authContext = useAuth();
    const [errormsg, setErrormsg] = useState<string>("");
    const [expenditures, setExpenditures] = useState<Expenditure[]>([]);
    const navigate = useNavigate();

    useEffect ( () => refreshExpenditures(), [])

    function refreshExpenditures() {
        retrieveExpendituresByUserId(authContext.userid)
            .then(response => {
                setExpenditures(response.data);
            })
            .catch(error => {
                setErrormsg("Can't load expenditures");
            });
    }



    function deleteExpenditure(id:number){
        deleteExpenditureByID(id,authContext.userid).then(() => {
            setErrormsg("Deleted!");
            refreshExpenditures()

        })
            .catch(error => {
                setErrormsg("Something went wrong when deleting");
            });

    }

    function updateExpenditure(id: number) {
        navigate(`/expenditure/${id}`);

    }

    return(
        <div className={"container"}>
            Your expenditure list

            <div>
                <table className={"table"}>
                    <thead>
                    <tr>

                        <th>title</th>
                        <th>description</th>
                        <th>price</th>
                        <th>delete</th>
                        <th>update</th>

                    </tr>
                    </thead>
                    <tbody>
                    {expenditures.map(exp => (
                        <tr key={exp.id}>

                            <td>{exp.title}</td>
                            <td>{exp.description}</td>
                            <td>{exp.price}</td>
                            <td> <button className="btn btn-warning" onClick={() => deleteExpenditure(exp.id)} > Delete</button> </td>
                            <td> <button className="btn btn-info" onClick={() => updateExpenditure(exp.id)} > Update</button> </td>

                        </tr>
                    ))}
                    </tbody>


                </table>
                {errormsg}

            </div>

        </div>



    );
}

export default ExpenditureList;