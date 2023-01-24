export default defineNuxtConfig({
  css: [
    "~/assets/css/normilize.css",
    "~/assets/font/font.css",
    "~/assets/css/main.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    mgdbUri: process.env.MONGODB_URI,
  },
});
