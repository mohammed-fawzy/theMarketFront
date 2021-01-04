<template>
  <section>
      <!-- /////////////////////||||||||||first section||||||||||////////////////////////// -->
      <!-- Swiper -->
      <div class="swiper-container">
         <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in home.banners" :key="banner.id">
               <img :src="banner.image" alt="">
               <div class="flexslide">
                  <p>best offer</p>
                  <p>{{banner.name}}</p>
                  <div class="text-box">
                     <a href="/shop" class="buttnedit btn-white "> shop now</a>
                  </div>

               </div>
            </div>
         </div>
         <!-- Add Arrows -->
         <div class="swiper-button-next"></div>
         <div class="swiper-button-prev"></div>
      </div>

      <!-- /////////////////////||||||||||end first section||||||||||////////////////////////// -->

      <!-- /////////////////////||||||||||third section||||||||||////////////////////////// -->
      <section class="all-section sec3">
         <div class="container">
            <div class="row">
               <div class="col-xs-6 col-md-3 align-center">
                  <div class="flexstatus">
                     <img src="@/assets/img/delivery-man.svg">
                     <div class="conentstatus">
                        <span class="block">Free Delivery</span>
                        <span class="block">for all order over 99$ </span>
                     </div>
                  </div>

               </div>
               <div class="col-xs-6 col-md-3 align-center">
                  <div class="flexstatus">
                     <img src="@/assets/img/exchange.svg">
                     <div class="conentstatus">
                        <span class="block"> 30 Days Return</span>
                        <span class="block">If goods have Problems </span>
                     </div>
                  </div>
               </div>
               <div class="col-xs-6 col-md-3 align-center">
                  <div class="flexstatus">
                     <img src="@/assets/img/secure-shield.svg">
                     <div class="conentstatus">
                        <span class="block">Secure Payment</span>
                        <span class="block">100% secure payment</span>
                     </div>
                  </div>
               </div>
               <div class="col-xs-6 col-md-3 align-center">
                  <div class="flexstatus">
                     <img src="@/assets/img/headphones.svg">
                     <div class="conentstatus">
                        <span class="block">24/7 Support</span>
                        <span class="block">Dedicated support</span>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>
      <!-- /////////////////////||||||||||end  third section||||||||||////////////////////////// -->

      <!-- /////////////////////||||||||||end forth section iso top||||||||||////////////////////////// -->
      <section class=" all-section ">
         <!-- animate__pulse wow animate__animated -->
         <div class="container">
            <h3 class="section-title">New arrivals</h3>
            <div class="row">
               <!-- <div class=" col-xs-12  button-group filters-button-group">
                  <button class="button womens" data-filter="*">All</button>
                  <button class="button" data-filter=".mens">Mens </button>
                  <button class="button" data-filter=".transition">Womeen </button>
                  <button class="button" data-filter=".kides">kides</button>
               </div> -->
            </div>
            <div class="grid1 grid2 over-hideen">
               <div class="row">

                  <div class="element-item transition kides col-xs-6 col-sm-6 col-md-2" data-category="transition"
                    v-for="product in home.last_products" :key="product.id">
                     <div class="product-container">
                        <div class="contentdesc">
                           <p>{{product.name}}</p>
                           <p>
                              {{product.info | strippedContent}}
                           </p>
                        </div>
                        <div class="product-image">
                           <div class="absdiv fire" v-if="product.sensor">
                              <img src="@/assets/img/thermometer.png" alt="" class="thermometer"><span>Thermometer</span>
                           </div>
                           <span class="hover-link"></span>
                           <img class="img-responsive" :src="product.image" alt="Lorem Ipsum">
                        </div>
                        <div class="product-description">
                           <div class="product-label">
                              <div class="product-name">

                                 <p class="price">{{product.price}}</p>
                              </div>
                           </div>
                           <div class="product-option">
                              <a :href="`shop/${product.id}`" class="buttnedit btn-white "> add to cart</a>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>
      <!-- /////////////////////||||||||||end forth section iso top||||||||||////////////////////////// -->
  </section>
</template>

<script>
 export default {
   data(){
     return {
       home:{}
      }
    },
    mounted() {
      this.runExtrnalJs()
    },
  methods: {

    runExtrnalJs(){
      var swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
        });
        /** iso top **/
      // external js: isotope.pkgd.js

      // init Isotope
      var $grid = $('.grid1').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      });
      // filter functions
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
      };
      // bind filter button click
      $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
      });
      // change is-checked class on buttons
      $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
      });
    },
  },
  filters: {
    strippedContent: function(string) {
           return string.replace(/<\/?[^>]+>/ig, " ");
    }
  },
  async asyncData({$axios, store}) {
      let res = await $axios.$get('api/home')
      store.dispatch('getData', res.data)
      return {home :res.data }
    },
 }
</script>

<style>
   .absdiv.fire{
      color:#2680EB;
   }
   img.thermometer{
      width: 16px;
      height: 16px;
   }
</style>