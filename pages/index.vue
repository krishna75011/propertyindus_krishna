<script setup>
const finditems = ref([
  {
    image: "/images/ficon1.png",
    title: "Shop",
    contentf:
      "Explore our collection of homes or apartments in your favorite destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own.",
  },
  {
    image: "/images/ficon2.png",
    title: "Own",
    contentf:
      "We create a property LLC for each home, find all the co-owners, and handle all the sales details. At closing, the co-owners enjoy ownership of the home. We may keep some shares till all the shares get sold.",
  },
  {
    image: "/images/ficon3.png",
    title: "Enjoy",
    contentf:
      "We take care of furnishings, repairs, utilities, and property management – you just show up and relax. Scheduling is easy and equitable using our smart app and advanced web technologies.",
  },
  {
    image: "/images/ficon4.png",
    title: "RESELL",
    contentf:
      "Own a second home with the knowledge that you have the option to upgrade, resell, or exchange it with another one of ours. On an average, our homes resell for a 12-15% gain.",
  },
]);

const video = ref("2jqcjqxbeIE");
</script>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      apiUrl: "https://app.propertyindus.com",
      propertyImages: [
        "https://media.istockphoto.com/photos/modern-luxury-holiday-villa-at-seaside-picture-id1321598038",
        "https://media.istockphoto.com/photos/white-and-wooden-open-space-office-picture-id1266569529",
        "https://media.istockphoto.com/photos/tropical-luxury-picture-id838383438",
        "https://media.istockphoto.com/photos/contemporary-loft-office-picture-id1215535086",
        "https://media.istockphoto.com/photos/interior-of-modern-meeting-room-picture-id887116570",
        "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
        "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
      ],
      propertyList: [
        {
          image: [
            "https://media.istockphoto.com/photos/modern-luxury-holiday-villa-at-seaside-picture-id1321598038",
            "https://media.istockphoto.com/photos/white-and-wooden-open-space-office-picture-id1266569529",
            "https://media.istockphoto.com/photos/tropical-luxury-picture-id838383438",
            "https://media.istockphoto.com/photos/contemporary-loft-office-picture-id1215535086",
            "https://media.istockphoto.com/photos/interior-of-modern-meeting-room-picture-id887116570",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
          ],
          status: "AVAILABLE NOW",
          propertyName: "Queen St. Penthouse",
          propertyPrice: "857,447",
          propertyLocation: "London, United Kingdom",
          bed: 4,
          bath: 3,
        },
        {
          image: [
            "https://media.istockphoto.com/photos/modern-luxury-holiday-villa-at-seaside-picture-id1321598038",
            "https://media.istockphoto.com/photos/white-and-wooden-open-space-office-picture-id1266569529",
            "https://media.istockphoto.com/photos/tropical-luxury-picture-id838383438",
            "https://media.istockphoto.com/photos/contemporary-loft-office-picture-id1215535086",
            "https://media.istockphoto.com/photos/interior-of-modern-meeting-room-picture-id887116570",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
          ],
          status: "SOLD",
          propertyName: "Villa Vida",
          propertyPrice: "799,000",
          propertyLocation: "London, United Kingdom",
          bed: 2,
          bath: 1,
        },
        {
          image: [
            "https://media.istockphoto.com/photos/modern-luxury-holiday-villa-at-seaside-picture-id1321598038",
            "https://media.istockphoto.com/photos/white-and-wooden-open-space-office-picture-id1266569529",
            "https://media.istockphoto.com/photos/tropical-luxury-picture-id838383438",
            "https://media.istockphoto.com/photos/contemporary-loft-office-picture-id1215535086",
            "https://media.istockphoto.com/photos/interior-of-modern-meeting-room-picture-id887116570",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
          ],
          status: "SELL",
          propertyName: "Villa Mimosa",
          propertyPrice: "1,252,000",
          propertyLocation: "London, United Kingdom",
          bed: 1,
          bath: 1,
        },
        {
          image: [
            "https://media.istockphoto.com/photos/modern-luxury-holiday-villa-at-seaside-picture-id1321598038",
            "https://media.istockphoto.com/photos/white-and-wooden-open-space-office-picture-id1266569529",
            "https://media.istockphoto.com/photos/tropical-luxury-picture-id838383438",
            "https://media.istockphoto.com/photos/contemporary-loft-office-picture-id1215535086",
            "https://media.istockphoto.com/photos/interior-of-modern-meeting-room-picture-id887116570",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
          ],
          status: "AVAILABLE NOW",
          propertyName: "Queen St. Penthouse",
          propertyPrice: "857,447",
          propertyLocation: "London, United Kingdom",
          bed: 4,
          bath: 3,
        },
        {
          image: [
            "https://media.istockphoto.com/photos/modern-luxury-holiday-villa-at-seaside-picture-id1321598038",
            "https://media.istockphoto.com/photos/white-and-wooden-open-space-office-picture-id1266569529",
            "https://media.istockphoto.com/photos/tropical-luxury-picture-id838383438",
            "https://media.istockphoto.com/photos/contemporary-loft-office-picture-id1215535086",
            "https://media.istockphoto.com/photos/interior-of-modern-meeting-room-picture-id887116570",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
          ],
          status: "SOLD",
          propertyName: "Villa Vida",
          propertyPrice: "799,000",
          propertyLocation: "London, United Kingdom",
          bed: 2,
          bath: 1,
        },
        {
          image: [
            "https://media.istockphoto.com/photos/modern-luxury-holiday-villa-at-seaside-picture-id1321598038",
            "https://media.istockphoto.com/photos/white-and-wooden-open-space-office-picture-id1266569529",
            "https://media.istockphoto.com/photos/tropical-luxury-picture-id838383438",
            "https://media.istockphoto.com/photos/contemporary-loft-office-picture-id1215535086",
            "https://media.istockphoto.com/photos/interior-of-modern-meeting-room-picture-id887116570",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
            "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
          ],
          status: "SELL",
          propertyName: "Villa Mimos",
          propertyPrice: "1,252,000",
          propertyLocation: "London, United Kingdom",
          bed: 1,
          bath: 1,
        },
      ],
    };
  },
  mounted() {
    this.getAllProperties();
  },
  methods: {
    getAllProperties() {
      axios
        .get(`${this.apiUrl}/api/properties?most_relevant=1&limit=4`)
        .then((res) => {
          //console.log(res.data.data.data);
          // this.propertyList = res.data.data;
          if (res.data.data.data.length > 0) {
            // console.log(res.data.data.data);
            let propertyListTemp = res.data.data.data;

            let formattedArr = [];
            let tempArr = [];

            for (let i = 0; i < propertyListTemp.length; i++) {
              var shares = propertyListTemp[i].how_many_share;
              var property_price = Math.round(
                propertyListTemp[i].property_price
              );
              var share_price = Math.round(property_price / shares);
              if (propertyListTemp[i].photos.length > 0) {
                // this.propertyImages = propertyDetails.photos.map(el => `${this.apiUrl}`+`${el.url}`);

                for (let j = 0; j < propertyListTemp[i].photos.length; j++) {
                  tempArr[j] = this.apiUrl + propertyListTemp[i].photos[j].url;
                }
                if (tempArr.length > 0) {
                  this.propertyImages = [...tempArr];
                }
              }
              let tempObj = {
                id: propertyListTemp[i].id,
                image: this.propertyImages,
                status: propertyListTemp[i].status,
                propertyName: propertyListTemp[i].property_name,
                propertyShare: propertyListTemp[i].how_many_share,
                propertyPrice: share_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                propertyLocation: propertyListTemp[i].street_address,
                bed: parseInt(propertyListTemp[i].bedrooms),
                bath: parseInt(propertyListTemp[i].bathrooms),
              };
              formattedArr[i] = { ...tempObj };
            }
            this.propertyList = formattedArr;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<template>
  <div>
    <NuxtLayout name="footer">
      <NuxtLayout name="subscribe">
        <BannersHomeBanner />
        <div class="cowin">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12">
                <div class="coin_content">
                  <h2>Co-Ownership, Simplified</h2>
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
        <div class="find">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12">
                <div class="find_title">
                  <h3>Find your home in India with us</h3>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row justify-content-center">
                  <div
                    class="col-md-3"
                    v-for="(finditem, index) in finditems"
                    :key="index"
                  >
                    <div class="find_content_box">
                      <div class="find_content_box_icon">
                        <img :src="finditem.image" class="img-fluid" alt="" />
                      </div>
                      <div class="find_content_box_title">
                        <span>{{ finditem.title }}</span>
                      </div>
                      <div class="find_content_box_para">
                        <p>
                          {{ finditem.contentf }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 text-center">
                    <NuxtLink to="/learn" class="button_one">
                      Learn More
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="property">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12">
                <div class="property_title">
                  <span>We Make It Simple</span>
                  <h4>Dream Home, In Your Dream Location – Explore It</h4>
                  <p>Currently, we are only dealing homes in Kerala</p>
                </div>
              </div>
              <div class="col-md-8">
                <!-- <SlidersProperty :proDetails="proDetails" /> -->
                <SlidersProperty :proDetails="propertyList" />
              </div>
              <div class="col-md-4">
                <FormsDontMissOut></FormsDontMissOut>
              </div>
            </div>
          </div>
        </div>
        <div class="howwork">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="howwork_image">
                  <img
                    src="/images/how_work_side.png"
                    class="img-fluid"
                    alt="logo"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="howwork_content">
                  <span>We Make It Easy</span>
                  <h5>How LLC Co-Ownership Works ?</h5>
                  <p>
                    We've simplified the decades-old practice of co-ownership.
                    Buy 1/8th ownership and enjoy the property for one month
                    every year. If you are not able to use every year, pass it
                    to your family or friends, or we can rent it for you. Your
                    property will be modernized and furnished. ...
                  </p>
                  <NuxtLink to="/learn"> Learn More </NuxtLink>
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
.coin_content h2 {
  font-size: 35px;
  color: #000000;
  line-height: 1;
  margin-bottom: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.coin_content {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.coin_content p {
  color: #000000;
  font-size: 17px;
}

.cowin {
  padding: 65px 0;
  position: relative;
}

/*find*/
.find {
  padding: 35px 0;
  position: relative;
}
.find_title {
  margin-bottom: 55px;
  text-align: center;
}
.find_title h3 {
  font-size: 35px;
  color: #000000;
  line-height: 1;
  margin-bottom: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.find_content_box {
  padding: 20px 20px;
  position: relative;
  height: 100%;
  background: #ffffff;
  border: 1px solid #523174;
  border-radius: 20px;
}

.find_content_box_icon {
  width: 85px;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.find_content_box_title span {
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

.find_content_box_para p {
  font-size: 15.9px;
  text-align: center;
}

.find_content_box_para p:not(:last-child) {
  margin-bottom: 13px;
}
.button_one {
  color: #fff;
  padding: 9px 38px;
  display: inline-block;
  border-radius: 5px;
  margin-top: 50px;
  transition: all 0.3s ease-out;
  background: #523174;
}
.button_one:hover {
  background: #000;
  transition: all 0.3s ease-out;
}
/*property*/
.property_title h4 {
  font-size: 35px;
  color: #000000;
  line-height: 1;
  margin-bottom: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.property_title {
  text-align: center;
  margin-bottom: 60px;
}

.property_title span,
.property_title p {
  font-size: 19px;
  font-weight: 500;
  display: block;
  margin-bottom: 20px;
  color: #000;
  line-height: 1;
}

.property {
  padding: 60px 0;
  position: relative;
}

/*how-work*/
.howwork {
  padding: 60px 0;
  position: relative;
}

.howwork_image {
  box-shadow: 0 0 8px 2px #0000001a;
}
.howwork_content span {
  font-weight: 500;
  font-size: 18px;
  display: block;
  margin-bottom: 15px;
  line-height: 1;
}

.howwork_content h5 {
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 11px;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.howwork_content p {
  font-size: 16px;
  color: #000;
}
.howwork_content a {
  color: #000;
  text-transform: uppercase;
  font-size: 18px;
  text-decoration: underline;
  display: block;
  margin-top: 10px;
  letter-spacing: 0.1em;
}
@media screen and (max-width: 1199.98px) {
  .coin_content h2 {
    font-size: 37px;
  }
  .find_title h3 {
    font-size: 31px;
  }
  .find_content_box {
    padding: 0 0px;
  }
  .property_title h4 {
    font-size: 28px;
  }
  .property_title span {
    font-size: 18px;
  }
}

@media screen and (max-width: 991.98px) {
  .coin_content h2 {
    font-size: 29px;
  }
  .coin_content p {
    font-size: 15px;
  }
  .button_one {
    margin-top: 16px;
    padding: 9px 16px;
    font-size: 14px;
  }
  .find_title h3 {
    font-size: 26px;
  }
  .find_title {
    margin-bottom: 40px;
    text-align: center;
  }
  .find_content_box_title span {
    font-size: 25px;
    margin-bottom: 33px;
    margin-top: 18px;
  }
  .find_content_box_para p {
    font-size: 14px;
  }
  .property_title span {
    font-size: 16px;
  }
  .property_title h4 {
    font-size: 25px;
  }
  .property_title p {
    font-size: 13px;
  }
  .howwork_content span {
    font-size: 16px;
  }
  .howwork_content h5 {
    font-size: 28px;
  }
  .howwork_content p {
    font-size: 14px;
  }
}

@media screen and (max-width: 767.98px) {
  .cowin {
    padding: 35px 0;
  }
  .coin_content h2 {
    font-size: 23px;
  }
  .coin_content p {
    font-size: 14px;
  }
  .find {
    padding: 35px 0 35px;
  }
  .find_title h3 {
    font-size: 23px;
  }
  .find_title {
    margin-bottom: 25px;
  }
  .find_content_box {
    padding: 0 30px;
    margin-bottom: 35px;
  }
  .find .col-md-4:not(:last-child) .find_content_box:before {
    height: 1px;
    right: 0;
    top: unset;
    width: 100%;
    bottom: -20px;
  }
  .howwork,
  .property {
    padding: 35px 0;
  }
  .property_title span {
    font-size: 14px;
  }
  .property_title h4 {
    font-size: 24px;
  }
  .howwork_content {
    margin-top: 18px;
    text-align: center;
  }
  .howwork_content span {
    font-size: 14px;
  }
  .howwork_content h5 {
    font-size: 23px;
    margin-bottom: 12px;
  }
  .howwork_content p {
    font-size: 14px;
  }
}
</style>
