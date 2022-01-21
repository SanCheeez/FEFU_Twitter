import React from "react"
import './SidebarRight.scss'
import { Searchbar } from "../Searchbar/Searchbar";
import { ActualThemes } from "./ActualThemes/ActualThemes";
import { WhoRead } from "./WhoRead/WhoRead";

interface Props {
    set_actual_and_search?: boolean;
}

export const SidebarRight = ({ set_actual_and_search = true }: Props): JSX.Element => {
    if (set_actual_and_search)
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
    else
        return (
            <div className="sidebar-right">
                <div className="sidebar-right__who-read">
                    <WhoRead />
                </div>
            </div>
        );
}
