import React from "react"
import './SidebarButton.scss'
import { TwitterLogo } from '../../Icons/TwitterLogo'
import { SidebarMain } from '../../Icons/SidebarMain'
import { SidebarReview } from '../../Icons/SidebarReview'
import { SidebarNotifications } from '../../Icons/SidebarNotifications'
import { SidebarMessages } from '../../Icons/SidebarMessages'
import { SidebarBookmarks } from '../../Icons/SidebarBookmarks'
import { SidebarLists } from '../../Icons/SidebarLists'
import { SidebarProfile } from '../../Icons/SidebarProfile'
import { SidebarMore } from '../../Icons/SidebarMore'

interface Props {
    id: number;
    text: string;
}

export const SidebarButton = ({ id, text }: Props): JSX.Element => {
    const sidebar_buttons = [TwitterLogo, SidebarBookmarks, SidebarLists];
    return (
        <div>
            {sidebar_buttons[id]}
            <span>{text}</span>
        </div>
    );
}