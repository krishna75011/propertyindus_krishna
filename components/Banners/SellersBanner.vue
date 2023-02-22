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
  background: url(/images/sellers_banner_back.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
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
@media screen and (max-width: 2560px) {
  .banner {
    background-size: cover;
  }
}
@media screen and (max-width: 1199.98px) {
  .baneer_content h1 {
    font-size: 39px;
    line-height: 54px;
  }
}

@media screen and (max-width: 991.98px) {
  .banner {
    height: 434px;
  }
  .baneer_content h1 {
    font-size: 29px;
    line-height: 48px;
  }
  .baneer_content p {
    font-size: 16px;
    margin-top: 7px;
  }
}

@media screen and (max-width: 767.98px) {
  .baneer_content {
    margin-top: 50px;
    padding: 0 38px;
  }
  .baneer_content h1 {
    font-size: 21px;
    line-height: 24px;
  }
  .banner {
    height: 272px;
  }
  .baneer_content p {
    font-size: 14px;
    line-height: 1.5;
  }
  .banner_over_form {
    margin-top: 15px;
  }
}

@media screen and (max-width: 321.98px) {
  .baneer_content {
    padding: 0 27px;
  }
}
</style>
