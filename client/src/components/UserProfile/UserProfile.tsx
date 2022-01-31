import React from "react";
import cat from '../../img/Cat.jpg'
import background from '../../img/cat_in_space.jpg'
import { RegistrationDate } from '../Icons/RegistrationDate'
import { UserProfileButtons } from "./UserProfileButtons/UserProfileButtons";
import './UserProfile.scss'

interface Props {
    avatar?: string,
    background?: string,
    name?: string,
    nickname?: string,
    description?: string,
    month?: string,
    year?: string,
    in_reading?: string,
    readers?: string,
    children?: React.ReactNode | React.ReactChildren
}

export const UserProfile = (props: Props): JSX.Element => {
    return (
        <div id='profile_wrapper'>
            <div className='userprofile'>
                <div className="userprofile__background"><img src={props.background !== (null || undefined) ? props.background : background} alt="" /></div>
                <div className="userprofile__wrapper-1">
                    <div className="userprofile__avatar"><img src={props.avatar !== (null || undefined) ? props.avatar : cat} alt="" /></div>
                    <button className="userprofile__button_edit">Изменить профиль</button>
                </div>
                <div className="userprofile__name">{props.name !== (null || undefined) ? props.name : "Cat Simon"}</div>
                <div className="userprofile__nickname">@{props.nickname !== (null || undefined) ? props.nickname : "SuperCat"}</div>
                <div className="userprofile__description">
                    <p>
                        {props.description !== (null || undefined) ? props.description : "Что-то про меня написано, но вы этого не увидите"}
                    </p>
                </div>
                <div className="userprofile__registration-date">
                    <RegistrationDate />
                    <span>Регистрация: {props.month !== (null || undefined) ? props.month : "октябрь"} {props.year !== (null || undefined) ? props.year : "2021"} г.</span>
                </div>
                <div className="userprofile__wrapper-2">
                    <div className="userprofile__in-reading"><span>{props.in_reading !== (null || undefined) ? props.in_reading : "0"}</span> в читаемых</div>
                    <div className="userprofile__readers"><span>{props.readers !== (null || undefined) ? props.readers : "0"}</span> читатель</div>
                </div>
            </div>
            <UserProfileButtons />
        </div>
    )
}