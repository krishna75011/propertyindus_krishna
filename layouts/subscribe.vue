<template>
  <div>
    <slot />
    <div class="subscribe">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-9 col-md-6 col-lg-6 col-xl-5 mb-4 mb-md-0">
            <div class="sub_side_image">
              <img src="/images/subside.png" class="img-fluid" alt="" />
            </div>
          </div>
          <div
            class="col-10 col-md-5 col-lg-5 col-xl-4 offset-xl-2 offset-lg-0 offset-md-1"
          >
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

@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
  .subscribe_content h6 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .subscribe_content p {
    font-size: 14px;
  }
}
@media (max-width: 767.98px) {
  .subscribe:before {
    background: url(/images/subback_mobile.png);
    background-repeat: no-repeat !important;
    background-position: center;
    background-size: 100% 100%;
    height: 94%;
    width: 92%;
  }
  .subscribe {
    padding: 60px 0;
  }
  .subscribe_content h6 {
    font-size: 28px;
  }
}
@media (max-width: 321.98px) {
  .subscribe_content h6 {
    font-size: 26px;
  }
}
</style>
