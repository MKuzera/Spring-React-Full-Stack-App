import axios from "axios";

export const deleteExpenditureByID = (expenditureID:number, userid:number) => {
    const url = `http://localhost:8080/user/${userid}/expenditure/${expenditureID}`;
    const config = {
        headers: {
            'Origin': 'http://localhost:3000'
        }
    };

    return axios.delete(url, config);
};