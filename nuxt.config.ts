export default defineNuxtConfig({
  css: [
    "@/assets/css/normilize.css",
    "@/assets/css/bootstrap-utilities.min.css",
    "@/assets/font/font.css",
  ],

  runtimeConfig: {
    mgdbUri: process.env.MONGODB_URI
  }
})
