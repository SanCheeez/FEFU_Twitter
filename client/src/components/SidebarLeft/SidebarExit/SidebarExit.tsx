import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import './SidebarExit.scss'

interface Props {
    is_show?: boolean
}

export const SidebarExit = ({ is_show = false }: Props): JSX.Element => {
    const auth = useContext(AuthContext)
    const logout = () => {
        if (auth.logout)
            auth.logout()
    }

    return (
        <button className={is_show ? "exit exit_show" : "exit"} onClick={() => logout()}>
            Выйти
        </button>
    )
}