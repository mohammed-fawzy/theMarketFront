<template>
   <div class=" log-in ">
         <a href="/">
           <!--  <span class="block">The</span>
            <span class="block">Market</span> -->
            <img src="@/assets/img/logo1.svg" alt="">
         </a>
      <p class="loginaccont">Creat New Account </p>
      <form class="form form-login" action="index.html">
         <div class="row">
            <div class="col-md-6">
               <div class="form-group">
                  <input type="text" class="form-control" placeholder="First name">
               </div>
            </div>
            <div class="col-md-6">
               <div class="form-group">
                  <input type="text" class="form-control" placeholder="last name">
               </div>
            </div>

         </div>
         <div class="form-group">
            <input type="number" class="form-control" placeholder="phone ">
         </div>
         <div class="form-group">
            <input type="email" class="form-control" placeholder="email@info.com ">
         </div>
         <div class="form-group eye-relative">
            <input type=password class="form-control" placeholder="password">
         </div>
         <div class="form-group eye-relative">
            <input type=password class="form-control" placeholder="new password">
         </div>

         <div class="text-box">
            <button type="submit" class="buttnedit btn-white ">  sign up</button>
        </div>
         <p class=" dont-acount"><span> Already have an accoun</span><a href="sign-in"> login </a></p>
      </form>
   </div>

</template>