// https://nuxt.com/docs/api/configuration/nuxt-config

import { ClientOnly } from "#build/components";

export default defineNuxtConfig({
  devtools: { enabled: true },
  logLevel: "info",
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      //script: [{ src: "uilib/assets/bootstrapjs" }],
    },
  },
  css: ["uilib/assets/css"],
});
