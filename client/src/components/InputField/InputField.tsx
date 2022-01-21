import React from "react";
import './InputField.scss'

type Props = {
    field_name: string;
    is_email?: boolean;
    is_password?: boolean;
}

export const InputField = (props: Props): JSX.Element => {
    return (
        <div className="field">
            <div className="field__title">{props.field_name}</div>
            <input type={props.is_password === true ? "password" : props.is_email === true ? "email" : "text"} className="field__input" />
        </div>
    );
}