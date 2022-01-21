import React from "react";
import { useParams } from "react-router-dom";
import { UserProfile } from "../UserProfile/UserProfile";
import Layout from "../Layout/Layout";

export const UserPage = (): JSX.Element => {
    const { login } = useParams<{ login?: string }>();
    return (
        <Layout title="Профиль" >
            <UserProfile name={login} in_reading="12900" readers="1002002" />
        </Layout>
    );
}