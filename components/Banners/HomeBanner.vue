<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="baneer_content">
            <h1>
              The modern way to<br />
              buy and own a<br />
              vacation home in India.
            </h1>
            <p>Co-Ownership for 1/8th the cost.</p>
            <NuxtLink to="/listings" class="button_one">View Listings</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  background: url(/images/home_banner_back_new.webp);
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
  height: 53%;
  width: 45%;
  left: 0;
  z-index: -9;
  background: #ffffff;
  opacity: 0.9;
  border-radius: 0px 50px 50px 0px;
  top: 0;
  bottom: 0;
  margin: auto;
}
.baneer_content {
  width: 43%;
}
.baneer_content h1 {
  color: #000;
  font-size: 39px;
  text-align: left;
  line-height: 1.3;
  font-weight: 700;
}
.baneer_content p {
  font-weight: 500;
  color: #000;
  font-size: 21px;
  line-height: 1;
  margin-top: 25px;
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
@media (max-width: 1441.98px) {
  .banner:before {
    width: 41%;
  }
}

@media (max-width: 1399.98px) {
  .banner:before {
    width: 47%;
  }
}
@media (max-width: 1199.98px) {
  .banner {
    height: 502px;
  }
  .banner:before {
    height: 58%;
  }
  .baneer_content h1 {
    font-size: 33px;
  }
}
@media (max-width: 991.98px) {
  .banner {
    height: 377px;
  }
  .baneer_content h1 {
    font-size: 24px;
  }
  .baneer_content p {
    font-size: 16px;
    margin-top: 18px;
  }
  .button_one {
    margin-top: 16px;
    font-size: 15px;
  }
}
@media (max-width: 767.98px) {
}

@media (max-width: 575.98px) {
  .banner {
    height: 351px;
    background: url(/images/home_banner_mobile.png);
    background-repeat: no-repeat !important;
    background-position: center;
    background-size: cover;
    margin-top: 150px;
  }
  .banner:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 150px;
    top: -149px;
    background: linear-gradient(262.3deg, #c4def3 5.46%, #cbe1f2 88.19%);
  }
  .baneer_content {
    width: 74%;
    position: absolute;
    top: -103px;
    z-index: 9;
  }
  .banner:before {
    top: -367px;
    z-index: 9;
    width: 76%;
    background: #ffffff8f;
  }
}
@media (max-width: 390.98px) {
  .baneer_content {
    width: 75%;
  }
  .banner:before {
    width: 82%;
  }
}
@media (max-width: 376.98px) {
  .baneer_content {
    width: 78%;
  }
  .banner:before {
    width: 85%;
  }
}
@media (max-width: 321.98px) {
  .baneer_content h1 {
    font-size: 22px;
  }
  .baneer_content {
    width: 85%;
  }
  .banner:before {
    top: -377px;
    width: 93%;
  }
}

@media only screen and (width: 393px) {
  .banner:before {
    width: 81%;
  }
}
@media only screen and (width: 360px) {
  .baneer_content {
    width: 81%;
  }
  .banner:before {
    width: 87%;
  }
}

@media only screen and (width: 540px) {
  .banner:before {
    width: 58%;
  }
}
@media only screen and (width: 280px) {
  .baneer_content {
    width: 100%;
  }
  .baneer_content h1 {
    font-size: 19px;
  }
  .baneer_content p {
    font-size: 14px;
  }
  .banner:before {
    top: -391px;
    height: 53%;
  }
}
</style>
