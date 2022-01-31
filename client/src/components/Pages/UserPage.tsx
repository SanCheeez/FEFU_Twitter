import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserProfile } from "../UserProfile/UserProfile";
import axios from "axios";
import Layout from "../Layout/Layout";

interface IUser {
    avatar: string,
    background: string,
    email: string,
    password: string,
    name: string
    nickname: string,
    description: string,
    month: string,
    year: string,
    in_reading: string,
    readers: string,
}

const api = axios.create({
    baseURL: "http://localhost:5001"
})

export const UserPage = (): JSX.Element => {
    const [curUser, setCurUser] = useState<IUser>()
    const { login } = useParams<{ login?: string }>();
    const user = localStorage.getItem("user")
    const user_json = user !== null ? JSON.parse(user) : null
    console.log(user_json)
    const getUser = async () => {
        const response = await api.get(`/user/${user_json?.email}`)
        console.log(response.data)
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <Layout title="Профиль" >
            <UserProfile />
        </Layout>
    );
}