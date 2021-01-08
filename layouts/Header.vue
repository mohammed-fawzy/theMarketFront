<template>
  <section>
   <!-- /////////////////////||||||||||||||||||||||||||||| Start Navbar |||||||||||||||||||||||||||| -->
   <div class="headernav">
      <div class="container">
         <div class="row">
            <div class="col-xs-5 col-sm-7 col-md-9">
               <div class="flex topNav-left just-start">
                  <p>welcome with us in the market</p>
                  <div class="phone">
                     <span>call us :</span>
                     <a href="tel:9884">0954212</a>
                  </div>
               </div>
            </div>
            <div class="col-xs-7 col-sm-5 col-md-3">
               <div class="topNav-right">
                  <a href="/cart">
                     <div class="cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="badge badge-secondary">{{selectedUserOrders}}</span>
                     </div>
                  </a>
                  <!-- <div class="lang">
                     <a href="#"><img src="@/assets/img/arbic.png" alt=""><span>العربية</span></a>
                  </div> -->
                  <!-- if not login -->
                  <transition name="list">
                  <div v-if="!this.$store.getters['auth/isAuthenticated']">
                     <a href="/registration">register</a> / <a href="/sign-in">sign in</a>
                  </div>
                  <!-- if login -->
                  <div v-else>
<<<<<<< HEAD
                     <a href="/profile" class="text-capitalize mr-4"><i class="fa fa-user mr-1" style="vertical-align: middle;" aria-hidden="true"></i>{{this.$store.getters['auth/StateUser'].name}}</a>
=======
                     <a href="profile" class="text-capitalize mr-4">{{this.$store.getters['auth/StateUser'].name}}</a>
>>>>>>> 5f780eaab8e1d3744787a9b7a65d5dc42fb91375
                     <a href="#" @click="signOut"> <i class="fa fa-sign-out-alt" style="vertical-align: middle;" aria-hidden="true"></i> sign out </a>
                  </div>
                  </transition>
               </div>
            </div>
         </div>
      </div>
   </div>
   <header role="banner" class="position-absolute-header">
      <!-- Top Navigation -->
      <nav class="background-transparent background-primary-dott full-width sticky">
         <!-- mobile version logo -->
         <div class="logosmll">
            <a href="/" class="">
               <img class="logo1" src="@/assets/img/logo.svg" alt="">
            </a>
         </div>
         <div class="top-nav heigh100">
            <!-- left menu items -->
            <div class="top-nav right-menu heigh100">
               <div class="container heigh100">
                  <div class="row heigh100">
                     <div class="col-md-3 editfloat">
                        <div class="flex">

                           <div class="header-search">
                              <form class="" v-on:submit.prevent="search">
                                 <input class="form-control" type="text" placeholder="search" v-model="searchWord">
                                 <button type="submit" @click="search"><i class="fa fa-search"></i></button>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-7 editfloat">
                        <ul class="right top-ul chevron">
                           <li><a class="active" href="/">HOME</a></li>
                           <li><a href="/shop">SHOP</a></li>
                           <li><a href="/contact-us">Contact us</a></li>
                           <!-- <li><a href="offers.html">OFFERS</a></li>
                           <li><a href="blog.html">BLOG</a></li> -->

                        </ul>

                     </div>


                     <div class="col-md-2 editfloat">
                        <a href="/" class="logo">
                           <img class="logo1" src="@/assets/img/logo.svg" alt="">
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   </header>
   <!-- /////////////////////||||||||||||||||||||||||||||| End Navbar |||||||||||||||||||||||||||| -->
  </section>
</template>

<script>
export default {
   data(){
      return {
         searchWord:'',
      }
   },
    methods: {
      search(){
        // console.log('search', this.$router.name == "search")
        if (this.$router.name != "search") {
          this.$router.push({ name: 'search'})
        }


        this.$store.dispatch('changeSearchValue', this.searchWord)
      },
      signOut(){
        this.$store.dispatch('auth/LogOut')
        this.$router.push({name: "index"});
      }
    },
    computed: {
      selectedUserOrders() {
        return this.$store.getters.selectedOrdersLength
      }
    },
}
</script>
<style>
   .list-enter,
   .list-leave-to {
   visibility: hidden;
   height: 0;
   margin: 0;
   padding: 0;
   opacity: 0;
   }

   .list-enter-active,
   .list-leave-active {
   transition: all 0.3s;
   }
</style>
