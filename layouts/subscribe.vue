<template>
  <div>
    <slot />
    <div class="subscribe">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6 col-lg-5">
            <div class="sub_side_image">
              <img src="/images/subside.png" class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-md-6 col-lg-4 offset-lg-2">
            <div class="subscribe_content">
              <h6>Don't Miss Out</h6>
              <p>
                The best homes sell fast. See the latest listings, inspiring
                vacation homes and buying tips.
              </p>
            </div>
            <div class="subscribe_form">
              <FormsSubscribe />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subscribe {
  position: relative;
  padding: 80px 0;
  display: flex;
  align-items: center;
  z-index: 9;
  background: rgba(82, 49, 116, 0.17);
}
.subscribe:before {
  position: absolute;
  content: "";
  background: url(/images/subback.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
  height: 85%;
  width: 95%;
  left: 0;
  z-index: -9;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
}
.sub_side_image img {
  width: 400px;
}

.sub_side_image {
  text-align: center;
}
.subscribe_content {
  text-align: center;
}
.subscribe_content h6 {
  color: #000;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.subscribe_content p {
  color: #000;
  font-size: 15px;
  font-weight: 400;
}
.subscribe_form {
  margin-top: 30px;
}

@media screen and (max-width: 2560px) {
  .subscribe {
    background-size: cover;
  }
}

@media screen and (max-width: 991.98px) {
  .subscribe_content h6 {
    font-size: 29px;
    margin-bottom: 10px;
  }
  .subscribe_content p {
    font-size: 13px;
  }
  .subscribe_form {
    margin-top: 20px;
  }
}

@media screen and (max-width: 767.98px) {
  .subscribe {
    background-position: left;
    padding: 30px 0;
  }
  .subscribe_content {
    padding: 0 32px;
  }
  .subscribe_content h6 {
    font-size: 25px;
  }
  .subscribe_form {
    padding: 0 40px;
  }
}
</style>
