<template>
  <div>
    <Header v-if="!['sign-in', 'registration'].includes(this.$route.name) "/>
    <Nuxt />
    <Footer v-if="!['sign-in', 'registration'].includes(this.$route.name) "/>
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  export default {
    components :{Header, Footer},
    mounted() {
      console.log('route', this.$route.name)
    },
  }
</script>

