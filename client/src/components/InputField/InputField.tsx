import React from "react";
import './InputField.scss'

type Props = {
    field_name: string;
}

export const InputField = (props: Props): JSX.Element => {
    return (
        <div className="field">
            <div className="field__title">{props.field_name}</div>
            <input type="text" className="field__input" />
        </div>
    );
}