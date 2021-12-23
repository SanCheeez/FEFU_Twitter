import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Notifications.scss'

interface Props {
    children: React.ReactNode | React.ReactChildren
}

export const Notifications = (props: Props): JSX.Element => {
    const [active, setActive] = useState<number>(0);
    return (
        <div className="notifications">
            <div className="notifications__buttons">
                <Link to="/notifications" className={active === 0 ? "notifications__all notifications__all_active" : "notifications__all"} onClick={() => setActive(0)}><button>Все</button></Link>
                <Link to="/notifications/mentions" className={active === 1 ? "notifications__mentions notifications__mentions_active" : "notifications__mentions"} onClick={() => setActive(1)}><button>Упоминания</button></Link>
            </div>
            <div className="notifications__content">
                {props.children}
            </div>
        </div>
    );
}