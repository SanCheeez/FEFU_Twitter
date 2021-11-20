import React from "react";
import { useParams } from "react-router-dom";
import { UserProfile } from "../UserProfile/UserProfile";
import Layout from "../Layout/Layout";

export const UserPage = (): JSX.Element => {
    const { login } = useParams<{ login?: string }>();
    return (
        <Layout title="Профиль" >
            <UserProfile name={login} />
        </Layout>
    );
}