import axios from 'axios';


export const retrieveUserById = (id:number) => {
    const url = `http://localhost:8080/user/${id}`;
    const config = {
        headers: {
            'Origin': 'http://localhost:3000'
        }
    };

    return axios.get(url, config);
};