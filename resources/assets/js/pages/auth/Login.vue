<template>
   <div class="col-12">
     <div class="card card-shadowed px-50 py-30 w-400px mx-auto" style="max-width: 100%">
       <h5 class="text-uppercase">Sign in</h5>
       <br>

       <form class="form-type-material" @submit.prevent="login">
         <div class="form-group">
           <label for="email">Email</label>
           <input type="text" class="form-control" id="email" name="email" v-bind:class="{'is-invalid': form.errors.get('email')}" v-model="form.email">
           <div class="invalid-feedback" v-text="form.errors.get('email')"></div>
         </div>

         <div class="form-group">
           <label for="password">Password</label>
           <input type="password" class="form-control" id="password" name="password" v-model="form.password" v-bind:class="{'is-invalid': form.errors.get('password')}">
           <div class="invalid-feedback" v-text="form.errors.get('password')"></div>
         </div>

         <div class="form-group flexbox flex-column flex-md-row">
           <label class="custom-control custom-checkbox">
             <input type="checkbox" class="custom-control-input" checked>
             <span class="custom-control-indicator"></span>
             <span class="custom-control-description">Remember me</span>
           </label>

           <a class="text-muted hover-primary mt-2 mt-md-0" href="#">Forgot password?</a>
         </div>

         <div class="form-group">
           <button class="btn btn-bold btn-block btn-primary" type="submit">Login</button>
         </div>
       </form>

       <div class="divider">Or Sign In With</div>
       <div class="text-center">
         <a class="btn" href="#"><i class="fa fa-facebook"></i></a>
         <a class="btn" href="#"><i class="fa fa-google"></i></a>
         <a class="btn" href="#"><i class="fa fa-twitter"></i></a>
       </div>
     </div>
     <p class="text-center text-muted fs-13 mt-20">
       Don't have an account?
       <router-link to='/register'>
         <a class="text-primary fw-500" href="#">Sign up</a>
       </router-link>
     </p>
   </div>
</template>
<script>
  import Form from '../../helpers/Form.js';
  export default {
    data() {
      return {
        username: '',
        password: '',
        form: new Form({
          email: '',
          password: ''
        })
      }

    },
    mounted(){
      // if bearer is present redirect to dashboard
      let accessToken = localStorage.getItem('access_token');
      if (accessToken) {
        // Uncomment this if you want the user to be redirected if already logged in
        //this.$router.push({ path: 'dashboard' })
      }
    },
    methods: {
      login(){
        this.form.post('/login').then(response => {
          let accessToken = response.access_token;

          localStorage.setItem('access_token', accessToken);
          window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
          this.$router.push({ path: '/' })
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
