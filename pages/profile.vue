<template>
        <main role="main">
      <section class="profile all-section ">
         <div class="container">
            <div class="row">
               <div class="col-md-2">
                  <h3 class="titlesection">profile</h3>
                  <div class="breadcumbs">
                     <p><a href="index.html">Home</a><i class="fas fa-greater-than"></i>
                        <a href="profile.html" class="activecumbs">profile</a>
                     </p>
                  </div>
                  <ul class="nav nav-tabs tabs-left" role="tablist">
                     <li role="presentation" class="active"><a href="#profile" aria-controls="profile" role="tab"
                           data-toggle="tab">user profile </a></li>
                     <li role="presentation"><a href="#orders" aria-controls="orders" role="tab" data-toggle="tab">my
                           orders</a>
                     </li>
                  </ul>
               </div>
               <div class="col-md-10">
                  <div class="tab-content bacwhitecontent">
                     <div role="tabpanel" class="tab-pane active" id="profile">
                        <form class="form form-login proffileform" action="index.html">
                           <img class="imgprofile" src="img/anime.jpg" alt="">
                           <div class="row">
                              <div class="col-md-6">
                                 <div class="form-group">
                                    <input type="text" class="form-control" value="asmaa " readonly
                                       placeholder="First name">
                                 </div>
                              </div>
                              <div class="col-md-6">
                                 <div class="form-group">
                                    <input type="text" class="form-control" value="esmail " readonly
                                       placeholder="last name">
                                 </div>
                              </div>
                           </div>
                           <div class="form-group">
                              <input type="number" value="025825" class="form-control" readonly placeholder="phone ">
                           </div>
                           <div class="form-group">
                              <input type="email" class="form-control" readonly placeholder="email@info.com "
                                 value="email@info.com ">
                           </div>
                           <div class="form-group eye-relative">
                              <input type=password class="form-control" placeholder="password" readonly
                                 value=".....35 ">
                           </div>
                        </form>
                        <div class="text-box">
                           <button class="buttnedit btn-white " data-toggle="modal" data-target="#demo1"> edit</button>
                        </div>
                     </div>
                     <div role="tabpanel" class="tab-pane" id="orders">
                        <!-- <div class="row orders" id="shopping-cart"> -->
                        <div class="">
                           <div class="tablecontent">
                              <table class="table ">
                                 <thead>
                                    <tr>
                                       <th></th>
                                       <th>orders no</th>
                                       <th> payment</th>
                                       <th>deliver_to</th>
                                       <th>total</th>
                                       <th>status</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td class="image"><a class="media-link" href="orders.html">
                                             <img src="img/background.png" alt="" /></a>
                                       </td>
                                       <td class="orderno">
                                          010251521
                                       </td>
                                       <td>online</td>
                                       <td class="">
                                          location
                                       </td>
                                       <td class="total">150 </td>
                                       <td class="">preparing </td>
                                    </tr>
                                    <tr>
                                       <td class="image"><a class="media-link" href="orders.html">
                                             <img src="img/background-1.png" alt="" /></a>
                                       </td>
                                       <td class="orderno">
                                          010251521
                                       </td>
                                       <td>online</td>
                                       <td class="">
                                          location
                                       </td>
                                       <td class="total">150 </td>
                                       <td class="">preparing </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                        <nav aria-label="...">
                           <ul class="pagination">
                              <li class="page-item disabled">
                                 <span class="page-link">Previous</span>
                              </li>
                              <li class="page-item"><a class="page-link" href="#">1</a></li>
                              <li class="page-item active">
                                 <span class="page-link">
                                    2
                                    <span class="sr-only">(current)</span>
                                 </span>
                              </li>
                              <li class="page-item"><a class="page-link" href="#">3</a></li>
                              <li class="page-item">
                                 <a class="page-link" href="#">Next</a>
                              </li>
                           </ul>
                        </nav>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>
      <!-- edit profile -->
      <div class="modal fade" id="demo1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         <div class="modal-dialog opacity-animate4">
            <div class="modal-content aligne-right">
               <div class="modal-body aligne-right">
                  <ul id="error" class="list-unstyled"></ul>
                  <form class="form " action="profile.html">
                     <div class=" profile-content">
                        <div class="profile1 sec-profile profile-edit text-center profile-content1">
                           <div class="form-group">
                              <div class="profile-pic text-center">
                                 <div class="images-upload-block photo ">
                                    <label class="upload-img photo" style="background-image: url(img/pic.jpg)">
                                       <input type="file" accept="image/*" name="avatar" id="avatar"
                                          class="image-uploader form-control">
                                       <i class="fa fa-plus"></i>
                                    </label>
                                    <small class="form-text text-danger" id="avatar_error"></small>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
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
                        <input type="password" class="form-control" placeholder="password">
                     </div>
                     <div class="form-group eye-relative">
                        <input type="password" class="form-control" placeholder="new password">
                     </div>
                     <div class="text-box">
                        <button type="submit" class="buttnedit btn-white "> submt</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>