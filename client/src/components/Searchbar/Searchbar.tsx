import React from "react";
import './Searchbar.scss'
import { SearchLoop } from "../Icons/SearchLoop";

export const Searchbar = (): JSX.Element => {
    return (
        <div className="searchbar">
            <div className="searchbar__loop"><SearchLoop /></div>
            <div className="searchbar__input">
                <input type="text" placeholder='Поиск в Твиттере' />
            </div>
        </div>
    );
}