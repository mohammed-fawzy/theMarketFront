<template>
        <main role="main">

      <section class="profile all-section ">
         <div class="container animate__animated wow">

            <h3 class="titlesection">PRODUCR NAME</h3>
            <div class="breadcumbs">
               <p><a href="/">Home</a><i class="fas fa-greater-than"></i>
                  <a href="/shop" class="activecumbs">Shopping Cart</a>
               </p>
            </div>

            <form action="">
               <div id="smartwizard">
                  <ul>
                     <li><a href="#step-1">SHOPPING CART</a></li>
                     <li><a href="#step-2">CHECK OUT</a></li>
                     <li><a href="#step-3">ORDER COMPLETED</a></li>
                     <!--  <li><a href="#step-4">Step 4<br /><small>Confirm details</small></a></li> -->
                  </ul>

                  <div>

                     <div id="step-1" class="steps">
                        <div class="row">
                           <div class="col-md-9">
                              <div class="tablecontent">
                                 <table class="table tableborder" v-if="orders.length && load">
                                    <thead>
                                       <tr>
                                          <th>img</th>
                                          <th>product_name</th>
                                          <th> price</th>
                                          <th>quntity</th>
                                          <th>total</th>
                                          <th>opreation</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr v-for="product in orders" :key="product.id">
                                          <td class="image"><a class="media-link" :href="`shop/${product.id}`">
                                                <img :src="product.image" alt="" /></a>
                                          </td>
                                          <td class="orderno">
                                             {{product.name}}
                                          </td>
                                          <td class="total">{{product.price}} </td>
                                          <td>
                                             <div class="number-input">
                                                <div class="divbutton plus"
                                                   @click="changeQua('minus', product)"> <i
                                                      class="fas fa-less-than"></i> </div>

                                                <input class="quantity" min="1" type="number" v-model="product.quantity">

                                                <div class="divbutton minus"
                                                   @click="changeQua('plus', product)"> <i
                                                      class="fas fa-greater-than"></i></div>
                                             </div>
                                          </td>
                                          <td class="total">{{product.price * product.quantity}} </td>
                                          <td class="remove_item"><i class="fas fa-times" @click="deleteItem(product)"></i> </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           <div class="col-md-3">
                              <div class="contentdetalis">
                                 <p class="aligne-center pcart">CART TOTAL</p>
                                 <div class="a-editdelet divmartop">
                                    <div class="left-card">
                                       <span class="rigt-span "> TOTAL </span>
                                       <div class="left-span">
                                          <span id="totalss">{{total}}</span>
                                          <span class=""> جنيه</span>
                                       </div>
                                    </div>

                                    <div class="left-card">
                                       <!-- <span class="rigt-span "> GRAND TOTAL</span>
                                       <div class="left-span ">
                                          <span id="discount"> 460.00</span>
                                          <span class=""> $ </span>
                                       </div> -->
                                    </div>
                                 </div>
                                 <div class="btn-group mr-2 sw-btn-group" role="group"></div>
                                 <div class="text-box">
                                    <button type="button" class="buttnedit btn-white sw-btn-next" @mousedown="checkAuth"> Next</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div id="step-2" class="steps step2">
                        <div class="row">
                           <div class="col-md-9">
                              <div class="contentform">
                                 <p class="aligne-center pcart"> BILLING ADDRESS</p>
                                 <div class="form-group">
                                    <label for="">country*</label>
                                    <select class="form-control" v-model="country">
                                       <option v-for="country in countries" :value="country.name">{{country.name}}</option>
                                    </select>
                                 </div>
                                 <div class="form-group">
                                    <label for="">name*</label>
                                    <input type="text" class="form-control" v-model="name">
                                 </div>
                                 <div class="form-group">
                                    <label for="">address*</label>
                                    <input type="text" class="form-control" v-model="address">
                                 </div>
                                 <div class="form-group"></div>

                              </div>

                           </div>

                           <div class="col-md-3">
                              <div class="contentdetalis">
                                 <p class="aligne-center pcart edittotal">CART TOTAL</p>
                                 <div class="a-editdelet divmartop">
                                    <!-- <div class="left-card">
                                       <span class="rigt-span "> SUB TOTAL </span>
                                       <div class="left-span">
                                          <span id="totalss">460.00</span>
                                          <span class=""> $</span>
                                       </div>
                                    </div> -->
                                    <!-- <div class="left-card">
                                       <span class="rigt-span "> GRAND TOTAL</span>
                                       <div class="left-span ">
                                          <span id="discount"> 460.00</span>
                                          <span class=""> $ </span>
                                       </div>
                                    </div>
                                    <div class="left-card">
                                       <span class="rigt-span "> GRAND TOTAL</span>
                                       <div class="left-span ">
                                          <span id="discount"> 460.00</span>
                                          <span class=""> $ </span>
                                       </div>
                                    </div> -->
                                    <div class="left-card">
                                       <span class="rigt-span "> order TOTAL</span>
                                       <div class="left-span ">
                                          <span id="discount"> 460.00</span>
                                          <span class=""> $ </span>
                                       </div>
                                    </div>
                                    <!-- <div class="form-check">
                                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                       <label class="form-check-label" for="defaultCheck1">
                                          Create an account?
                                       </label>
                                    </div>
                                    <div class="form-check">
                                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                       <label class="form-check-label" for="defaultCheck1">
                                          payment on Delivery
                                       </label>
                                    </div>
                                    <div class="form-check">
                                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                       <label class="form-check-label" for="defaultCheck1">
                                          PayPal
                                       </label>
                                    </div> -->
                                 </div>
                                 <div class="btn-group mr-2 sw-btn-group" role="group"></div>
                                 <div class="text-box">
                                    <button type="button" class="buttnedit btn-white sw-btn-next " @mousedown="sendTheCart"> PLACE ORDER</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="step-3" class="steps">
                        <div class='contentcheck'>
                           <img src="img/complete icon.svg" class="animate__backInDown  wow  animate__animated" alt="">
                           <p class="pcolorcheck">Order NO. 54878878545</p>
                           <p class="peditwidth">Thank you for ordering in our app.
                              check the Tracker progress with your order.</p>
                           <div class="text-box">
                              <a href="/shop" class="buttnedit btn-white "> shop now</a>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
         </form>
         </div>
      </section>
   </main>
