<script setup></script>

<template>
  <div class="banner">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="baneer_content">
            <h1>Join our team and help reshape the real estate industry</h1>
            <p>Come home to your dream job.</p>
            <p>careers@propertyindus.com</p>
            <NuxtLink to="#upload_resume" class="button_one">
              SUBMIT RESUME
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  background: url(/images/career_banner.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: cover;
  height: 555px;
  display: flex;
  align-items: center;
  z-index: 9;
}
.banner:before {
  position: absolute;
  content: "";
  height: 100%;
  width: 63%;
  left: 0;
  z-index: -9;
  background: linear-gradient(
    90.34deg,
    #ffffff 35.82%,
    rgba(255, 255, 255, 0.4) 64.76%,
    rgba(255, 255, 255, 0) 75.54%
  );
}
.baneer_content {
  width: 54%;
}
.baneer_content h1 {
  color: #000000;
  font-size: 51px;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.baneer_content p {
  color: #000000;
  font-size: 19px;
  line-height: 1.3;
  margin-top: 17px;
}
.button_one {
  color: #fff;
  background: #523174;
  padding: 7px 25px;
  display: inline-block;
  border-radius: 5px;
  margin-top: 27px;
  transition: all 0.3s ease-out;
}
.button_one:hover {
  background: #000000;
  color: #ffffff;
  transition: all 0.3s ease-out;
}
@media (max-width: 1399.98px) {
  .baneer_content h1 {
    font-size: 44px;
  }
}
@media (max-width: 1199.98px) {
  .banner {
    height: 500px;
  }
  .baneer_content {
    width: 52%;
  }
  .baneer_content h1 {
    font-size: 36px;
  }
}
@media (max-width: 991.98px) {
  .banner {
    height: 375px;
  }
  .baneer_content h1 {
    font-size: 30px;
  }
  .baneer_content {
    width: 59%;
    margin-top: 94px;
  }
  .baneer_content p {
    font-size: 17px;
    margin-top: 10px;
  }
  .button_one {
    padding: 6px 21px;
    margin-top: 15px;
    font-size: 15px;
  }
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  .banner {
    height: 275px;
    margin-top: 150px;
  }
  .banner:before {
    width: 100%;
    background: linear-gradient(
      180deg,
      #fffffffa 1.82%,
      rgba(255, 255, 255, 0.4) 22.76%,
      rgba(255, 255, 255, 0) 55.54%
    );
  }
  .banner:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 150px;
    top: -150px;
    background: #fff;
  }
  .baneer_content {
    width: 84%;
    position: absolute;
    top: -129px;
    z-index: 9;
    margin: 0;
  }
  .baneer_content h1 {
    font-size: 26px;
  }
  .baneer_content p {
    font-size: 16px;
  }
}
@media (max-width: 412.98px) {
  .baneer_content h1 {
    font-size: 25px;
  }
}
@media (max-width: 390.98px) {
  .baneer_content {
    width: 95%;
  }
  .baneer_content h1 {
    font-size: 27px;
  }
}
@media (max-width: 360.98px) {
  .baneer_content h1 {
    font-size: 25px;
  }
}

@media (max-width: 321.98px) {
  .baneer_content h1 {
    font-size: 22px;
  }
}

@media only screen and (width: 375px) {
  .baneer_content h1 {
    font-size: 26px;
  }
}
</style>
