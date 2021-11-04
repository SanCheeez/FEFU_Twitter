import React from "react"
import './SidebarRight.scss'
import { Searchbar } from "../Searchbar/Searchbar";
import { ActualThemes } from "./ActualThemes/ActualThemes";
import { WhoRead } from "./WhoRead/WhoRead";

export const SidebarRight = (): JSX.Element => {
    return (
        <div className="sidebar-right">
            <div className="sidebar-right__searcharea">
                <Searchbar />
            </div>
            <div className="sidebar-right__actual-themes">
                <ActualThemes />
            </div>
            <div className="sidebar-right__who-read">
                <WhoRead />
            </div>
        </div>
    );
}
