import { COOKIE_USER } from "@/configs/configKeys"
import { User } from "@/types/login"

export const useAuthUser = () => {
  const userCookie = useCookie<User>(COOKIE_USER)

  return useState<User | null>("user", () => userCookie.value)
}
