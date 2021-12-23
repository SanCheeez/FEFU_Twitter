import React from "react"
import { DotsMore } from "../../../Icons/DotsMore";
import './Actual.scss'

interface Props {
    title: string,
    name: string
}

export const Actual = (props: Props): JSX.Element => {
    return (
        <div className="actual-theme">
            <div className="actual-theme__content content">
                <div className="content__title">{props.title}</div>
                <div className="content__name">{props.name}</div>
            </div>
            <div className="actual-theme__dots"><DotsMore /></div>
        </div>
    );
}
