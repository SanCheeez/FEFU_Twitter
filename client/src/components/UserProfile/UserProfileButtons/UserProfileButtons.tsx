import React from "react";
import { Link } from "react-router-dom";
import './UserProfileButtons.scss'

export const UserProfileButtons = (): JSX.Element => {
    return (
        <div className="profile-buttons">
            <Link to="profile/" className="profile-buttons__tweets"><button >Твиты</button></Link>
            <Link to="profile/with_replies" className="profile-buttons__tweets-and-answers"><button >Твиты и ответы</button></Link>
            <Link to="profile/media"><button className="profile-buttons__media">Медиа</button></Link>
            <Link to="profile/likes"><button className="profile-buttons__likes">Нравится</button></Link>
        </div>
    )
}