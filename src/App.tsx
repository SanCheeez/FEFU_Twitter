import React from 'react'
import { SidebarLeft } from './components/SidebarLeft/SidebarLeft'
import { NewsFeed } from './components/NewsFeed/NewsFeed'
import { SidebarRight } from './components/SidebarRight/SidebarRight'
import './App.scss'


function App(): JSX.Element {
  return (
    <div className="container">
      <SidebarLeft />
      <NewsFeed />
      <SidebarRight />
    </div>
  );
}

export default App;
