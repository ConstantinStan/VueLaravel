<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="card-title">
              {{ data.email}}
            </div>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>


    </div>

  </div>

</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        data: ''
      }
    },

    mounted(){
      console.log('call the dashboard')
      axios
        .get('/api/user')
        .then(response => {
          console.log(response.data)
          this.data = response.data;
        })
        .catch(error => {

        })
    }
  }
</script>
