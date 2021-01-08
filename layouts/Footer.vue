<template>
  <section>


      <!-- /////////////////////||||||||||||||||||||||||||||| Start Footer |||||||||||||||||||||||||||| -->
      <div class="footer all-section">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 col-md-4 ">
                  <div class="rigtffoter">
                     <p class="p-m0"> 101 E 129th East chicago in ,</p>
                     <a href="tel:584855200000">tel : 9888875</a>
                     <a href="mailto:intoderective@gmail.com">intoderective@gmail.com</a>
                     <p class="copyright">Copyright 2020 <span>&copy;</span> TheMraket designe by leonard</p>
                  </div>
               </div>
               <!-- <div class="col-xs-6 col-md-2 mt12"> -->
                  <!-- <div class="foot1">
                     <h3> find fast</h3>
                     <ul class="linksfooter">
                        <li><a href="#">laptop $ computer</a></li>
                        <li><a href="#">smart phone $ tablet</a></li>
                        <li><a href="#">tv $ audio</a></li>
                        <li><a href="#">tv $ audio</a></li>
                     </ul>
                  </div> -->
               <!-- </div> -->
               <div class="col-xs-6 col-md-2 mt12">
                  <div class="foot1">
                     <h3> information</h3>
                     <ul class="linksfooter">
                        <li><a href="/about-us">about us</a></li>
                        <li><a href="/contact-us">contact us</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-xs-12 col-md-2 mt12">
                  <div class="foot1">
                     <h3> customre care</h3>
                     <ul class="linksfooter">
                        <li><a href="/profile">My Account</a></li>
                        <li><a href="/profile">order history</a></li>

                     </ul>
                  </div>
               </div>
               <div class="col-xs-12 col-md-3 mt12">
                  <!-- <h3> Sign up to new letter</h3>
                  <p class="footergray">sub scripe our newes letter gor got notfication about information discount</p>
                  <form action="../">
                     <div class="subdiv">
                        <input class="form-control inputsubscribe" type="email" placeholder=" enter your email">
                        <button type="submit">subscribe</button>
                     </div>
                  </form> -->
                  <a href="/" class="logo">
                     <img class="logo1" src="@/assets/img/logo.svg" alt="">
                  </a>
                  <div class="contentsocial">
                     <span>Git in touch</span>
                     <ul class="social-networks square spin-icon">
                        <li><a href="" class="icon-instagram"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="asd" class="icon-twitter"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="" class="icon-facebook"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="" class="icon-youtube"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="" class="icon-whatsapp"><i class="fab fa-whatsapp"></i></a></li>
                        <li><a href="" class="icon-snapchat"><i class="fab fa-snapchat-ghost"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
   <!-- ///////////end footer /////////////////// -->

   <!-- /////////////////////|||||||||||||||||||||||||||||  loadder |||||||||||||||||||||||||||| -->
   <div id="loader-wrapper">
      <div id="loader"></div>
   </div>
   <!-- /////////////////////||||||||||||||||||||||||||||| End loadder |||||||||||||||||||||||||||| -->
   <!-- /////////////////////||||||||||||||||||||||||||||| sroll top  |||||||||||||||||||||||||||| -->
   <div id="scrollUp" href="#top" >
      <i class="fas fa-arrow-up"></i>
   </div>
   <!-- /////////////////////||||||||||||||||||||||||||||| end sroll top  |||||||||||||||||||||||||||| -->
   <!-- /////////////////////||||||||||||||||||||||||||||| Start Script |||||||||||||||||||||||||||| -->
  </section>
</template>
<<script>
export default {
  mounted() {
    this.runExtrnalJs();
  },
  methods: {

    runExtrnalJs(){

      $("#loader-wrapper").fadeOut(1000);
        new WOW().init();

        //Responsee eside nav

        //Responsee nav
        // Add nav-text before top-nav
        $('.top-nav').before('<p class="nav-text"><span></span></p>');
        $('.top-nav > ul > li ul').each(function(index, element) {
          var count = $(element).find('li').length;
          var content = '<span class="count-number"> ' + count + '</span>';
          $(element).closest('li').children('a').append(content);
        });
        $('.top-nav > ul li:has(ul)').addClass('submenu');
        $('.top-nav > ul ul li:has(ul)').addClass('sub-submenu').removeClass('submenu');
        $('.top-nav > ul li.submenu > a').attr('aria-haspopup', 'true').click(function() {
          //Close other open sub menus
          $('.top-nav > ul li.submenu > ul').removeClass('show-ul', 'fast');
          $('.top-nav > ul li.submenu:hover > ul').toggleClass('show-ul', 'fast');
        });
        $('.top-nav > ul ul > li.sub-submenu > a').attr('aria-haspopup', 'true').click(function() {
          //Close other open sub menus
          $('.top-nav ul ul li > ul').removeClass('show-ul', 'fast');
          $('.top-nav ul ul li:hover > ul').toggleClass('show-ul', 'fast');
        });
        //Mobile navigation
        $('.nav-text').click(function() {
          $("body").toggleClass('show-menu');
        });

    }

  },
}
</script>
