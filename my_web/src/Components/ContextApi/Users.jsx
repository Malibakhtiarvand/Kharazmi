import { createContext } from "react";

export const UserContext=createContext(
    {
        name:'',
        password:'',
        passwordAgain:'',
        setPassword:() => {},
        setName:() => {},
        setPasswordAgain:() => {},
        Validator:() => {},
    }
)