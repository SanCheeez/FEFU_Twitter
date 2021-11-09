import React from "react";
import Layout from "../Layout/Layout";
import { UserProfile } from "../UserProfile/UserProfile";

export const UserPage = (): JSX.Element => {
    return (
        <Layout title="Профиль" >
            <UserProfile />
        </Layout>
    );
}