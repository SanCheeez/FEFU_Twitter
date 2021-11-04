import React from "react";
import './UserProfileButtons.scss'

export const UserProfileButtons = (): JSX.Element => {
    return (
        <div className="profile-buttons">
            <button className="profile-buttons__tweets">Твиты</button>
            <button className="profile-buttons__tweets-and-answers">Твиты и ответы</button>
            <button className="profile-buttons__media">Медиа</button>
            <button className="profile-buttons__likes">Нравится</button>
        </div>
    )
}