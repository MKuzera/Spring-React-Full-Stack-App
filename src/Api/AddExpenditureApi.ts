import axios from 'axios';



export const postExpenditure = async (userId: number,title:string, description: string, price: number, date: Date) => {
    const url = 'http://localhost:8080/add-expenditure';
    const data = {
        userId:userId,
        title:title,
        description:description,
        price:price,
        date:date
    };
    const config = {
        headers: {
            'Origin': 'http://localhost:3000'
        }
    };

    try {
        const response = await axios.post(url,data, config);
        return true;
    } catch (error) {
       return false;
    }
};
