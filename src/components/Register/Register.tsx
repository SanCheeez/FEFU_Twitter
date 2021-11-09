import React from "react";
import { TwitterLogo } from "../Icons/TwitterLogo";
import { InputField } from "../InputField/InputField";
import './Register.scss'

export const Register = (): JSX.Element => {
    return (
        <div className="register">
            <div className="register__logo"><TwitterLogo /></div>
            <div className="register__title">Войти</div>
            <div className="register__fields">
                <InputField field_name="Электронная почта" />
                <InputField field_name="Пароль" />
            </div>
            <button className="register__button">Вход</button>
        </div>
    );
}