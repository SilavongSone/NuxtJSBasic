import { COOKIE_TOKEN } from "../configs/configKeys"

export default defineNuxtPlugin((nuxtApp) => {
  // access cookie for auth
  const cookie = useCookie(COOKIE_TOKEN)
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    // `client` can be used to differentiate logic on a per client basis.
    // apply apollo client token
    token.value = cookie.value || ""
  })
})
