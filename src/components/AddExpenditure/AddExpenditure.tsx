import React, { useState, useEffect } from 'react';
import { useAuth } from "../../security/AuthContext";
import { postExpenditure } from "../../Api/AddExpenditureApi";


interface ExpenditureFormData {
    title: string;
    description: string;
    price: number;
    localDate: Date;
    userId: number;
}

const AddExpenditureForm: React.FC = () => {
    const authContext = useAuth();
    const [errormsg, setErrormsg] = useState<string>();

        const [formData, setFormData] = useState<ExpenditureFormData>({
        title: '',
        description: '',
        price: 0,
        localDate: new Date(),
        userId: 0
    });

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            userId: authContext.userid
        }));
    }, [authContext.userid]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response = await postExpenditure(formData.userId, formData.title, formData.description, formData.price, formData.localDate);
        setFormData({
            title: '',
            description: '',
            price: 0,
            localDate: new Date(),
            userId: authContext.userid
        });
        if(response){
            setErrormsg("Added expenditure")
        }
        else{
            setErrormsg("Something gone wrong, try again")
        }

    };

    return (
        <div>
            <h2>Add Expenditure</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /><br /><br />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required /><br /><br />
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" step="0.01" value={formData.price} onChange={handleChange} required /><br /><br />
                <div>
                    {errormsg}
                </div>
                <button type="submit">Add Expenditure</button>


            </form>
        </div>
    );
};

export default AddExpenditureForm;
