import { createContext, ReactNode, useContext, useState } from "react";
import { loginRequest } from "./LoginRequest";
import {isNumberObject} from "util/types";

// Create a Context
interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    username: string | null;
    userid: number;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: async () => {},
    logout: () => {},
    username: null,
    userid: 0,
});

interface Props {
    children?: ReactNode;
}

// Share the created context with other components
export const useAuth = () => useContext(AuthContext);

// Put some state in the context
export default function AuthProvider({ children }: Props) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState<string | null>(null);
    const [userid, setUserid] = useState<number>(0);
    const login = async (username: string, password: string) => {
        try {
            const response = await loginRequest(username, password);
            console.log(response);
            setAuthenticated(true);
            setUsername(username);
            setUserid(response.data.id);

            return response.data;
        } catch (error) {
            console.log(error);
            setAuthenticated(false);
            setUsername(null);
            setUserid(0);

            throw error;
        }
    };

    const logout = () => {
        setAuthenticated(false);
        setUsername(null);
        setUserid(0);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username, userid }}>
            {children}
        </AuthContext.Provider>
    );
}
