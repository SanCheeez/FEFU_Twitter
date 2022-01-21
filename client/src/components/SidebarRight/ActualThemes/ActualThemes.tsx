import React from "react"
import './ActualThemes.scss'
import { Settings } from "../../Icons/Settings";
import { Actual } from "./Actual/Actual";

interface Props {
    is_explore?: boolean
}

export const ActualThemes = ({ is_explore = false }: Props): JSX.Element => {
    if (!is_explore)
        return (
            <div className="actual">
                <div className="actual__title">
                    <div className="actual__text">Актуальные темы для вас</div>
                    <div className="actual__settings"><Settings /></div>
                </div>
                <div className="actual__themes">
                    <Actual title="Актуальные темы: Россия" theme="#локдаун" tweets={123} />
                    <Actual title="Актуальные темы: Россия" theme="Meta" />
                    <Actual title="Актуальные темы: Россия" theme="Рашкина" tweets={1012} />
                    <div className="actual__more">Показать ещё</div>
                </div>
            </div>
        );
    else
        return (
            <div className="actual actual_explore">
                <div className="actual__title">
                    <div className="actual__text">Актуальные темы для вас</div>
                </div>
                <div className="actual__themes">
                    <Actual title="Актуальные темы: Россия" theme="#локдаун" />
                    <Actual title="Актуальные темы: Россия" theme="Meta" />
                    <Actual title="Актуальные темы: Россия" theme="Рашкина" />
                    <Actual title="Новый альбом" theme="Оксимирон" />
                    <Actual title="Актуальные темы: ДВФУ" theme="The shuttle" />
                    <div className="actual__more actual__more_explore">Показать ещё</div>
                </div>
            </div>
        );
}
