import React, { useEffect, useState } from "react";
import { HeaderAfterLogIn } from "./afterLogIn";
import { HeaderBeforeLogIn } from "./beForLogIn";

export const Header = () => {
    var [IsActive, setIsActive] = useState(false)

    return (
        <div style={{ flexWrap: 'wrap-reverse' }} className="Header d-flex align-items-center">
            <nav style={{ gap: '10px', display: 'flex' }}>
                {
                    IsActive ?
                    <HeaderAfterLogIn />:<HeaderBeforeLogIn />
                }
            </nav>

            <h5 style={{ whiteSpace: 'nowrap' }}>به سایت ما خوش آمدید</h5>
        </div>
    )
}