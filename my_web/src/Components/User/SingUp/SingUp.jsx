import React, { useContext } from "react";
import { NameAndPasswordField } from "../nameAndPasswordField";
import { UserContext } from "../../ContextApi/Users";
import { ConnectToServer } from "../../services/http";
import { toast } from "react-toastify";

export const SingUp = () => {
    const { name, password, passwordAgain, setPasswordAgain, Validator } = useContext(UserContext)
    function PostUser(name, password) {
        if (name !== '' && password !== '' && passwordAgain !== '') {
            if (name.length >= 5 && password.length >= 5 && passwordAgain >= 5 && password == passwordAgain) {
                ConnectToServer('POST', JSON.stringify({ name, password }),'','Users')
            }
        } else {
            return toast.error
                ('عضویت به مشکل برخورد',
                    {
                        position: 'bottom-right'
                    }
                )
        }
    }

    return (
        <form onSubmit={(ev) => { ev.preventDefault() }} onClick={() => { PostUser(name, password) }} className="User SingUp">
            <NameAndPasswordField />
            <input
                value={passwordAgain}
                type="text"
                placeholder="تکرار پسورد"
                onChange={
                    (ev) => {
                        setPasswordAgain(ev.target.value)
                    }
                }
                name="passwordAgain"
            />
            {Validator.current.message('passwordAgain', passwordAgain, 'required|min:5')}


            <button className="btn fa fa-user"></button>
        </form>
    )
}
