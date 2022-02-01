import React from "react";
import { SidebarButtons } from "./SidebarButtons/SidebarButtons";
import { SidebarUser } from "./SidebarUser/SidebarUser";
import './SidebarLeft.scss'

export const SidebarLeft = (): JSX.Element => {
    return (
        <div className='sidebar-left'>
            <div className="sidebar-left__menu">
                <SidebarButtons />
            </div>
            <button className="sidebar-left__button">Твитнуть</button>
            <SidebarUser />
        </div>
    );
}