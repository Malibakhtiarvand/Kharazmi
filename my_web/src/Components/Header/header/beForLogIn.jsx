import React from "react";
import {Link} from 'react-router-dom'

export const HeaderBeforeLogIn = () => {
    return (
        <>
            <Link className="fa fa-sign-in btn btn-warning"></Link>
            <Link to={'/singUp'} className="fa fa-user btn btn-primary"></Link>
        </>
    )
}
