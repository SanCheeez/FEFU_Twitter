import React from "react";
import { TwitterLogo } from "../Icons/TwitterLogo";
import { InputField } from "../InputField/InputField";
import './Login.scss'

export const Login = (): JSX.Element => {
    return (
        <div className="login">
            <div className="login__logo"><TwitterLogo /></div>
            <div className="login__title">Создайте учётную запись</div>
            <div className="login__fields">
                <InputField field_name="Имя" />
                <InputField field_name="Электронная почта" />
                <InputField field_name="Пароль" />
            </div>
            <button className="login__button">Далее</button>
        </div>
    );
}