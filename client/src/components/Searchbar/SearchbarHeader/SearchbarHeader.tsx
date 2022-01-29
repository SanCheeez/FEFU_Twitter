import React from "react";
import { Settings } from "../../Icons/Settings";
import { Searchbar } from "../Searchbar";
import "./SearchbarHeader.scss"

interface Props {
    onChange?: () => void
}

export const SearchbarHeader = (props: Props): JSX.Element => {
    return (
        <div className="searchbar-header">
            <Searchbar onChange={() => props.onChange ? props.onChange() : console.log("Не удалось вызвать функцию")} />
            <div className="ic-settings"><Settings /></div>
        </div>
    );
}