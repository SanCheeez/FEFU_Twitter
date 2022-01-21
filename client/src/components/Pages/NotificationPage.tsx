import React from "react";
import Layout from "../Layout/Layout";
import { Notifications } from "../Notifications/Notifications";

interface Props {
    children: React.ReactNode | React.ReactChildren
}

export const NotificationPage = (props: Props): JSX.Element => {
    return (
        <Layout title="Уведомления" >
            <Notifications>
                {props.children}
            </Notifications>
        </Layout>
    );
}