import axios from 'axios';



export const UpdateExpenditure = async (id:number,userId: number,title:string, description: string, price: number, date: Date) => {
    const url = 'http://localhost:8080/put-expenditure';
    const data = {
        id:id,
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
        const response = await axios.put(url,data, config);
        return response;
    } catch (error) {
       return null;
    }
};
