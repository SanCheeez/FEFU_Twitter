import React from "react";
import { Settings } from "../../Icons/Settings";
import { Searchbar } from "../Searchbar";
import "./SearchbarHeader.scss"

export const SearchbarHeader = (): JSX.Element => {
    return (
        <div className="searchbar-header">
            <Searchbar />
            <div className="ic-settings"><Settings /></div>
        </div>
    );
}