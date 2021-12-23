import React from "react"
import './ActualThemes.scss'
import { Settings } from "../../Icons/Settings";
import { Actual } from "./Actual/Actual";

export const ActualThemes = (): JSX.Element => {
    return (
        <div className="actual">
            <div className="actual__title title">
                <div className="title__text">Актуальные темы для вас</div>
                <div className="title__settings"><Settings /></div>
            </div>
            <div className="actual__themes">
                <Actual title="Актуальные темы: Россия" name="#локдаун" />
                <Actual title="Актуальные темы: Россия" name="Meta" />
                <Actual title="Актуальные темы: Россия" name="Рашкина" />
                <div className="item__more">Показать ещё</div>
            </div>
        </div>
    );
}
