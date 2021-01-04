<template>
   <div class=" log-in ">
         <a href="/">
           <!--  <span class="block">The</span>
            <span class="block">Market</span> -->
            <img src="@/assets/img/logo1.svg" alt="">
         </a>
      <p class="loginaccont">Creat New Account </p>
      <form class="form form-login" v-on:submit.prevent="handleSubmit">
         <div class="row">
         </div>
         <div class="form-group">
            <input type="text" class="form-control" placeholder="name " v-model="message.name" required>
         </div>
         <div class="form-group">
            <input type="number" class="form-control" placeholder="phone " v-model="message.phone" required>
         </div>
         <div class="form-group">
            <input type="email" class="form-control" placeholder="email@info.com"  v-model="message.email" required>
         </div>
         <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"  v-model="message.message" required></textarea>
         </div>
         
         <div class="text-box">
            <button type="submit" class="buttnedit btn-white ">  submit</button>
        </div>
      </form>
       <div v-if="dataAdedd" type="success" :withCloseBtn="true" class="alert alert-success">
         sent successfully
      </div>

      <div v-if="errorMessage" type="danger" :withCloseBtn="true" class="alert alert-danger">
         {{errorMessage}}
      </div>
   </div>

</template>
<script>
export default {
   data () {
     return {
       message:{
            name:'',
            email:'',
            message:'',
            phone:''
         },
         errorMessage:'',
         dataAdedd:false
     }
  },
  methods: {
    handleSubmit(){
         if (this.message.name && this.message.email && this.message.message && this.message.phone) {
          this.errorMessage = "";
          let formData = new FormData();
          formData.set('name', this.message.name);
          formData.set('email', this.message.email);
          formData.set('message', this.message.message);
          formData.set('phone', this.message.phone);
          this.formData = formData;
          const config = {
               headers: {
               "Content-Type": "multipart/form-data"
               }
          };
    
     this.$axios.$post('api/contact', this.formData, config,
      ).then((response) => {
               if (response.status == true) {
                    this.dataAdedd = true;
                    let self = this;
                    setTimeout(
                    function() {
                         self.reset();
                    }, 2000);
               } 
               else{
                  this.errorMessage = response.msg 
                  console.log('this.errorMessage', this.errorMessage)
                  console.log('response.msg ', response.msg )
               }
          console.log(response)
     })
     }
    },

   reset(){
      this.message = {
         name:'',
         email:'',
         message:'',
      }
      this.errorMessage = false
      this.dataAdedd = false;
    }
  },
}
</script>

<style>
textarea.form-control{
   height:auto !important;
}
</style>