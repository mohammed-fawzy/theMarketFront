(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{321:function(e,n,t){e.exports=t.p+"img/complete icon.80c410b.svg"},337:function(e,n,t){"use strict";t.r(n);t(3),t(205),t(7),t(24),t(20),t(16),t(54),t(63),t(56);var o=t(18),c={data:function(){return{selectedUserOrders:this.$store.state.selectedUserOrders,orders:[],load:!1,country:"",name:"",address:"",location:null,orderId:null,countries:[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]}},mounted:function(){this.runExtrnalJs(),this.loadSelectedOrder(this.selectedUserOrders),this.getLocation()},methods:{loadSelectedOrder:function(e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.filter((function(e,i,a){return a.findIndex((function(n){return n.id===e.id}))===i})),t.next=3,Promise.all(c.map(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$axios.$get("api/products/".concat(t.id));case 2:return o=e.sent,e.next=5,o.data;case 5:c=e.sent,n.orders.push(c),n.selectedUserOrders.filter((function(e){n.orders.filter((function(t){e.id==t.id&&n.$set(t,"quantity",e.quantity)}))})),n.load=!0;case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 3:case"end":return t.stop()}}),t)})))()},changeQua:function(e,n){if("plus"==e)n.quantity++;else{if(1==n.quantity)return;n.quantity--}},checkAuth:function(e){this.$store.getters["auth/isAuthenticated"]||this.$swal("You have to sign-in first")},deleteItem:function(e){this.$store.dispatch("deleteOrder",e),this.orders=[],this.loadSelectedOrder(this.selectedUserOrders)},getLocation:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new Promise((function(e,n){"geolocation"in navigator||n(new Error("Geolocation is not available.")),navigator.geolocation.getCurrentPosition((function(n){e(n)}),(function(e){n(e)}))})),n.next=3,t;case 3:e.location=n.sent;case 4:case"end":return n.stop()}}),n)})))()},sendTheCart:function(){var e=this;if(this.country||this.name||this.address){var n=[{products:this.orders.map((function(e){return{product_id:e.id,quantity:e.quantity}})),name:this.name,address:this.address,country:this.country,lat:this.location.coords.latitude||30.921697599999998,lng:this.location.coords.longitude||31.3973315}];console.log("cart",JSON.stringify(n)),this.$axios.$post("api/carts",{carts:n},{headers:{Accept:"application/json"}}).then((function(n){if(1==n.status)return e.orders.filter((function(n){e.$store.dispatch("deleteOrder",n)})),e.orders=[],n})).then((function(n){console.log("response",n),e.orderId=n.data.cart_id,document.getElementById("laststepOrder").click()}))}else this.$swal("please fill the data first!")},runExtrnalJs:function(){$("#smartwizard").smartWizard({selected:0,theme:"dots",autoAdjustHeight:!0,transitionEffect:"fade",showStepURLhash:!1})}},computed:{total:function(){return this.orders.map((function(e){return e.price*e.quantity})).reduce((function(a,b){return a+b}),0)}}},d=t(43),component=Object(d.a)(c,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("main",{attrs:{role:"main"}},[o("section",{staticClass:"profile all-section "},[o("div",{staticClass:"container animate__animated wow"},[o("h3",{staticClass:"titlesection"},[e._v("PRODUCR NAME")]),e._v(" "),e._m(0),e._v(" "),o("form",{attrs:{action:""}},[o("div",{attrs:{id:"smartwizard"}},[e._m(1),e._v(" "),o("div",[o("div",{staticClass:"steps",attrs:{id:"step-1"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-9"},[o("div",{staticClass:"tablecontent"},[e.orders.length&&e.load?o("table",{staticClass:"table tableborder"},[e._m(2),e._v(" "),o("tbody",e._l(e.orders,(function(n){return o("tr",{key:n.id},[o("td",{staticClass:"image"},[o("a",{staticClass:"media-link",attrs:{href:"shop/"+n.id}},[o("img",{attrs:{src:n.image,alt:""}})])]),e._v(" "),o("td",{staticClass:"orderno"},[e._v("\n                                          "+e._s(n.name)+"\n                                       ")]),e._v(" "),o("td",{staticClass:"total"},[e._v(e._s(n.price)+" ")]),e._v(" "),o("td",[o("div",{staticClass:"number-input"},[o("div",{staticClass:"divbutton plus",on:{click:function(t){return e.changeQua("minus",n)}}},[o("i",{staticClass:"fas fa-less-than"})]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:n.quantity,expression:"product.quantity"}],staticClass:"quantity",attrs:{min:"1",type:"number"},domProps:{value:n.quantity},on:{input:function(t){t.target.composing||e.$set(n,"quantity",t.target.value)}}}),e._v(" "),o("div",{staticClass:"divbutton minus",on:{click:function(t){return e.changeQua("plus",n)}}},[o("i",{staticClass:"fas fa-greater-than"})])])]),e._v(" "),o("td",{staticClass:"total"},[e._v(e._s(n.price*n.quantity)+" ")]),e._v(" "),o("td",{staticClass:"remove_item"},[o("i",{staticClass:"fas fa-times",on:{click:function(t){return e.deleteItem(n)}}})])])})),0)]):e._e()])]),e._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"contentdetalis"},[o("p",{staticClass:"aligne-center pcart"},[e._v("CART TOTAL")]),e._v(" "),o("div",{staticClass:"a-editdelet divmartop"},[o("div",{staticClass:"left-card"},[o("span",{staticClass:"rigt-span "},[e._v(" TOTAL ")]),e._v(" "),o("div",{staticClass:"left-span"},[o("span",{attrs:{id:"totalss"}},[e._v(e._s(e.total))]),e._v(" "),o("span",{},[e._v(" جنيه")])])]),e._v(" "),o("div",{staticClass:"left-card"})]),e._v(" "),o("div",{staticClass:"btn-group mr-2 sw-btn-group",attrs:{role:"group"}}),e._v(" "),o("div",{staticClass:"text-box"},[o("button",{staticClass:"buttnedit btn-white sw-btn-next",attrs:{type:"button"},on:{mousedown:e.checkAuth}},[e._v(" Next")])])])])])]),e._v(" "),o("div",{staticClass:"steps step2",attrs:{id:"step-2"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-9"},[o("div",{staticClass:"contentform"},[o("p",{staticClass:"aligne-center pcart"},[e._v(" BILLING ADDRESS")]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("country*")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],staticClass:"form-control",on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.country=n.target.multiple?t:t[0]}}},e._l(e.countries,(function(n){return o("option",{domProps:{value:n.name}},[e._v(e._s(n.name))])})),0)]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("name*")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(n){n.target.composing||(e.name=n.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v("address*")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.address},on:{input:function(n){n.target.composing||(e.address=n.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"})])]),e._v(" "),o("div",{staticClass:"col-md-3"},[o("div",{staticClass:"contentdetalis"},[o("p",{staticClass:"aligne-center pcart edittotal"},[e._v("CART TOTAL")]),e._v(" "),e._m(3),e._v(" "),o("div",{staticClass:"btn-group mr-2 sw-btn-group",attrs:{role:"group"}}),e._v(" "),o("div",{staticClass:"text-box"},[o("button",{staticClass:"buttnedit btn-white sw-btn-next ",attrs:{type:"button",id:"laststepOrder"},on:{mousedown:e.sendTheCart}},[e._v(" PLACE ORDER")])])])])])]),e._v(" "),o("div",{staticClass:"steps",attrs:{id:"step-3"}},[o("div",{staticClass:"contentcheck"},[o("img",{staticClass:"animate__backInDown  wow  animate__animated",attrs:{src:t(321),alt:""}}),e._v(" "),o("p",{staticClass:"pcolorcheck"},[e._v("Order NO "),e.orderId?o("span",[e._v(e._s(e.orderId))]):e._e()]),e._v(" "),o("p",{staticClass:"peditwidth"},[e._v("Thank you for ordering in our app.\n                           check the Tracker progress with your order.")]),e._v(" "),e._m(4)])])])])])])])])}),[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"breadcumbs"},[n("p",[n("a",{attrs:{href:"/"}},[this._v("Home")]),n("i",{staticClass:"fas fa-greater-than"}),this._v(" "),n("a",{staticClass:"activecumbs",attrs:{href:"/shop"}},[this._v("Shopping Cart")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"#step-1"}},[this._v("SHOPPING CART")])]),this._v(" "),n("li",[n("a",{attrs:{href:"#step-2"}},[this._v("CHECK OUT")])]),this._v(" "),n("li",[n("a",{attrs:{href:"#step-3"}},[this._v("ORDER COMPLETED")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",[t("tr",[t("th",[e._v("img")]),e._v(" "),t("th",[e._v("product_name")]),e._v(" "),t("th",[e._v(" price")]),e._v(" "),t("th",[e._v("quntity")]),e._v(" "),t("th",[e._v("total")]),e._v(" "),t("th",[e._v("opreation")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"a-editdelet divmartop"},[n("div",{staticClass:"left-card"},[n("span",{staticClass:"rigt-span "},[this._v(" order TOTAL")]),this._v(" "),n("div",{staticClass:"left-span "},[n("span",{attrs:{id:"discount"}},[this._v(" 460.00")]),this._v(" "),n("span",{},[this._v(" $ ")])])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"text-box"},[n("a",{staticClass:"buttnedit btn-white ",attrs:{href:"/shop"}},[this._v(" shop now")])])}],!1,null,null,null);n.default=component.exports}}]);