</template>

<script>
export default {
   data(){
     return {
        selectedUserOrders: this.$store.state.selectedUserOrders,
        orders:[],
        load:false,
        country:'',
        name:'',
        address:'',
        location:null,
        countries:[
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Åland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'AndorrA', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'},
            {name: 'Barbados', code: 'BB'},
            {name: 'Belarus', code: 'BY'},
            {name: 'Belgium', code: 'BE'},
            {name: 'Belize', code: 'BZ'},
            {name: 'Benin', code: 'BJ'},
            {name: 'Bermuda', code: 'BM'},
            {name: 'Bhutan', code: 'BT'},
            {name: 'Bolivia', code: 'BO'},
            {name: 'Bosnia and Herzegovina', code: 'BA'},
            {name: 'Botswana', code: 'BW'},
            {name: 'Bouvet Island', code: 'BV'},
            {name: 'Brazil', code: 'BR'},
            {name: 'British Indian Ocean Territory', code: 'IO'},
            {name: 'Brunei Darussalam', code: 'BN'},
            {name: 'Bulgaria', code: 'BG'},
            {name: 'Burkina Faso', code: 'BF'},
            {name: 'Burundi', code: 'BI'},
            {name: 'Cambodia', code: 'KH'},
            {name: 'Cameroon', code: 'CM'},
            {name: 'Canada', code: 'CA'},
            {name: 'Cape Verde', code: 'CV'},
            {name: 'Cayman Islands', code: 'KY'},
            {name: 'Central African Republic', code: 'CF'},
            {name: 'Chad', code: 'TD'},
            {name: 'Chile', code: 'CL'},
            {name: 'China', code: 'CN'},
            {name: 'Christmas Island', code: 'CX'},
            {name: 'Cocos (Keeling) Islands', code: 'CC'},
            {name: 'Colombia', code: 'CO'},
            {name: 'Comoros', code: 'KM'},
            {name: 'Congo', code: 'CG'},
            {name: 'Congo, The Democratic Republic of the', code: 'CD'},
            {name: 'Cook Islands', code: 'CK'},
            {name: 'Costa Rica', code: 'CR'},
            {name: 'Cote D\'Ivoire', code: 'CI'},
            {name: 'Croatia', code: 'HR'},
            {name: 'Cuba', code: 'CU'},
            {name: 'Cyprus', code: 'CY'},
            {name: 'Czech Republic', code: 'CZ'},
            {name: 'Denmark', code: 'DK'},
            {name: 'Djibouti', code: 'DJ'},
            {name: 'Dominica', code: 'DM'},
            {name: 'Dominican Republic', code: 'DO'},
            {name: 'Ecuador', code: 'EC'},
            {name: 'Egypt', code: 'EG'},
            {name: 'El Salvador', code: 'SV'},
            {name: 'Equatorial Guinea', code: 'GQ'},
            {name: 'Eritrea', code: 'ER'},
            {name: 'Estonia', code: 'EE'},
            {name: 'Ethiopia', code: 'ET'},
            {name: 'Falkland Islands (Malvinas)', code: 'FK'},
            {name: 'Faroe Islands', code: 'FO'},
            {name: 'Fiji', code: 'FJ'},
            {name: 'Finland', code: 'FI'},
            {name: 'France', code: 'FR'},
            {name: 'French Guiana', code: 'GF'},
            {name: 'French Polynesia', code: 'PF'},
            {name: 'French Southern Territories', code: 'TF'},
            {name: 'Gabon', code: 'GA'},
            {name: 'Gambia', code: 'GM'},
            {name: 'Georgia', code: 'GE'},
            {name: 'Germany', code: 'DE'},
            {name: 'Ghana', code: 'GH'},
            {name: 'Gibraltar', code: 'GI'},
            {name: 'Greece', code: 'GR'},
            {name: 'Greenland', code: 'GL'},
            {name: 'Grenada', code: 'GD'},
            {name: 'Guadeloupe', code: 'GP'},
            {name: 'Guam', code: 'GU'},
            {name: 'Guatemala', code: 'GT'},
            {name: 'Guernsey', code: 'GG'},
            {name: 'Guinea', code: 'GN'},
            {name: 'Guinea-Bissau', code: 'GW'},
            {name: 'Guyana', code: 'GY'},
            {name: 'Haiti', code: 'HT'},
            {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
            {name: 'Holy See (Vatican City State)', code: 'VA'},
            {name: 'Honduras', code: 'HN'},
            {name: 'Hong Kong', code: 'HK'},
            {name: 'Hungary', code: 'HU'},
            {name: 'Iceland', code: 'IS'},
            {name: 'India', code: 'IN'},
            {name: 'Indonesia', code: 'ID'},
            {name: 'Iran, Islamic Republic Of', code: 'IR'},
            {name: 'Iraq', code: 'IQ'},
            {name: 'Ireland', code: 'IE'},
            {name: 'Isle of Man', code: 'IM'},
            {name: 'Israel', code: 'IL'},
            {name: 'Italy', code: 'IT'},
            {name: 'Jamaica', code: 'JM'},
            {name: 'Japan', code: 'JP'},
            {name: 'Jersey', code: 'JE'},
            {name: 'Jordan', code: 'JO'},
            {name: 'Kazakhstan', code: 'KZ'},
            {name: 'Kenya', code: 'KE'},
            {name: 'Kiribati', code: 'KI'},
            {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
            {name: 'Korea, Republic of', code: 'KR'},
            {name: 'Kuwait', code: 'KW'},
            {name: 'Kyrgyzstan', code: 'KG'},
            {name: 'Lao People\'S Democratic Republic', code: 'LA'},
            {name: 'Latvia', code: 'LV'},
            {name: 'Lebanon', code: 'LB'},
            {name: 'Lesotho', code: 'LS'},
            {name: 'Liberia', code: 'LR'},
            {name: 'Libyan Arab Jamahiriya', code: 'LY'},
            {name: 'Liechtenstein', code: 'LI'},
            {name: 'Lithuania', code: 'LT'},
            {name: 'Luxembourg', code: 'LU'},
            {name: 'Macao', code: 'MO'},
            {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
            {name: 'Madagascar', code: 'MG'},
            {name: 'Malawi', code: 'MW'},
            {name: 'Malaysia', code: 'MY'},
            {name: 'Maldives', code: 'MV'},
            {name: 'Mali', code: 'ML'},
            {name: 'Malta', code: 'MT'},
            {name: 'Marshall Islands', code: 'MH'},
            {name: 'Martinique', code: 'MQ'},
            {name: 'Mauritania', code: 'MR'},
            {name: 'Mauritius', code: 'MU'},
            {name: 'Mayotte', code: 'YT'},
            {name: 'Mexico', code: 'MX'},
            {name: 'Micronesia, Federated States of', code: 'FM'},
            {name: 'Moldova, Republic of', code: 'MD'},
            {name: 'Monaco', code: 'MC'},
            {name: 'Mongolia', code: 'MN'},
            {name: 'Montserrat', code: 'MS'},
            {name: 'Morocco', code: 'MA'},
            {name: 'Mozambique', code: 'MZ'},
            {name: 'Myanmar', code: 'MM'},
            {name: 'Namibia', code: 'NA'},
            {name: 'Nauru', code: 'NR'},
            {name: 'Nepal', code: 'NP'},
            {name: 'Netherlands', code: 'NL'},
            {name: 'Netherlands Antilles', code: 'AN'},
            {name: 'New Caledonia', code: 'NC'},
            {name: 'New Zealand', code: 'NZ'},
            {name: 'Nicaragua', code: 'NI'},
            {name: 'Niger', code: 'NE'},
            {name: 'Nigeria', code: 'NG'},
            {name: 'Niue', code: 'NU'},
            {name: 'Norfolk Island', code: 'NF'},
            {name: 'Northern Mariana Islands', code: 'MP'},
            {name: 'Norway', code: 'NO'},
            {name: 'Oman', code: 'OM'},
            {name: 'Pakistan', code: 'PK'},
            {name: 'Palau', code: 'PW'},
            {name: 'Palestinian Territory, Occupied', code: 'PS'},
            {name: 'Panama', code: 'PA'},
            {name: 'Papua New Guinea', code: 'PG'},
            {name: 'Paraguay', code: 'PY'},
            {name: 'Peru', code: 'PE'},
            {name: 'Philippines', code: 'PH'},
            {name: 'Pitcairn', code: 'PN'},
            {name: 'Poland', code: 'PL'},
            {name: 'Portugal', code: 'PT'},
            {name: 'Puerto Rico', code: 'PR'},
            {name: 'Qatar', code: 'QA'},
            {name: 'Reunion', code: 'RE'},
            {name: 'Romania', code: 'RO'},
            {name: 'Russian Federation', code: 'RU'},
            {name: 'RWANDA', code: 'RW'},
            {name: 'Saint Helena', code: 'SH'},
            {name: 'Saint Kitts and Nevis', code: 'KN'},
            {name: 'Saint Lucia', code: 'LC'},
            {name: 'Saint Pierre and Miquelon', code: 'PM'},
            {name: 'Saint Vincent and the Grenadines', code: 'VC'},
            {name: 'Samoa', code: 'WS'},
            {name: 'San Marino', code: 'SM'},
            {name: 'Sao Tome and Principe', code: 'ST'},
            {name: 'Saudi Arabia', code: 'SA'},
            {name: 'Senegal', code: 'SN'},
            {name: 'Serbia and Montenegro', code: 'CS'},
            {name: 'Seychelles', code: 'SC'},
            {name: 'Sierra Leone', code: 'SL'},
            {name: 'Singapore', code: 'SG'},
            {name: 'Slovakia', code: 'SK'},
            {name: 'Slovenia', code: 'SI'},
            {name: 'Solomon Islands', code: 'SB'},
            {name: 'Somalia', code: 'SO'},
            {name: 'South Africa', code: 'ZA'},
            {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
            {name: 'Spain', code: 'ES'},
            {name: 'Sri Lanka', code: 'LK'},
            {name: 'Sudan', code: 'SD'},
            {name: 'Suriname', code: 'SR'},
            {name: 'Svalbard and Jan Mayen', code: 'SJ'},
            {name: 'Swaziland', code: 'SZ'},
            {name: 'Sweden', code: 'SE'},
            {name: 'Switzerland', code: 'CH'},
            {name: 'Syrian Arab Republic', code: 'SY'},
            {name: 'Taiwan, Province of China', code: 'TW'},
            {name: 'Tajikistan', code: 'TJ'},
            {name: 'Tanzania, United Republic of', code: 'TZ'},
            {name: 'Thailand', code: 'TH'},
            {name: 'Timor-Leste', code: 'TL'},
            {name: 'Togo', code: 'TG'},
            {name: 'Tokelau', code: 'TK'},
            {name: 'Tonga', code: 'TO'},
            {name: 'Trinidad and Tobago', code: 'TT'},
            {name: 'Tunisia', code: 'TN'},
            {name: 'Turkey', code: 'TR'},
            {name: 'Turkmenistan', code: 'TM'},
            {name: 'Turks and Caicos Islands', code: 'TC'},
            {name: 'Tuvalu', code: 'TV'},
            {name: 'Uganda', code: 'UG'},
            {name: 'Ukraine', code: 'UA'},
            {name: 'United Arab Emirates', code: 'AE'},
            {name: 'United Kingdom', code: 'GB'},
            {name: 'United States', code: 'US'},
            {name: 'United States Minor Outlying Islands', code: 'UM'},
            {name: 'Uruguay', code: 'UY'},
            {name: 'Uzbekistan', code: 'UZ'},
            {name: 'Vanuatu', code: 'VU'},
            {name: 'Venezuela', code: 'VE'},
            {name: 'Viet Nam', code: 'VN'},
            {name: 'Virgin Islands, British', code: 'VG'},
            {name: 'Virgin Islands, U.S.', code: 'VI'},
            {name: 'Wallis and Futuna', code: 'WF'},
            {name: 'Western Sahara', code: 'EH'},
            {name: 'Yemen', code: 'YE'},
            {name: 'Zambia', code: 'ZM'},
            {name: 'Zimbabwe', code: 'ZW'}
            ]
      }
    },
   mounted() {
      this.runExtrnalJs()
      this.loadSelectedOrder(this.selectedUserOrders)
      this.getLocation()
    },
   methods: {
      async loadSelectedOrder(selectedUserOrders){
         //remove dublicate
         let uniqueOrdersIds = selectedUserOrders.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i);
         await Promise.all(
         uniqueOrdersIds.map(async (selectedOrder) => {
            const response = await  this.$axios.$get(`api/products/${selectedOrder.id}`)
            let product = await response.data
            this.orders.push(product);
            this.selectedUserOrders.filter(item => {
            this.orders.filter(order => {
               if (item.id == order.id){
                  this.$set(order,'quantity', item.quantity)
               }
            })
            })
            this.load = true
      }))
      },
      changeQua(minOrPlus,order){
         if (minOrPlus == "plus") {
            order.quantity++
         }
         else{
            if (order.quantity == 1) return ;
               order.quantity--
         }
      },
   checkAuth(e){
      if (!this.$store.getters['auth/isAuthenticated']) {
         // Use sweetalert2
         this.$swal('You have to sign-in first');
         return
      }
   },
   deleteItem(deleteOrder){
      this.$store.dispatch('deleteOrder', deleteOrder);
      this.orders = []
      this.loadSelectedOrder(this.selectedUserOrders);
   },
  async getLocation() {

      let location = new Promise((resolve, reject) => {

        if(!("geolocation" in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }

        navigator.geolocation.getCurrentPosition(pos => {
          resolve(pos);
        }, err => {
          reject(err);
        });

      });
      this.location = await location;
    },
   sendTheCart(){
      if (!this.country && !this.name && !this.address) {
         this.$swal('please fill the data first!');
         return
      }
      const config = {
         headers: {
         'Accept': 'application/json',
         }
      }
      let remapOrders = this.orders.map(({ id, quantity }) => ({product_id:id, quantity:quantity}));
      let cart = [{
         products: remapOrders,
         name:this.name,
         address:this.address,
         country:this.country,
         "lat":this.location.coords.latitude || 30.921697599999998,
         "lng":this.location.coords.longitude || 31.3973315,
      }]
      console.log('cart', JSON.stringify(cart) )
      this.$axios.$post(`api/carts`, {"carts":cart} , config ).then((response) => {
         if(response.status == true){
            this.orders.filter(order => {
               this.$store.dispatch('deleteOrder', order);
            })
            this.orders = []
         }
      })
   },
   runExtrnalJs(){
      $('#smartwizard').smartWizard({
            selected: 0,
            theme: 'dots',
            autoAdjustHeight: true,
            transitionEffect: 'fade',
            showStepURLhash: false,
         });
     }
  },
  computed: {
   total() {
      let totalArray = this.orders.map(order => {
         return order.price * order.quantity
      })
      return totalArray.reduce(function(a, b){
         return a + b;
      }, 0);
   }
  }
}
</script>
