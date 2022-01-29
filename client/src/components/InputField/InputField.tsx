import React from "react";
import './InputField.scss'

type Props = {
    field_name: string;
    is_email?: boolean;
    is_password?: boolean;
    onChange?: () => void;
}

export const InputField = (props: Props): JSX.Element => {
    return (
        <div className="field">
            <div className="field__title">{props.field_name}</div>
            <input onChange={() => (props.onChange) ? props.onChange() : console.log("Функция не вызвалась")} type={props.is_password === true ? "password" : props.is_email === true ? "email" : "text"} name={props.is_password === true ? "password" : props.is_email === true ? "email" : "name"} className="field__input" />
        </div>
    );
}