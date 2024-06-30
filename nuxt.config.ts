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
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/test-utils/module', '@nuxtjs/i18n'],
  i18n: {
    // Module Options
    lazy: true,
    langDir: 'lang',
    strategy: 'no_prefix',
    defaultLocale: 'en', // Default Language
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light'
  },
});