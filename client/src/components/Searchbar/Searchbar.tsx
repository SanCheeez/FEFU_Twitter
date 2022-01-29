import React from "react";
import './Searchbar.scss'
import { SearchLoop } from "../Icons/SearchLoop";

interface Props {
    onChange?: () => void
}

export const Searchbar = (props: Props): JSX.Element => {
    return (
        <div className="searchbar">
            <div className="searchbar__loop"><SearchLoop /></div>
            <div className="searchbar__input">
                <input type="text" placeholder='Поиск в Твиттере' onChange={() => props.onChange ? props.onChange() : console.log("Не могу вызвать функцию")} />
            </div>
        </div>
    );
}