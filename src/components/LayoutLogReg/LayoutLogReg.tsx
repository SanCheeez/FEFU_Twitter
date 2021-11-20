import React, { ReactChildren, ReactNode } from "react";
import { TwitterLogo } from "../Icons/TwitterLogo";
import './LayoutLogReg.scss'

interface Props {
    title: string;
    btn_text: string;
    children: ReactChildren | ReactNode;
}

export const LayoutLogReg = ({ title, btn_text, children }: Props): JSX.Element => {
    return (
        <div className="log-reg">
            <div className="log-reg__logo"><TwitterLogo /></div>
            <div className="log-reg__title">{title}</div>
            <div className="log-reg__fields">
                {children}
            </div>
            <button className="log-reg__button">{btn_text}</button>
        </div>
    );
}