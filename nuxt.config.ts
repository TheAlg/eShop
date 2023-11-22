// https://nuxt.com/docs/api/configuration/nuxt-config
import { styles } from "uilib";
export default defineNuxtConfig({
  devtools: { enabled: true },
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
      style: [styles],
    },
  },
});
