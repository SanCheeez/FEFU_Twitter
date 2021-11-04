import React from "react";
import './UserProfile.scss'
import cat from '../../img/Cat.jpg'
import background from '../../img/cat_in_space.jpg'
import { RegistrationDate } from '../Icons/RegistrationDate'
import { UserProfileButtons } from "./UserProfileButtons/UserProfileButtons";

export const UserProfile = (): JSX.Element => {
    return (
        <div id='profile_wrapper'>
            <div className='userprofile'>
                <div className="userprofile__background"><img src={background} alt="" /></div>
                <div className="userprofile__wrapper-1">
                    <div className="userprofile__avatar"><img src={cat} alt="" /></div>
                    <button className="userprofile__button_edit">Изменить профиль</button>
                </div>
                <div className="userprofile__name">Cat Simon</div>
                <div className="userprofile__nickname">@SuperCat</div>
                <div className="userprofile__description">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, sint!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque cum dolores tenetur earum? Repellat corporis saepe a delectus magni maiores iure sit? Alias, consectetur.
                    </p>
                </div>
                <div className="userprofile__registration-date">
                    <RegistrationDate />
                    <span>Регистрация: октябрь 2021 г.</span>
                </div>
                <div className="userprofile__wrapper-2">
                    <div className="userprofile__in-reading"><span>3</span> в читаемых</div>
                    <div className="userprofile__readers"><span>1</span> читатель</div>
                </div>
            </div>
            <UserProfileButtons />
        </div>
    )
}