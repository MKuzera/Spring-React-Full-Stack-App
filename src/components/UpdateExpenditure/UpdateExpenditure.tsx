import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useAuth } from "../../security/AuthContext";
import {retrieveExpenditure} from "../../Api/getExpenditure";
import {UpdateExpenditure} from "../../Api/UpdateExpenditureApi";



interface ExpenditureFormData {
    id:number;
    title: string;
    description: string;
    price: number;
    localDate: Date;
    userId: number;
}


function UpdateExpenditureForm(){
    const { id } = useParams();

    let expenditureId: number = 0; // zadeklaruj zmienną na zewnątrz bloku if

    if (id != null) {
        expenditureId = parseInt(id) || 0; // przypisz wartość do zmiennej
    }


    const authContext = useAuth();
    const [errormsg, setErrormsg] = useState<string>();

    const [formData, setFormData] = useState<ExpenditureFormData>({
            id:expenditureId,
            title: '',
            description: '',
            price: 0,
            localDate: new Date(),
            userId: 0
    });


    function refreshForm(){
       retrieveExpenditure(expenditureId,authContext.userid).then(response =>

           setFormData({
               title: response.data.title,
               description: response.data.description,
               price: response.data.price,
               localDate: response.data.localDate,
               userId: response.data.userId,
               id:response.data.id
           }));

    }
    useEffect ( () => refreshForm(), [])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let response = await UpdateExpenditure(formData.id,formData.userId, formData.title, formData.description, formData.price, formData.localDate);
        if(response!==null){
            setErrormsg("Updated expenditure")
        }
        else{
            setErrormsg("Something gone wrong, try again")
        }

    };

    return (
        <div>
            <h2>Update Expenditure</h2>
            <form onSubmit={handleSubmit}>


                <label htmlFor="userId">Title:</label>
                <input type="hidden" id="userId" name="userId" value={formData.userId} onChange={handleChange} required /><br /><br />


                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required /><br /><br />

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required /><br /><br />
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" step="0.01" value={formData.price} onChange={handleChange} required /><br /><br />
                <div>
                    {errormsg}
                </div>
                <button type="submit">Update Expenditure</button>


            </form>
        </div>
    );
}

export default UpdateExpenditureForm;
