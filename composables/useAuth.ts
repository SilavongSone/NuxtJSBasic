import { COOKIE_TOKEN, COOKIE_USER } from "../configs/configKeys"

export const useAuth = () => {
  const config = useRuntimeConfig()
  const { onLogin, onLogout } = useApollo()
  const cookie = useCookie(COOKIE_TOKEN)
  const userCookie = useCookie(COOKIE_USER)

  async function login(email: string, password: string) {
    try {
      const loginData = {
        email,
        password,
      }
      const req = await fetch(
        `${config.public.authApi}/signin/email-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      )
      const data = await req.json()
      const { accessToken, user } = data.session
      cookie.value = accessToken
      userCookie.value = user
      await onLogin(accessToken)
    } catch (error) {
      console.error(error)
    }
  }

  async function logout() {
    userCookie.value = null
    cookie.value = null
    await onLogout()
  }
  return { login, logout }
}
