export default defineNuxtConfig({
  app: {
    head: {
      title: "Property Indus",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Nuxt.js project" },
      ],
      script: [
        {
          src: "/js/bootstrap.min.jsx",
        },
        {
          src: "/js/main.jsx",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "/css/style.css",
        },
        {
          rel: "stylesheet",
          href: "/css/responsive.css",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
  runtimeConfig: {
    apiSecret: "123",
    public: {
      PHONE: "905-567-0200",
      EMAIL: "info@propertyindis.com",
    },
  },
});
