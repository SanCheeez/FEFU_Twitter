import React, { useState } from "react";
import { DotsMore } from "../../Icons/DotsMore";
import cat from "../../../img/Cat.jpg"
import './SidebarUser.scss'
import { SidebarExit } from "../SidebarExit/SidebarExit";

export const SidebarUser = (): JSX.Element => {
    const [clicked, setClicked] = useState<boolean>(false)

    return (
        <div>
            <SidebarExit is_show={clicked} />
            <button className="user" onClick={() => clicked ? setClicked(false) : setClicked(true)}>
                <div className="user__avatar"><img src={cat} alt="Ничего нет" /></div>
                <div className="user__names">
                    <div className="user__name">NAME</div>
                    <div className="user__nickname">@NICKNAME</div>
                </div>
                <div className="user__dots"><DotsMore /></div>
            </button>
        </div>

    )
}