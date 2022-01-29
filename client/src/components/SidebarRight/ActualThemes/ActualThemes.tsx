import React, { useState, useEffect } from "react"
import { Settings } from "../../Icons/Settings";
import { Actual } from "./Actual/Actual";
import IActual from "../../../../../server/Interfaces/ActualInterface";
import axios from "axios";
import './ActualThemes.scss'

const api = axios.create({
    baseURL: "http://localhost:5001"
})

interface Props {
    is_explore?: boolean
}

export const ActualThemes = ({ is_explore = false }: Props): JSX.Element => {
    const [actuals, setActuals] = useState<Array<IActual>>([]);
    const allActuals = async () => {
        const response = await api.get('/actual');
        setActuals(response.data);
    }
    useEffect(() => {
        allActuals();
    }, [])

    if (!is_explore)
        return (
            <div className="actual">
                <div className="actual__title">
                    <div className="actual__text">Актуальные темы для вас</div>
                    <div className="actual__settings"><Settings /></div>
                </div>
                <div className="actual__themes">
                    {actuals.map((actual, index) =>
                        index < 3 ? <Actual title={actual.title} theme={actual.theme} tweets={actual.tweets} /> : null
                    )}
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
                    {actuals.map(actual =>
                        <Actual title={actual.title} theme={actual.theme} tweets={actual.tweets} />
                    )}
                    <div className="actual__more actual__more_explore">Показать ещё</div>
                </div>
            </div>
        );
}
