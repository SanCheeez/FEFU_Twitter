import axios from "axios";
import React, { ReactChildren, ReactNode, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { TwitterLogo } from "../Icons/TwitterLogo";
import './LayoutLogReg.scss'

interface Props {
    title: string;
    btn_text: string;
    redirect_text: string;
    is_login?: boolean;
    children: ReactChildren | ReactNode;
    name?: string;
    email?: string;
    password?: string;
}

const api = axios.create({
    baseURL: "http://localhost:5001/api"
})

export const LayoutLogReg = ({ title, btn_text, redirect_text, is_login = false, children, name = "", email = "", password = "" }: Props): JSX.Element => {
    const auth = useContext(AuthContext)

    const Login = async () => {
        const response = await api.post('/login', {
            email: email,
            password: password
        })
        if (auth.login)
            auth.login(response.data.token, response.data.id)
        console.log(response.data)
    }
    const Register = async () => {
        const response = await api.post('/register', {
            name: name,
            email: email,
            password: password
        })
        console.log(response.data)
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
            {is_login === true ? <div className="log-reg__redirect"><Link to={"/register"} >{redirect_text}</Link></div> :
                <div className="log-reg__redirect"><Link to={"/login"} >{redirect_text}</Link></div>}
        </div>
    );
}