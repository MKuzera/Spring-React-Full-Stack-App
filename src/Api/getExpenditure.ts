import axios from "axios";

export const retrieveExpenditure = (expenditureid:any,userid:number) => {
    const url = `http://localhost:8080/user/${userid}/expenditure/${expenditureid}`;
    const config = {
        headers: {
            'Origin': 'http://localhost:3000'
        }
    };

    return axios.get(url, config);
};