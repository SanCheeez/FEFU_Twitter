import React from "react";
import { InputField } from "../InputField/InputField";
import { LayoutLogReg } from "../LayoutLogReg/LayoutLogReg";

export const Login = (): JSX.Element => {
    return (
        <LayoutLogReg title="Вход" btn_text="Войти">
            <InputField field_name="Электронная почта" />
            <InputField field_name="Пароль" />
        </LayoutLogReg>
    );
}