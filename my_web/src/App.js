import React from "react";
import { Header } from "./Components/Header/header/header";
import { Routes, Route } from 'react-router-dom'
import { MainPage } from "./Components/mainPage/MainPage";
import { SingUp } from "./Components/User/SingUp/SingUp";
import { UserValidator } from "./Components/User/validator/UserValidator";
import { Courses } from "./Components/MyCourses/Courses";


const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route element={<MainPage />} path={'/'} />
                <Route element={<Courses />} path={'/Courses'} />
                <Route element={<UserValidator><SingUp /></UserValidator>} path={'/singUp'} />
            </Routes>
        </div>
    )

}

export default App