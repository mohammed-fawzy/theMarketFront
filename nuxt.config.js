export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'The Market Front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo1.svg' }
    ],
    script: [
      {src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js',body: true,
       type: "text/javascript"
      },
      {src: '/js/bootstrap.min.js', body: true, type: "text/javascript"},
      {src: '/js/wow.min.js', body: true, type: "text/javascript"},
      // {src:'https://unpkg.com/swiper/swiper-bundle.js', body: true,
      {src: '/js/swiper.min.js', body: true,type: "text/javascript"},
      {src: '/js/isotope.pkgd.js', body: true,type: "text/javascript"},
      {src: '/js/bootstrap-select.min.js', body: true ,type: "text/javascript"},
      {src: '/js/home.js', body: true ,type: "text/javascript"},
      {src: '/js/js.js', body: true ,type: "text/javascript"},
      {src: '/js/owl.carousel.min.js', body: true ,type: "text/javascript"},
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // CSS file in the project
    '@/assets/fonts/font-awsome/css/all.min.css',
    '@/assets/css/animate.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/swiper.min.css',
    '@/assets/css/owl.carousel.css',
    '@/assets/css/main.css',
    '@/assets/css/first.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'https://the-market.se01.tech/'
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL:'https://the-market.se01.tech/'
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
