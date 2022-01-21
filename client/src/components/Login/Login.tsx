import React from "react";
import { InputField } from "../InputField/InputField";
import { LayoutLogReg } from "../LayoutLogReg/LayoutLogReg";

export const Login = (): JSX.Element => {
    return (
        <LayoutLogReg title="Вход" btn_text="Войти">
            <InputField field_name="Электронная почта" is_email={true} />
            <InputField field_name="Пароль" is_password={true} />
        </LayoutLogReg>
    );
}