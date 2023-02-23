<script setup>
const showAddaddress = {
  showManualaddress: true,
  showMain: false,
};
const emit = defineEmits(["gotoPersonal", "addAddress", "addAddressfrom"]);

const chnageSubstatusbanner = (items) => {
  emit("gotoPersonal", items);
};

const addAddresslist = (items) => {
  emit("addAddressfrom", items);
};

function addAddressf() {
  emit("addAddress", showAddaddress);
}
</script>

<template>
  <div class="banner">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="baneer_content">
            <h1>Hi. We Want To Buy Your Property In India</h1>
            <p>
              Tell us about your property in India and get an offer in 72 hours.
            </p>
            <div class="banner_over_form">
              <FormsFindHome
                @chnageSubstatusbanner="chnageSubstatusbanner"
                @addAddresslist="addAddresslist"
              />
            </div>
            <div class="address_manul">
              <p>
                Can’t find your address?<br />
                <span @click="addAddressf">CLICK HERE</span> to enter your
                address manually
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  background: url(/images/sellers_banner_back.webp);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: cover;
  height: 667px;
  display: flex;
  align-items: center;
  z-index: 9;
}
.banner:before {
  position: absolute;
  content: "";
  height: 100%;
  width: 59%;
  left: 0;
  z-index: -9;
  background: linear-gradient(
    90.34deg,
    #0e0a12 29.01%,
    rgba(82, 49, 116, 0.859414) 48.3%,
    rgba(255, 255, 255, 0) 86.33%
  );
}
.baneer_content {
  width: 45%;
}
.baneer_content h1 {
  color: #fff;
  font-size: 44px;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.baneer_content p {
  color: #fff;
  font-size: 19px;
  line-height: 1.3;
  margin-top: 17px;
  font-weight: 300;
  width: 68%;
}
.banner_over_form {
  display: flex;
  margin-top: 35px;
}
.address_manul p {
  font-size: 15px !important;
  margin-top: 30px !important;
}

.address_manul p span {
  cursor: pointer;
  font-size: 18px !important;
  font-weight: 500;
}
@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
  .banner {
    height: 500px;
  }
  .banner {
    height: 375px;
  }
  .baneer_content h1 {
    font-size: 36px;
  }
  .baneer_content p {
    font-size: 17px;
    margin-top: 18px !important;
    width: 80%;
  }
  .banner_over_form {
    margin-top: 18px;
  }
}
@media (max-width: 991.98px) {
  .baneer_content {
    width: 58%;
  }
  .baneer_content p {
    width: 84%;
  }
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  .banner {
    height: 347px;
    margin-top: 165px;
    background: url(/images/seller_banner_mobile.png);
    background-repeat: no-repeat !important;
    background-position: center;
    background-size: 100%;
  }

  .banner:before {
    content: none;
  }
  .banner:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 301px;
    top: -165px;
    background: linear-gradient(
      180deg,
      #c5cfd2 54.63%,
      rgba(203, 225, 242, 0) 96.93%
    );
  }
  .baneer_content {
    width: 66%;
    z-index: 999;
    position: absolute;
    top: -150px;
    left: 30px;
  }
  .baneer_content h1 {
    font-size: 22px;
    color: #000;
  }
  .baneer_content p {
    font-size: 14px;
    width: 100%;
    margin-top: 11px !important;
    color: #000;
    font-weight: 400;
  }
  .address_manul p {
    font-size: 14px !important;
    width: 134% !important;
  }
  .address_manul p span {
    font-size: 16px !important;
  }
  .banner:before {
    width: 100%;
  }
}
@media (max-width: 376.98px) {
  .baneer_content {
    width: 71%;
  }
  .baneer_content p {
    width: 88%;
  }
  .address_manul p {
    font-size: 13px !important;
  }
  .address_manul p span {
    font-size: 15px !important;
  }
  .baneer_content {
    left: 23px;
  }
  .address_manul p {
    width: 110% !important;
  }
}
@media (max-width: 321.98px) {
  .baneer_content {
    width: 89%;
  }
  .address_manul p {
    width: 100% !important;
  }
}

@media only screen and (width: 360px) {
  .baneer_content {
    width: 87%;
  }
  .address_manul p {
    width: 100% !important;
  }
}
</style>
