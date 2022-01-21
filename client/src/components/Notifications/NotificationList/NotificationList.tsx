import React from "react";
import { Notification } from "../Notification/Notification";

export const NotificationList = (): JSX.Element => {
    return (
        <div className="notification-list">
            <Notification user_avatar="./SpaceX.jpg" event="SpaceX ретвитнул(а) фото International Space Station" text=".@NASA TV is live now as the @SpaceX #CargoDragon approaches the station for a 3:41am ET docking today. https://nasa.gov/live https://pic.twitter.com/VEF39JyJi2" />
            <Notification user_avatar="./SpaceX.jpg" event="На случай, если вы пропустили твит от SpaceX" text="Falcon and Dragon are looking good for launch of SpaceX’s 24th resupply mission to the @Space_Station; teams are keeping an eye on weather conditions at the launch site http://spacex.com/launches https://pic.twitter.com/WRZeKyGOki" />
        </div>
    );
}