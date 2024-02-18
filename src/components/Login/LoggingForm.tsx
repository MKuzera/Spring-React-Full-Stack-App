import React, {useContext, useState} from "react";
import "./LoggingForm.css";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../security/AuthContext";


interface LoggingFormValues {
    login: string;
    password: string;
}

const LoggingForm: React.FC = () => {
    const authContext = useContext(AuthContext);

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
        try {
            await authContext.login(form.login, form.password);

            navigate(`/start/${form.login}`);
        } catch (error) {
            setForm({ login: "", password: "" });
            setError("Authentication failed");
        }


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
