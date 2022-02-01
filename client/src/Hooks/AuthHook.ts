import React, { useCallback, useEffect, useState } from "react";

interface IAuth {
    token?: string | null,
    userId?: string | null,
    login?: (token: string, id: string) => void,
    logout?: () => void
}

interface UserData {
    id?: string | null,
    token?: string | null
}

export const useAuth = (): IAuth => {
    const [token, setToken] = useState<string | null>(null)
    const [userId, setUserId] = useState<string | null>(null)

    const login = useCallback((jwtToken: string | null, id: string | null) => {
        setToken(jwtToken)
        setUserId(id)
        localStorage.setItem('user', JSON.stringify({
            id,
            token: jwtToken
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem('user')
    }, [])

    useEffect(() => {
        const userData: UserData = JSON.parse(localStorage.getItem('user')!)
        if (userData && userData.token) {
            login(userData.token, userData.id!)
        }
    }, [login])

    return { token, userId, login, logout }
}
