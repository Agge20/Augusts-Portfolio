// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],
    tailwindcss: {
        configPath: "~/config/tailwind.js",
    },
    css: [
        // Load a CSS file from a local module
        "@/assets/css/main.css",
        "@/assets/css/fonts.css",
    ],
});
