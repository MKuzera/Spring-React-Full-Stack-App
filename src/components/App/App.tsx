import React from 'react';

import './App.css';
import {BrowserRouter, Link, Route, Routes, useParams} from "react-router-dom";
import LoggingForm from "../Login/LoggingForm";
import RegisterForm from "../Register/RegisterForm";
import StartPage from "../StartPage/startPage";
import ErrorPage from "../../Error/ErrorPage";
import ExpenditureList from "../ExpenditureList/ExpenditureList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Logout from "../Logout/Logout";
import AuthProvider, {useAuth} from "../../security/AuthContext";
import AddExpenditureForm from "../AddExpenditure/AddExpenditure";
import UpdateExpenditure from "../UpdateExpenditure/UpdateExpenditure";


interface AuthenticatedRouteProps {
    children: React.ReactNode;
}
const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ children }) => {
    const authContext = useAuth();

    if (authContext.isAuthenticated) {
        return <>{children}</>;
    } else {

        return <div>Log in to proceed <Link to={"/login"}>here</Link></div>;
    }
};

function App() {
  return (
    <div className="App">

        <AuthProvider>

      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/login" element={<LoggingForm/>}> </Route>
          <Route path="/register" element={<RegisterForm/>}> </Route>
            <Route path="*" element={<ErrorPage/>}>  </Route>

                <Route path="/start/:username" element={
                    <AuthenticatedRoute>
                    <StartPage/>
                    </AuthenticatedRoute>}>
                </Route>

            <Route path="/expenditures" element={
                <AuthenticatedRoute>
                <ExpenditureList/>
                </AuthenticatedRoute>
                }>
            </Route>


            <Route path="/logout" element={
                <AuthenticatedRoute>
                <Logout/>
                </AuthenticatedRoute>}>
            </Route>

            <Route path="/expenditure" element={
                <AuthenticatedRoute>
                    <AddExpenditureForm/>
                </AuthenticatedRoute>
            }>
                   </Route>

            <Route path="/expenditure/:id" element={
                <AuthenticatedRoute>
                    <UpdateExpenditure/>
                </AuthenticatedRoute>
            }>
            </Route>

            <Route path="/ex" element={
                <AuthenticatedRoute>
                    <AddExpenditureForm/>
                </AuthenticatedRoute>
            }>
            </Route>



        </Routes>

          </BrowserRouter>
          <Footer/>
        </AuthProvider>
    </div>
  );
}

export default App;
