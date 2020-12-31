<template>

  <section class="all-section">

      <div class="container">
        <div class="row">
            <div class="col-sm-3">

              <section id="content1">
                  <div id="accordion" class="accordion-container">
                    <article class="content-entry" :class="{ open: cat.accordionOpend }"
                      v-for="cat in categories" :key="cat.id">

                        <h4 class="article-title" @click="cat.accordionOpend = !cat.accordionOpend">
                          <i v-if="cat.sub_categories.length"></i>
                          {{cat.name}}
                        </h4>

                        <div class="accordion-content content-acrodion" :class="{ 'd-block': cat.accordionOpend}"
                         v-for="subCat in cat.sub_categories" :key="subCat.id">
                          <a href="#"> {{subCat.name}}</a>
                        </div>
                        
                    </article>
                  </div>
                  <!--/#accordion-->
              </section>
            </div><!--end col-->
            
            <div class="col-sm-9">

              <div class="breadcumbs">
                  <p>ALL PRODUCTS

                  </p>
              </div>

              <div class="contentprods wow animate__fadeInUp animate__animated" v-for="product in products.slice(0, 5)" :key="product.id">

                  <div class="row rowdirection">
                    <div class="col-xs-3">
                        <a href="single.html"><img class="imge3lan" :src="product.image" alt=""></a>
                    </div>

                    <div class="col-md-6">
                        <div class="flexe3llan"> <p class="product-layName"> {{product.name}}</p></div>
                        <div v-html="product.info"></div>
                    </div>
                    <div class="col-md-3">
                        <div class="number-input">
                          <p class="disccolor"><span>{{(parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discount) / 100))).toFixed(3)}} ريال</span>
                              <span>{{product.price}} ريال</span> </p>
                          <div class="contentbuttons">
                              <div class="product-option">
                                <a :href="`shop/${product.id}`" class="buttnedit btn-white "> add to cart</a>
                              </div>
                          </div>

                        </div>
                    </div>

                  </div>

              </div>
            </div><!--end col-->
        </div><!-- end row-->
      </div><!--end container-->
  </section>

</template>
<script>
import Vue from 'vue'
  export default {
    async asyncData({$axios}) {
      const [categories, products] = await Promise.all([ 
          $axios.$get('api/categories'),
          $axios.$get('api/sub-categories/0')
      ])
      categories.data.filter(cat => cat.accordionOpend = false)
      return { 
        categories: categories.data,
        products: products.data.items
      }
      
    },
    data(){
      return {
        categories: [],
        products:[],
      }
    },
    mounted() {
      console.log('categories', this.$store.state.categories)
    },
    methods: {

    },
  }
</script>
