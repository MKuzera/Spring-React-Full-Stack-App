import axios from "axios";

export const retrieveExpendituresByUserId = (user:number) => {
    const url = `http://localhost:8080/user/${user}/expenditures`;
    const config = {
        headers: {
            'Origin': 'http://localhost:3000'
        }
    };

    return axios.get(url, config);
};