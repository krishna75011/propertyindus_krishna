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
  background: url(/images/home_banner_back_new.png);
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
  height: 53%;
  width: 47%;
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
  .button_one {
    margin-top: 16px;
    padding: 9px 16px;
    font-size: 14px;
  }
}

@media screen and (max-width: 767.98px) {
  .baneer_content {
    margin-top: 50px;
  }
  .baneer_content h1 {
    font-size: 21px;
    line-height: 33px;
  }
  .button_one {
    padding: 9px 12px;
  }
  .banner {
    height: 272px;
  }
}
</style>
