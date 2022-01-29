import React, { useState } from "react";
import { InputField } from "../InputField/InputField";
import { LayoutLogReg } from "../LayoutLogReg/LayoutLogReg";

export const Login = (): JSX.Element => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <LayoutLogReg title="Вход" btn_text="Войти" is_login={true} email={email} password={password}>
            <InputField field_name="Электронная почта" is_email={true} onChange={() => setEmail(document.getElementsByTagName("input")[0].value)} />
            <InputField field_name="Пароль" is_password={true} onChange={() => setPassword(document.getElementsByTagName("input")[1].value)} />
        </LayoutLogReg>
    );
}