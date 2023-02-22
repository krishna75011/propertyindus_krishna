<script setup>
const SellerPointsWorks = ref([
  {
    image: "/images/ficon5.png",
    title: "Explore",
    content:
      "Browse from our range of homes in a city of your preference in India (currently in the state of Kerala). It is not a Time Share home. We provide actual homeownership shares in your native city or the city of your preference.",
    class: "mb-3 mb-md-0",
  },
  {
    image: "/images/ficon2.png",
    title: "Buy",
    content:
      "Select the right home that suits your requirements. We register as an LLC corporation for the property, and you can buy 1/8th share of your favorite home. Our experts will walk you through each step of the process.",
    class: "mb-3 mb-md-0",
  },
  {
    image: "/images/ficon3.png",
    title: "Own",
    content:
      "Once you buy the shares of the property, we manage and maintain the property with the management fee shared by all co-owners. You can schedule your stay through our easy-to-use app or our web-based scheduling. You just show up and relax.",
    class: "mb-3 mb-md-0",
  },
  {
    image: "/images/ficon4.png",
    title: "Sell",
    content:
      "You can resell by exchanging shares of another property or sell your shares to an interested buyer. We can even help you find the buyers if needed. We will even buy back your shares at the cost you paid, any time after 2 years if you want your money back, that is our guarantee for sale. ",
  },
]);

const ownerplans = ref([
  {
    image: "/images/ownership_plan1.png",
    title: "Easy Scheduling",
    content:
      "With our easy-to-use and advanced web and mobile applications, you can schedule your stay with just the click of a button. Our experienced team will keep your home ready to occupy as per your schedule. We take care of all the hassles of maintenance and management and you can enjoy your vacation stress-free.",
    class: "mb-4 mb-md-5",
  },
  {
    image: "/images/ownership_plan2.png",
    title: "Ownership Transfer Is Simple",
    content:
      "If you ever feel your home isn't the perfect fit, you can always transfer your ownership to another house under our listing that better suits your needs by simply paying the difference, if any.",
    class: "flex-md-row-reverse mb-4 mb-md-5",
  },
  {
    image: "/images/ownership_plan3.png",
    title: "Pick Your Dream Home In Gods Own Country",
    content:
      "PropertyIndus Offers homes currently in most parts of Kerala the most sought-after second home destinations in the U.S and Canada. Check out our current markets, and if you don't see your favourite, tell us where we should expand next.",
    class: "mb-4 mb-md-5",
  },
  {
    image: "/images/ownership_plan4.png",
    title: "Selling is hazzle-free",
    content:
      "If you ever feel like selling your ownership, you can always sell or transfer to buyers on our platform. If you do not like the house, we guarantee to buy back your ownership after two years for the same price, which is our sales assurance. ",
    class: "flex-md-row-reverse",
  },
]);

const faqItems = ref([
  {
    title: "Do I Really Have Ownership In The Home?",
    content:
      "Yes. Owning a Indus is true real estate ownership. You purchase a share in a property-specific LLC. The home is fully managed and designed specifically for co-ownership.",
  },
  {
    title: "Is Indus A Timeshare Or Fractional Company?",
    content:
      "Yes. Owning a Indus is true real estate ownership. You purchase a share in a property-specific LLC. The home is fully managed and designed specifically for co-ownership.",
  },
  {
    title: "How Do I Schedule Time To Enjoy My Home?",
    content:
      "Yes. Owning a Indus is true real estate ownership. You purchase a share in a property-specific LLC. The home is fully managed and designed specifically for co-ownership.",
  },
  {
    title: "What Are My Options For Financing?",
    content:
      "Yes. Owning a Indus is true real estate ownership. You purchase a share in a property-specific LLC. The home is fully managed and designed specifically for co-ownership.",
  },
  {
    title: "How Does Ownership Transfer Work?",
    content:
      "Yes. Owning a Indus is true real estate ownership. You purchase a share in a property-specific LLC. The home is fully managed and designed specifically for co-ownership.",
  },
]);
</script>

