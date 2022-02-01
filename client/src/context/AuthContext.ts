import { createContext } from "react";

interface IAuthContext {
    token?: string | null,
    userId?: string | null,
    login?: (token: string, id: string) => void,
    logout?: () => void,
    isAuth: boolean
}

export const AuthContext = createContext<IAuthContext>({
    token: null,
    userId: null,
    login: (token: string | null, id: string | null) => { },
    logout: () => { },
    isAuth: false
})