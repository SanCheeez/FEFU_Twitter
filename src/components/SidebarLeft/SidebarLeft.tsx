import React from "react";
import './SidebarLeft.scss'
import { TwitterLogo } from '../Icons/TwitterLogo'
import { SidebarMain } from '../Icons/SidebarMain'
import { SidebarReview } from '../Icons/SidebarReview'
import { SidebarNotifications } from '../Icons/SidebarNotifications'
import { SidebarMessages } from '../Icons/SidebarMessages'
import { SidebarBookmarks } from '../Icons/SidebarBookmarks'
import { SidebarLists } from '../Icons/SidebarLists'
import { SidebarProfile } from '../Icons/SidebarProfile'
import { SidebarMore } from '../Icons/SidebarMore'
import { SidebarButton } from "./SideBarButton/SidebarButton";

export const SidebarLeft = (): JSX.Element => {
    return (
        <div className='sidebar-left'>
            <div className="sidebar-left__menu">
                <button className="menu__item"><div><TwitterLogo /><span></span></div></button>
                <button className="menu__item"><div><SidebarMain /><span>Главная</span></div></button>
                <button className="menu__item"><div><SidebarReview /><span>Обзор</span></div></button>
                <button className="menu__item"><div><SidebarNotifications /><span>Уведомления</span></div></button>
                <button className="menu__item"><div><SidebarMessages /><span>Сообщения</span></div></button>
                <button className="menu__item"><div><SidebarBookmarks /><span>Закладки</span></div></button>
                <button className="menu__item"><div><SidebarLists /><span>Списки</span></div></button>
                <button className="menu__item"><div><SidebarProfile /><span>Профиль</span></div></button>
                <button className="menu__item"><div><SidebarMore /><span>Ещё</span></div></button>
            </div>
            <button className="sidebar-left__button">Твитнуть</button>
        </div>
    );
}