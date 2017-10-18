<template>
  <div class="container">
    <div class="row">

      <div class="col-6 col-lg-3">
        <div class="card card-body text-center">
          <div class="fs-40 fw-100">72</div>
          <div>Projects</div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="card card-body text-center">
          <div class="fs-40 fw-100">2,718</div>
          <div>Pages</div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="card card-body text-center text-white bg-primary">
          <div class="fs-40 fw-100">+90</div>
          <div>Tasks</div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="card card-body text-center text-white bg-info">
          <div class="fs-40 fw-100">$1,417</div>
          <div>ROI</div>
        </div>
      </div>

      <div class="col-12 h-50px"></div>
      <div class="col-6 col-lg-3">
        <div class="card card-body text-white bg-purple">
          <div class="flexbox">
            <i class="fa fa-user-o fa-fw fs-40" aria-hidden="true"></i>
            <span class="fs-40 fw-100">7,292</span>
          </div>
          <div class="text-right">Initial</div>
        </div>
      </div>

      <div class="col-6 col-lg-3">
        <div class="card card-body bg-danger text-white">
          <div class="flexbox">
            <i class="fa fa-google-wallet fa-fw fs-40" aria-hidden="true"></i>
            <span class="fs-40">145</span>
          </div>
          <div class="text-right">Requests</div>
        </div>
      </div>

      <div class="col-6 col-lg-3">
        <div class="card card-body">
          <div class="flexbox">
            <i class="fa fa-user-o text-purple fa-fw fs-40" aria-hidden="true"></i>
            <span class="fs-40 fw-100">4,258</span>
          </div>
          <div class="text-right">Platforms</div>
        </div>
      </div>
      <div class="col-6 col-lg-3">
        <div class="card card-body">
          <div class="flexbox">
            <i class="fa fa-calculator text-danger fa-fw fs-40" aria-hidden="true"></i>
            <span class="fs-40">142</span>
          </div>
          <div class="text-right">Received</div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="row no-gutters py-2">
            <div class="col-sm-6 col-lg-3">
              <div class="card-body br-1 border-light">
                <div class="flexbox mb-1">
                  <span>
                    <i class="fa fa-clone fs-20"></i><br>
                    Total tasks
                  </span>
                  <span class="text-primary fs-40">34</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 40%; height: 4px;" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-3 hidden-down">
              <div class="card-body br-1 border-light">
                <div class="flexbox mb-1">
                  <span>
                    <i class="fa fa-envelope-o fs-20"></i><br>
                    Today Emails
                  </span>
                  <span class="text-info fs-40">18</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-info" role="progressbar" style="width: 75%; height: 4px;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-3 d-none d-lg-block">
              <div class="card-body br-1 border-light">
                <div class="flexbox mb-1">
                  <span>
                    <i class="fa fa-bug fs-20"></i><br>
                    Issues
                  </span>
                  <span class="text-warning fs-40">46</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-warning" role="progressbar" style="width: 15%; height: 4px;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-3 d-none d-lg-block">
              <div class="card-body">
                <div class="flexbox mb-1">
                  <span>
                    <i class="fa fa-map-o fs-20"></i><br>
                    New Tasks
                  </span>
                  <span class="text-danger fs-40">12</span>
                </div>
                <div class="progress">
                  <div class="progress-bar bg-danger" role="progressbar" style="width: 35%; height: 4px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('Component mounted.')
  }
}
</script>
