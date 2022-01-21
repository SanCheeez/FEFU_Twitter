import React from "react";
import { InputField } from "../InputField/InputField";
import { LayoutLogReg } from "../LayoutLogReg/LayoutLogReg";

export const Register = (): JSX.Element => {
    return (
        <LayoutLogReg title="Создайте учётную запись" btn_text="Далее">
            <InputField field_name="Имя" />
            <InputField field_name="Электронная почта" />
            <InputField field_name="Пароль" />
        </LayoutLogReg>
    );
}