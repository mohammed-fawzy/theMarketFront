export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // generate: {
  // devtools:true
  // },
<<<<<<< HEAD
  generate: {
    fallback: true
  },
=======

>>>>>>> 5f780eaab8e1d3744787a9b7a65d5dc42fb91375
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
      {src: 'js/bootstrap.min.js', body: true, type: "text/javascript"},
      {src: 'js/wow.min.js', body: true, type: "text/javascript"},
      // {src:'https://unpkg.com/swiper/swiper-bundle.js', body: true,
<<<<<<< HEAD
      {src: '/js/swiper.min.js', body: true,type: "text/javascript"},
      {src: '/js/isotope.pkgd.js', body: true,type: "text/javascript"},
      {src: '/js/bootstrap-select.min.js', body: true ,type: "text/javascript"},
      {src: '/js/home.js', body: true ,type: "text/javascript"},
      {src: '/js/js.js', body: true ,type: "text/javascript"},
      {src: '/js/owl.carousel.min.js', body: true ,type: "text/javascript"},
      {src: '/js/jquery.smartWizard.min.js', body: true ,type: "text/javascript"},
=======
      {src: 'js/swiper.min.js', body: true,type: "text/javascript"},
      {src: 'js/isotope.pkgd.js', body: true,type: "text/javascript"},
      {src: 'js/bootstrap-select.min.js', body: true ,type: "text/javascript"},
      {src: 'js/home.js', body: true ,type: "text/javascript"},
      {src: 'js/js.js', body: true ,type: "text/javascript"},
      {src: 'js/owl.carousel.min.js', body: true ,type: "text/javascript"},
      {src: 'js/jquery.smartWizard.min.js', body: true ,type: "text/javascript"},
>>>>>>> 5f780eaab8e1d3744787a9b7a65d5dc42fb91375
      {src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAiOgBoR0bz-6mj23O0Wmk1CScy41joFMY', body: true ,type: "text/javascript"},
      // {src: '/js/initmap.js', body: true ,type: "text/javascript"},


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
    '@/assets/css/smart_wizard_theme_dots.min.css',
    '@/assets/css/main.css',
    '@/assets/css/first.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/axios', ssr: false },
  ],

  // env: {
  //   baseUrl: process.env.BASE_URL || 'https://the-market.se01.tech/'
  // },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  // router: {
  //   base:'/theMarketFront/',
  //   mode: 'hash'
  // },
  // srcDir: 'theMarketFront/',

  // buildDir: 'dist',
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    'vue-sweetalert2/nuxt'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // baseURL:'https://the-market.se01.tech/'
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
    // publicPath: 'theMarketFront/',
  }
}
