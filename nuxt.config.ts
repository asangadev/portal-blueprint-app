import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  // buildDir: 'dist',
  modules: ['@nuxtjs/tailwindcss'],
  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
  ],
  build: {
    transpile: ['@heroicons/vue'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: [
        '@headlessui/vue',
        '@heroicons/vue/solid',
        '@heroicons/vue/outline',
        'vue',
        'pinia',
        'ufo',
      ],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en', // it sets the language English
      },
      meta: [
        {
          hid: 'keyword',
          name: 'keyword',
          content: 'PBA Front-end Portal, PBA Admin Blueprint',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'PBA Front-end Portal Blueprint',
        },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' },
      ],
    },
  },
})


