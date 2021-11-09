import React from 'react'
import { SidebarLeft } from '../SidebarLeft/SidebarLeft'
import { NewsFeed } from '../NewsFeed/NewsFeed'
import { SidebarRight } from '../SidebarRight/SidebarRight'
import './Layout.scss'

type Props = {
    title: string;
    children: React.ReactNode
}

function Layout(props: Props): JSX.Element {
    return (
        <div className="container">
            <SidebarLeft />
            <NewsFeed title={props.title} >
                {props.children}
            </NewsFeed>
            <SidebarRight />
        </div>
    );
}

export default Layout;
