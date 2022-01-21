import React from "react";
import './SidebarLeft.scss'
import { SidebarButtons } from "./SidebarButtons/SidebarButtons";

export const SidebarLeft = (): JSX.Element => {
    return (
        <div className='sidebar-left'>
            <div className="sidebar-left__menu">
                <SidebarButtons />
            </div>
            <button className="sidebar-left__button">Твитнуть</button>
        </div>
    );
}