import React from 'react'
import { SidebarLeft } from '../SidebarLeft/SidebarLeft'
import { NewsFeed } from '../NewsFeed/NewsFeed'
import { SidebarRight } from '../SidebarRight/SidebarRight'
import './Layout.scss'

type Props = {
    title: string;
    children: React.ReactNode
    set_actual_and_searchbar?: boolean
}

function Layout(props: Props): JSX.Element {
    return (
        <div className="container">
            <SidebarLeft />
            <NewsFeed title={props.title} >
                {props.children}
            </NewsFeed>
            <SidebarRight set_actual_and_search={props.set_actual_and_searchbar} />
        </div>
    );
}

export default Layout;