<template>
  <div>
    <NuxtLayout name="footer">
      <NuxtLayout name="subscribe">
        <div class="cowin">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12">
                <div class="coin_content">
                  <h1>How PropertyIndus Works</h1>
                  <h2>1/8th Co-Ownership<br />(Co-Ownership, Simplified)</h2>
                  <p>
                    If you don’t live permanently in India, you only need a few
                    weeks-months of accommodation yearly. As a proud owner,
                    Co-ownership is your best choice. We manage the home, and
                    you own it. We take care of all the hassles of maintenance
                    and management, and you can enjoy your vacation stress-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lear_banner">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 p-0">
                <div class="lear_banner_image">
                  <img
                    src="/images/learn_banner.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="seller_points">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12">
                <div class="seller_points_title">
                  <h2>Home ownership for 1/8th the cost</h2>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div
                    class="col-lg-3 col-md-6 mb-4 mb-md-5 mb-lg-0"
                    v-for="(SellerPointsWork, index) in SellerPointsWorks"
                    :key="index"
                    :class="SellerPointsWork.class"
                  >
                    <div class="seller_points_work_box">
                      <div class="seller_points_work_box_image">
                        <img
                          :src="SellerPointsWork.image"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <div class="seller_points_work_box_title">
                        <span>{{ SellerPointsWork.title }}</span>
                      </div>
                      <div class="seller_points_work_box_content">
                        <p>
                          {{ SellerPointsWork.content }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ownership_plan">
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-md-4 mb-4 mb-md-0">
                <div class="ownership_plan_image">
                  <img
                    src="/images/owner_ship_side.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-8">
                <div class="ownership_plan_content">
                  <h2>Choose The Ownership Plan that Suits Your Needs</h2>
                  <p>
                    You can buy 1/8th share of the property of your choice, for
                    one month stay every year. If you planning to stay longer
                    per year you can buy multiple of 1/8th shares.
                  </p>
                  <p>
                    You can have different payment options and finance plans. We
                    provide monthly payment plans as low as $1000 per month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ownership_plan_points">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10 col-md-12">
                <div
                  class="row align-items-center"
                  v-for="(ownerplan, index) in ownerplans"
                  :key="index"
                  :class="ownerplan.class"
                >
                  <div class="col-md-4 mb-4 mb-md-0">
                    <div class="ownership_plan_points_image">
                      <img :src="ownerplan.image" class="img-fluid" alt="" />
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="ownership_plan_points_content">
                      <span>{{ ownerplan.title }}</span>
                      <p>
                        {{ ownerplan.content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="buy_form">
          <div class="container">
            <div class="row justify-content-center align-items-lg-center">
              <div class="col-md-6 mb-4 mb-md-0">
                <div class="buy_form_image">
                  <img
                    src="/images/learn_form_side.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="buy_form_main">
                  <div class="buy_form_title">
                    <span>GET STARTED</span>
                    <h3>Find Your Dream Home</h3>
                    <p>
                      Take the next step in buying a vacation home. We're
                      excited to help you turn this dream into a reality, and
                      we're here to support you with all the information you
                      need to make it happen.
                    </p>
                  </div>
                  <div class="buy_form_box">
                    <FormsLearn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sellers_faq">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-10">
                <div class="sellers_faq_title">
                  <h4>Frequently Asked Questions</h4>
                </div>
              </div>
              <div class="col-lg-8 col-md-10">
                <div class="sellers_faq_box">
                  <AccrodionFaq :faqItems="faqItems" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLayout>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.cowin {
  padding: 50px 0;
}
.coin_content {
  text-align: center;
}
.coin_content h1 {
  font-size: 35px;
  color: #000000;
  line-height: 1;
  margin-bottom: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.coin_content h2 {
  font-size: 30px;
  color: #000000;
  line-height: 1.4;
  margin-bottom: 25px;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.1em;
}
.coin_content p {
  font-size: 16px;
}
.lear_banner_image img {
  width: 100%;
}
.seller_points {
  padding: 50px 0;
}

.seller_points_title {
  margin-bottom: 50px;
  text-align: center;
}
.seller_points_title h2 {
  font-size: 35px;
  color: #000000;
  line-height: 1;
  margin-bottom: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.seller_points_work_box {
  padding: 20px 15px;
  position: relative;
  height: 100%;
  background: #ffffff;
  border: 1px solid #523174;
  border-radius: 20px;
}

.seller_points_work_box_image {
  width: 85px;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.seller_points_work_box_title span {
  font-weight: 700;
  font-size: 23px;
  display: block;
  line-height: 1;
  margin-top: 30px;
  margin-bottom: 9px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.seller_points_work_box_content p {
  font-size: 15.9px;
  text-align: center;
}
.ownership_plan {
  background: rgba(82, 49, 116, 0.17);
  padding: 20px 0;
}

.ownership_plan_image img {
  width: 280px;
}

.ownership_plan_image {
  text-align: center;
}

.ownership_plan_content h2 {
  font-size: 29px;
  color: #000000;
  line-height: 1.3;
  margin-bottom: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.ownership_plan_content p {
  font-weight: 500;
  font-size: 19px;
}

.ownership_plan_content p:not(:last-child) {
  margin-bottom: 15px;
}
.ownership_plan_points {
  padding: 50px 0;
}
.ownership_plan_points_content span {
  font-size: 26px;
  color: #000000;
  line-height: 1;
  margin-bottom: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
}

.ownership_plan_points_content p {
  font-size: 18px;
}

.buy_form {
  padding: 50px 0;
}
.buy_form_image {
  position: sticky;
  top: 100px;
}
.buy_form_title {
  text-align: center;
  margin-bottom: 20px;
}
.buy_form_title span {
  display: block;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1;
  margin-bottom: 10px;
}
.buy_form_title h3 {
  font-size: 28px;
  color: #000000;
  line-height: 1;
  margin-bottom: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
}

.buy_form_title p {
  font-size: 14px;
}

/*faq*/
.sellers_faq {
  padding: 60px 0;
}
.sellers_faq_title h4 {
  font-size: 35px;
  color: #000000;
  line-height: 1;
  margin-bottom: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.sellers_faq_title {
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #00000038;
}

@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
  .sellers_faq_title h4[data-v-9ea1a676] {
    font-size: 33px;
  }
}
@media (max-width: 991.98px) {
  .coin_content h1[data-v-9ea1a676],
  .seller_points_title h2[data-v-9ea1a676],
  .sellers_faq_title h4 {
    font-size: 30px !important;
  }
  .coin_content h2[data-v-9ea1a676] {
    font-size: 22px;
    margin-bottom: 15px;
  }
  .cowin[data-v-9ea1a676] {
    padding: 30px 0;
  }
  .ownership_plan_content h2[data-v-9ea1a676] {
    font-size: 25px;
  }
  .ownership_plan_content p[data-v-9ea1a676] {
    font-size: 16px;
  }
  .ownership_plan_points_content p[data-v-9ea1a676] {
    font-size: 16px;
  }
  .ownership_plan_points_content span[data-v-9ea1a676] {
    font-size: 24px;
  }
  .buy_form[data-v-9ea1a676] {
    padding: 20px 0;
  }
  .buy_form_title h3[data-v-9ea1a676] {
    font-size: 23px;
  }
}
@media (max-width: 767.98px) {
  .coin_content h1[data-v-9ea1a676][data-v-9ea1a676],
  .seller_points_title h2[data-v-9ea1a676][data-v-9ea1a676],
  .sellers_faq_title h4[data-v-9ea1a676] {
    font-size: 21px !important;
  }
  .coin_content h2[data-v-9ea1a676][data-v-9ea1a676] {
    font-size: 19px;
  }
  .seller_points_work_box_title span[data-v-9ea1a676] {
    font-size: 22px;
  }
  .seller_points_work_box_content p[data-v-9ea1a676] {
    font-size: 15px;
  }
  .seller_points_title[data-v-9ea1a676] {
    margin-bottom: 30px;
  }
  .ownership_plan_content {
    text-align: center;
  }
  .ownership_plan_points_image img {
    width: 100%;
  }
  .ownership_plan_points_content {
    text-align: center;
  }
  .ownership_plan_points_content span[data-v-9ea1a676][data-v-9ea1a676] {
    font-size: 20px;
  }
  .ownership_plan_points_content p[data-v-9ea1a676][data-v-9ea1a676] {
    font-size: 15px;
  }
  .ownership_plan_points[data-v-9ea1a676] {
    padding: 35px 0;
  }
  .ownership_plan_content h2[data-v-9ea1a676][data-v-9ea1a676] {
    font-size: 21px;
  }
  .ownership_plan_content p[data-v-9ea1a676][data-v-9ea1a676] {
    font-size: 15px;
  }
}
@media (max-width: 575.98px) {
}
</style>
