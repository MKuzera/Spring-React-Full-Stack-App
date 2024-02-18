import axios from "axios";

export const loginRequest = (login: string, password: string) => {
    const url = `http://localhost:8080/login`;
    const data = {
        login: login,
        password: password
    };
    const config = {
        headers: {
            'Origin': 'http://localhost:3000',
            'Content-Type': 'application/json'
        }
    };

    return axios.post(url, data, config);
};