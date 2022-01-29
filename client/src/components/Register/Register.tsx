import React, { useState } from "react";
import { InputField } from "../InputField/InputField";
import { LayoutLogReg } from "../LayoutLogReg/LayoutLogReg";

export const Register = (): JSX.Element => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <LayoutLogReg title="Создайте учётную запись" btn_text="Далее" name={name} email={email} password={password}>
            <InputField field_name="Имя" onChange={() => setName(document.getElementsByTagName("input")[0].value)} />
            <InputField field_name="Электронная почта" is_email={true} onChange={() => setEmail(document.getElementsByTagName("input")[1].value)} />
            <InputField field_name="Пароль" is_password={true} onChange={() => setPassword(document.getElementsByTagName("input")[2].value)} />
        </LayoutLogReg>
    );
}