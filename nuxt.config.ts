import { COOKIE_TOKEN } from "./configs/configKeys"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", '@nuxtjs/apollo'],
  ssr: false,
  runtimeConfig: {
    public: {
      authApi: `${process.env.NHOST_AUTH_URL}`,
    },
  },
  apollo: {
    autoImports: true,
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: `${process.env.NHOST_GRAPHQL_URL}`,
        tokenStorage: "cookie",
        tokenName: COOKIE_TOKEN,
      },
    },
  },
})
