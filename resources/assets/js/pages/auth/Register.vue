<template>
    <div class="col-12">
      <div class="card card-shadowed px-50 py-30 w-400px mx-auto" style="max-width: 100%">
        <h5 class="text-uppercase">Create an account</h5>
        <br>

        <form class="form-type-material" @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" name="name" id="name" v-bind:class="{'is-invalid': form.errors.get('name')}" v-model="form.name">
            <div class="invalid-feedback" v-text="form.errors.get('name')"></div>
          </div>

          <div class="form-group">
            <label for="email">Email address</label>
            <input type="text" class="form-control" name="email" id="email" v-bind:class="{'is-invalid': form.errors.get('email')}" v-model="form.email">
            <div class="invalid-feedback" v-text="form.errors.get('email')"></div>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" id="password" v-bind:class="{'is-invalid': form.errors.get('password')}" v-model="form.password">
            <div class="invalid-feedback" v-text="form.errors.get('password')"></div>
          </div>

          <div class="form-group">
            <label for="password_confirmation">Password (confirm)</label>
            <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" v-model="form.password_confirmation">

          </div>

          <div class="form-group">
            <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">I agree to all <a class="text-primary" href="#">terms</a></span>
            </label>
          </div>

          <br>
          <button class="btn btn-bold btn-block btn-primary" type="submit" :disabled="form.errors.any()">Register</button>
        </form>
      </div>
      <p class="text-center text-muted fs-13 mt-20">
        <router-link to="/login">
          Already have an account? <a class="text-primary fw-500" href="#">Sign in</a>
        </router-link>
      </p>
    </div>
</template>

<script>
  import Form from '../../helpers/Form.js';

  export default {
    data(){
      return {
        form: new Form({
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        }),
        //errors: new Errors()
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
      submit(){
        //router.push({ path: 'dashboard' })

        this.form
          .post('/register')
          .then(response => {
            let accessToken = response.access_token;
            localStorage.setItem('access_token', accessToken);
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            this.$router.push({ path: '/' })
          })
          .catch(error => {
            console.log('error ....')
          });
      }
    }
  }
</script>
