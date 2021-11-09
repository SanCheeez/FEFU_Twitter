import React from "react";
import './SidebarButtons.scss'
import { TwitterLogo } from '../../Icons/TwitterLogo'
import { SidebarMain } from '../../Icons/SidebarMain'
import { SidebarReview } from '../../Icons/SidebarReview'
import { SidebarNotifications } from '../../Icons/SidebarNotifications'
import { SidebarMessages } from '../../Icons/SidebarMessages'
import { SidebarBookmarks } from '../../Icons/SidebarBookmarks'
import { SidebarLists } from '../../Icons/SidebarLists'
import { SidebarProfile } from '../../Icons/SidebarProfile'
import { SidebarMore } from '../../Icons/SidebarMore'
import { Link } from "react-router-dom";

export const SidebarButtons = (): JSX.Element => {
    return (
        <>
            <Link to="/home" className="menu-button"><button><div><TwitterLogo /><span></span></div></button></Link>
            <Link to="/home" className="menu-button"><button><div><SidebarMain /><span>Главная</span></div></button></Link>
            <Link to="/review" className="menu-button"><button><div><SidebarReview /><span>Обзор</span></div></button></Link>
            <Link to="/notifications" className="menu-button"><button><div><SidebarNotifications /><span>Уведомления</span></div></button></Link>
            <Link to="/messages" className="menu-button"><button><div><SidebarMessages /><span>Сообщения</span></div></button></Link>
            <Link to="/bookmarks" className="menu-button"><button><div><SidebarBookmarks /><span>Закладки</span></div></button></Link>
            <Link to="/lists" className="menu-button"><button><div><SidebarLists /><span>Списки</span></div></button></Link>
            <Link to="/profile" className="menu-button"><button><div><SidebarProfile /><span>Профиль</span></div></button></Link>
            <Link to="/more" className="menu-button"><button><div><SidebarMore /><span>Ещё</span></div></button></Link>
        </>
    )
}