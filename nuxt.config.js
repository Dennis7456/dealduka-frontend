export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dealduka',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/media/favicons/favicomatic/favicon.ico' },
      { rel: "apple-touch-icon-precomposed", sizes: "57x57", href: "/media/favicomaticwhitebg/favicomatic/apple-touch-icon-57x57.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "114x114", href: "/media/favicomaticwhitebg/favicomatic/apple-touch-icon-114x114.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "72x72", href: "/media/favicomaticwhitebg/favicomatic/apple-touch-icon-72x72.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "144x144", href: "/media/favicomaticwhitebg/favicomatic/apple-touch-icon-144x144.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "60x60", href: "/media/favicomaticwhitebg/favicomatic/apple-touch-icon-60x60.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "120x120", href: "/media/favicomaticwhitebg/favicomatic/apple-touch-icon-120x120.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "76x76", href: "/media/favicomaticwhitebg/favicomatic/apple-touch-icon-76x76.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "152x152", href: "/media/favicomaticwhitebg/favicomatic/apple-touch-icon-152x152.png" },
      { rel: "icon", type: "image/png", href: "/media/favicons/favicomatic/favicon-196x196.png", sizes: "196x196" },
      { rel: "icon", type: "image/png", href: "/media/favicons/favicomatic/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/png", href: "/media/favicons/favicomatic/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", type: "image/png", href: "/media/favicons/favicomatic/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", type: "image/png", href: "/media/favicons/favicomatic/favicon-128.png", sizes: "128x128" },
      { name: "application-name", content: "&nbsp;" },
      { name: "msapplication-TileColor", content: "#FFFFFF" },
      { name: "msapplication-TileImage", content: "mstile-144x144.png" },
      { name: "msapplication-square70x70logo", content: "mstile-70x70.png" },
      { name: "msapplication-square150x150logo", content: "mstile-150x150.png" },
      { name: "msapplication-wide310x150logo", content: "mstile-310x150.png" },
      { name: "msapplication-square310x310logo", content: "mstile-310x310.png" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
