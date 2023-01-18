import React from "react";
import { Header } from "./Components/Header/header/header";
import { Routes, Route } from 'react-router-dom'
import { MainPage } from "./Components/mainPage/MainPage";
import { SingUp } from "./Components/User/SingUp/SingUp";
import { UserValidator } from "./Components/User/validator/UserValidator";


const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route element={<MainPage />} path={'/'} />
                <Route element={<UserValidator><SingUp /></UserValidator>} path={'/singUp'} />
            </Routes>
        </div>
    )

}

export default App