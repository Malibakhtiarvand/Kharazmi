import React from "react";
import { Header } from "./Components/Header/header/header";
import { Routes, Route } from 'react-router-dom'
import { MainPage } from "./Components/mainPage/MainPage";


const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route element={<MainPage />} path={'/'} />
            </Routes>
        </div>
    )

}

export default App