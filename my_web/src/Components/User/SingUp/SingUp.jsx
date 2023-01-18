import React, { useContext } from "react";
import { NameAndPasswordField } from "../nameAndPasswordField";
import { UserContext } from "../../ContextApi/Users";
import { ConnectToServer } from "../../services/http";

export const SingUp = () => {
    const { name,password,passwordAgain, setPasswordAgain,Validator } = useContext(UserContext)
    function PostUser(name,password) {
        ConnectToServer('POST',JSON.stringify({name,password}))
    }

    return (
        <form onSubmit={() => {PostUser(name,password)}} className="User SingUp">
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
            {Validator.current.message('passwordAgain',passwordAgain,'required|min:5')}


            <button className="btn fa fa-user"></button>
        </form>
    )
}
