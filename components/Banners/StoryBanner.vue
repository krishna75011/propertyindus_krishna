<template>
  <div class="banner story_banner">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="baneer_content">
            <h1>Why we started PropertyIndus</h1>
            <p>
              Nearly 5 million of the Indian population livein USA and Canada,
              and approx. 35% of these people own a home in India that is either
              vacant or tenanted. Most of the time Non-Resident Indians (NRI)
              cannot maintain their house and they are not able to enjoy their
              properties when they visit India.
            </p>
            <p>
              Meanwhile, many NRI's like to stay in their own properties and
              have the pride of ownership when they visit India. To solve this,
              we created PropertyIndus, a service to expand vacation home
              ownership in India for NRIs.
            </p>
            <p>
              We empower people to own a share of a second home, from 1/8 the
              ownership. Instead of spending money on buying one house and
              leaving it abandoned. Co-investment owners will have a better
              experience of true real estate ownership.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  z-index: 9;
  padding: 60px 0;
}
.banner:before {
  position: absolute;
  content: "";
  background: url(/images/story_side.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
  height: 90%;
  width: 22%;
  right: 0;
  z-index: -9;
  top: -4px;
}
.baneer_content h1 {
  color: #000;
  font-size: 35px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 22px;
}
.baneer_content p {
  color: #000;
  font-size: 17px;
  line-height: 1.3;
}
.baneer_content p:not(:last-child) {
  margin-bottom: 20px;
}

@media (max-width: 1441.98px) {
  .banner:before {
    width: 39%;
  }
}

@media (max-width: 1399.98px) {
  .banner:before {
    width: 41%;
  }
}
@media (max-width: 1199.98px) {
  .banner {
    padding: 40px 0;
  }
  .baneer_content h1 {
    font-size: 34px;
  }
  .banner:before {
    height: 84%;
  }
}
@media (max-width: 991.98px) {
  .baneer_content h1 {
    font-size: 25px;
  }
  .baneer_content p {
    font-size: 15px;
  }
  .baneer_content p:not(:last-child) {
    margin-bottom: 9px;
  }
  .banner:before {
    height: 70%;
  }
}
@media (max-width: 767.98px) {
  .banner {
    padding: 320px 0 40px;
  }
  .banner:before {
    height: 40%;
    width: 89%;
  }
  .baneer_content {
    text-align: center;
  }
}
@media (max-width: 575.98px) {
}
@media (max-width: 376.98px) {
  .banner:before {
    height: 37%;
  }
  .baneer_content h1 {
    font-size: 22px;
  }
}
@media (max-width: 321.98px) {
  .banner:before {
    height: 32%;
    width: 94%;
  }
}
</style>
