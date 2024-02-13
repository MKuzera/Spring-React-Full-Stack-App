import React from 'react';

import './App.css';
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import LoggingForm from "../Login/LoggingForm";
import RegisterForm from "../Register/RegisterForm";
import StartPage from "../StartPage/startPage";
import ErrorPage from "../../Error/ErrorPage";
import ExpenditureList from "../ExpenditureList/ExpenditureList";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoggingForm/>}> </Route>
          <Route path="/register" element={<RegisterForm/>}> </Route>
          <Route path="/start/:username" element={<StartPage/>}> </Route>
          <Route path="*" element={<ErrorPage/>}>  </Route>
          <Route path="/expenditures" element={<ExpenditureList/>}>  </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
