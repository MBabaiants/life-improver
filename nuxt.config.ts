// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n', '@nuxt/test-utils'],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],
  ui: {
    experimental: {
      componentDetection: true,
    },
    theme: {
      defaultVariants: {
        color: 'neutral',
      },
    },
  },
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    defaultLocale: 'en',
    // locales: [
    //   { code: 'en', name: 'English', file: 'en.json' },
    //   { code: 'ru', name: 'Russian', file: 'ru.json' },
    // ],
  },
});
