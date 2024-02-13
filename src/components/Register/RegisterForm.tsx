import React, { useState } from "react";
import "./RegisterForm.css";

interface RegisterFormValues {
    login: string;
    password: string;
    email: string;
}

const RegisterForm: React.FC = () => {
    const [error, setError] = useState<string>("");
    const [form, setForm] = useState<RegisterFormValues>({
        login: "",
        password: "",
        email: ""
    });

    const handleChange = (fieldName: string, value: string) => {
        setForm(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // prevent refresh
        // Do something with form data, e.g., send it to server
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="RegisterContentBox">
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
                <div>
                    <div>Email</div>
                    <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={e => handleChange("email", e.currentTarget.value)}
                    />
                </div>

                <div>{error}</div>

                <button type="submit">Register</button>
            </div>
        </form>
    );
};

export default RegisterForm;
