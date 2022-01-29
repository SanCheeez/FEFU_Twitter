import axios from "axios";
import React, { ReactChildren, ReactNode, useState } from "react";
import { TwitterLogo } from "../Icons/TwitterLogo";
import './LayoutLogReg.scss'

interface Props {
    title: string;
    btn_text: string;
    is_login?: boolean;
    children: ReactChildren | ReactNode;
    name?: string;
    email?: string;
    password?: string;
}

const api = axios.create({
    baseURL: "http://localhost:5001/api"
})

export const LayoutLogReg = ({ title, btn_text, is_login = false, children, name = "", email = "", password = "" }: Props): JSX.Element => {
    const Login = async () => {
        const response = await api.post('/login', {
            email: email,
            password: password
        })
        console.log(response)
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    const Register = async () => {
        const response = await api.post('/register', {
            name: name,
            email: email,
            password: password
        })
        console.log(response)
    }
    return (
        <div className="log-reg">
            <div className="log-reg__logo"><TwitterLogo /></div>
            <div className="log-reg__title">{title}</div>
            <div className="log-reg__fields">
                {children}
            </div>
            {is_login === true ? <button className="log-reg__button" type="submit" onClick={() => Login()}>{btn_text}</button> :
                <button className="log-reg__button" type="submit" onClick={() => Register()}>{btn_text}</button>}
        </div>
    );
}