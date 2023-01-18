import React, { useContext, useEffect } from "react";
import { UserContext } from "../ContextApi/Users";

export const NameAndPasswordField = () => {
    const { name, password, setName, setPassword,Validator } = useContext(UserContext)

    useEffect(
        () => {
            console.log(name);
        }, [name]
    )
    return (
        <>
            <input
                type="text"
                placeholder="نام و نام خانواندگی"
                value={name}
                onChange={(ev) => { setName(ev.target.value) }}
                name="name"
            />
            {Validator.current.message('name', name, 'required|min:5')}


            <input
                type="text"
                placeholder="پسورد"
                value={password}
                onChange={(ev) => { setPassword(ev.target.value) }}
                name='password'
            />
            {Validator.current.message('password', password, 'required|min:5')}

        </>
    )
}
