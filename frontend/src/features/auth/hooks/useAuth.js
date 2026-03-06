import { useContext } from "react"
import { AuthContext } from "../auth.context"
import { login, register, logout, } from '../services/auth.api'



export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            if (data?.user) setUser(data.user)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)

        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            if (data?.user) setUser(data.user)

        } catch (error) {
            console.log(error)

        } finally {
            setLoading(false)

        }
    }

    const handleLogout = async () => {
        setLoading(false)
        try {
            await logout()
            setUser(null)
        } catch (error) {
            console.log(error)

        } finally {
            setLoading(true)

        }
    }

    return { handleLogin, handleRegister, handleLogout, user, loading }
}