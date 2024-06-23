// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.BASE_API_URL
    }
  },
  devServer: {
    port: Number(process.env.PORT ?? 3000),
  },
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/test-utils/module'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light'
  }
});