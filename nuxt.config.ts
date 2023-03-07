// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/apollo"],
  ssr: false,
  apollo: {
    autoImports: true,
    authType: "Bearer",
    authHeader: "x-hasura-admin-secret",
    tokenStorage: "cookie",
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: "https://ruling-eel-15.hasura.app/v1/graphql",
      },
    },
  },
});
