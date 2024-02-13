import React, { useState } from "react";
import "./LoggingForm.css";
import {useNavigate} from "react-router-dom";
import Login from "../../Api/Login";


interface LoggingFormValues {
    login: string;
    password: string;
}

const LoggingForm: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string>("");
    const [form, setForm] = useState<LoggingFormValues>({
        login: "",
        password: ""
    });

    const handleChange = (fieldName: string, value: string) => {
        setForm(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault(); // prevent refresh
        navigate(`/start/${form.login}`);
        // Do something with form data, e.g., send it to server
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="LoginContentBox">
                <div>
                    <div>Login</div>
                    <input
                        type="text"
                        name="login"
                        required
                        value={form.login}
                        onChange={e => handleChange("login", e.currentTarget.value)}
                    />
                </div>

                <div>
                    <div>Password</div>
                    <input
                        type="password"
                        name="password"
                        required
                        value={form.password}
                        onChange={e => handleChange("password", e.currentTarget.value)}
                    />
                </div>

                <div>{error}</div>

                <button type="submit">Log in</button>
            </div>
        </form>
    );
};

export default LoggingForm;
