import React from "react";
import { DotsMore } from "../../Icons/DotsMore";
import { NotificationStar } from "../../Icons/NotificationStar";
import './Notification.scss'

interface Props {
    user_avatar: string,
    event: string,
    text: string
}

export const Notification = (props: Props): JSX.Element => {
    return (
        <div className="notification">
            <div className="notification__icon"><NotificationStar /></div>
            <div className="notification__container">
                <div className="notification__user-avatar"><img src={props.user_avatar} alt="" /></div>
                <div className="notification__event"><p>{props.event}</p></div>
                <div className="notification__text"><p>{props.text}</p></div>
            </div>
            <div className="notification__dots"><DotsMore /></div>
        </div>
    );
}