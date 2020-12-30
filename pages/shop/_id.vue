<template>
     <section class="profile all-section ">
         <div class="container animate__animated wow">
            <div class="row">
               <div class="col-xs-12 col-md-5 ">
                  <div class="row">
                     <div class="col-xs-12 col-sm-9 contowl leftresp">

                        <div id="sync1" class="owl-carousel owl-theme">
                           <div class="item imagee" :data-hash="`zero${index}`" v-for="(img, index) in post.images">
                              <a data-fancybox="صور المنتج" data-caption="كرسى" :href="img">
                                 <img :src="img" class="scaleimg">
                              </a>
                           </div>
                        </div>

                     </div>

                     <div class="col-xs-12  col-sm-3 leftresp">
                        <div class="img-show">
                           <a class="button secondary url active" :href="`#zero${`zero${index}`}`"v-for="(img, index) in post.images"><img :src="img"></a>
                        </div>
                     </div>
                  </div>

               </div>

               <div class="col-xs-12 col-md-5 align-resp">
                  <div class="flexe3llan">
                     <p class="product-layName"> {{post.name}} </p>
                  </div>
                    <div v-html="post.info"></div>
                  <!-- <div class="editheightprogress">
                     <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                           aria-valuemin="0" aria-valuemax="100" style="width:70%">
                        </div>
                        <div class="clear"></div>
                        <div class="contentspan">
                           <div></div>
                           <div></div>
                           <div></div>
                           <div></div>
                           <div></div>
                        </div>
                     </div>
                  </div> -->

                  <div class="footer notfooter">
                     <div class="contentsocial">
                        <span>share link </span>
                        <ul class="social-networks square spin-icon">
                           <li><a href="" class="icon-instagram"><i class="fab fa-instagram"></i></a></li>
                           <li><a href="asd" class="icon-twitter"><i class="fab fa-twitter"></i></a></li>
                           <li><a href="" class="icon-facebook"><i class="fab fa-facebook-f"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-xs-12 col-md-2">
                  <div class="number-input">
                     <p class="disccolor"><span>{{priceAfterDiscount}} ريال</span>
                        <span>{{price}} ريال</span> </p>
                     <div class="number-input">
                        <div class="divbutton plus" @click="changeQua('plus')"> <i
                              class="fas fa-less-than"></i> </div>
                        <input class="quantity" min="0" type="number" v-model="quantity">
                        <div class="divbutton minus" @click="changeQua('minus')"> <i
                              class="fas fa-greater-than"></i></div>
                     </div>
                     <div class="contentbuttons">
                        <div class="product-option">
                           <a href="single.html" class="buttnedit btn-white "> add to cart</a>
                        </div>
                     </div>
                     <ul class="ulleftsingle">
                        <li> Satisfaction 100% Guaranteed</li>
                        <li> Free shipping on orders over $99 </li>
                        <li> 14 day easy Return</li>
                     </ul>
                  </div>
               </div>
               </div>
          </div>
      </section>
</template>

<script>
 export default {
     validate ({params}) {
      return !isNaN(params.id)
    },
   data(){
     return {
       post:{},
       price:0,
       quantity:1,
       priceAfterDiscount:null,
      }
    },
    mounted() {
      this.runExtrnalJs();
      this.price = this.post.price;
      this.priceAfterDiscount = (parseFloat(this.price) - (parseFloat(this.price) * (parseFloat(this.post.discount) / 100))).toFixed(3)
    },
  methods: {
     changeQua(minOrPlus){
          if (minOrPlus == "plus") {
               this.quantity++
          }
          else{
               if (this.quantity == 1) return ;
               this.quantity--
          }
     },
    runExtrnalJs(){
          $('#sync1').owlCarousel({
               rtl: true,
               loop: true,
               margin: 0,
               autoplay: false,
               smartSpeed: 2000,
               dragEndSpeed: 2000,
               dots: false,
               nav: true,
               navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"],
               responsive: {
                    0: {
                         items: 1
                    },
                    600: {
                         items: 1
                    },
                    1000: {
                         items: 1
                    }
               }
          });
     },
  },
  watch: {
    quantity: function (val) {
          this.price =  this.post.price  * this.quantity
          this.priceAfterDiscount = (parseFloat(this.price) - (parseFloat(this.price) * (parseFloat(this.post.discount) / 100))).toFixed(3)
    },
  },
  async asyncData({$axios, params}) {
      return $axios.$get(`api/products/${params.id}`).then( res => {
        return { post: res.data }
      })
    },
 }
</script>
