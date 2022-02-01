import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserProfile } from "../UserProfile/UserProfile";
import axios from "axios";
import Layout from "../Layout/Layout";
import { AuthContext } from "../../context/AuthContext";

interface IUser {
    avatar?: string,
    background?: string,
    email?: string,
    password?: string,
    name?: string
    nickname?: string,
    description?: string,
    month?: string,
    year?: string,
    in_reading?: string,
    readers?: string,
}

const api = axios.create({
    baseURL: "http://localhost:5001"
})

export const UserPage = (): JSX.Element => {
    // const { login } = useParams<{ login?: string }>();
    const [currentUser, setCurrentUser] = useState<IUser>({})
    const auth = useContext(AuthContext)
    const user = localStorage.getItem("user")
    const user_json = user !== null ? JSON.parse(user) : null
    console.log(user_json)
    const getUser = async () => {
        const response = await api.get(`/user/${auth.userId}`)
        console.log(response.data)
        setCurrentUser(response.data)
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <Layout title="Профиль" >
            <UserProfile {...currentUser} />
        </Layout>
    );
}