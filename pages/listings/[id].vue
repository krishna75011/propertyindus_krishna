<script setup>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
const finditems = ref([
  {
    image: "/images/ficon-white1.png",
    title: "Shop",
    contentf:
      "Explore our collection of homes or apartments in your favorite destinations. We'll help you find the perfect fit, and you decide how many shares you'd like to own.",
  },
  {
    image: "/images/ficon-white2.png",
    title: "Own",
    contentf:
      "We create a property LLC for each home, find all the co-owners, and handle all the sales details. At closing, the co-owners enjoy ownership of the home. We may keep some shares till all the shares get sold.",
  },
  {
    image: "/images/ficon-white3.png",
    title: "Enjoy",
    contentf:
      "We take care of furnishings, repairs, utilities, and property management – you just show up and relax. Scheduling is easy and equitable using our smart app and advanced web technologies.",
  },
  {
    image: "/images/ficon-white4.png",
    title: "RESELL",
    contentf:
      "Own a second home with the knowledge that you have the option to upgrade, resell, or exchange it with another one of ours. On an average, our homes resell for a 12-15% gain.",
  },
]);
</script>

<script>
import axios from "axios";
export default {
  name: "PropertyDetails",
  data() {
    return {
      apiUrl: "https://app.propertyindus.com",
      propertyDetails: {},
      propertyImages: [
        "https://media.istockphoto.com/photos/modern-luxury-holiday-villa-at-seaside-picture-id1321598038",
        "https://media.istockphoto.com/photos/white-and-wooden-open-space-office-picture-id1266569529",
        "https://media.istockphoto.com/photos/tropical-luxury-picture-id838383438",
        "https://media.istockphoto.com/photos/contemporary-loft-office-picture-id1215535086",
        "https://media.istockphoto.com/photos/interior-of-modern-meeting-room-picture-id887116570",
        "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
        "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
      ],
      geoLocation: { lat: 40.689247, lng: -74.044502 },
      propertyAmenities: [],
      propertyExpences: [],
      videoId: "8_6apqRxVUM",
      sharePrices: "",
      sharePricespercent: "",
      totalAfterdevide: "",
      totalpropertyExpences: "",
    };
  },
  mounted() {
    this.getPropertyDetails();
  },
  methods: {
    getPropertyDetails() {
      axios
        .get(`${this.apiUrl}/api/properties/${this.$route.params.id}`)
        .then((response) => {
          this.propertyExpences = response.data.data.homeExpenses;
          this.totalpropertyExpences = response.data.data.totalExpenses;
          this.propertyDetails = response.data.data.property;

          this.sharePrices = Math.round(
            this.propertyDetails.property_price /
              this.propertyDetails.how_many_share
          );

          this.sharePricespercent = Math.round((12 / 100) * this.sharePrices);
          this.totalAfterdevide = Math.round(
            this.sharePricespercent * 2 + this.sharePrices
          );

          if (this.propertyDetails.latitude && this.propertyDetails.longitude) {
            this.geoLocation = {
              lat: parseInt(this.propertyDetails.latitude),
              lng: parseInt(this.propertyDetails.longitude),
            };
          }
          if (this.propertyDetails.amenities) {
            this.propertyAmenities = this.propertyDetails.amenities;
          }
          if (this.propertyDetails.photos.length > 0) {
            // this.propertyImages = propertyDetails.photos.map(el => `${this.apiUrl}`+`${el.url}`);
            let tempArr = [];
            for (let j = 0; j < this.propertyDetails.photos.length; j++) {
              tempArr[j] = this.apiUrl + this.propertyDetails.photos[j].url;
            }
            if (tempArr.length > 0) {
              this.propertyImages = [...tempArr];
            }
          }

          if (this.propertyDetails.virtual_tour) {
            this.videoId = this.propertyDetails.virtual_tour;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <div>
    <NuxtLayout name="footer">
      <NuxtLayout name="subscribe">
        <div class="breadcrumb_list">
          <div class="container-xl">
            <div class="row">
              <div class="col-md-12">
                <nav
                  style="--bs-breadcrumb-divider: '>'"
                  aria-label="breadcrumb"
                >
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item">
                      <a href="/listings">Listings</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      {{
                        propertyDetails.property_name
                          ? propertyDetails.property_name
                          : "Villa on Hollywood Boulevard"
                      }}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="top_details">
          <div class="container-xl">
            <div class="row align-items-center">
              <div class="col-md-8">
                <div class="top_details_property">
                  <h1>
                    {{
                      propertyDetails.property_name
                        ? propertyDetails.property_name
                        : "Villa on Hollywood Boulevard"
                    }}
                  </h1>
                  <span
                    >{{
                      sharePrices
                        ? "$" +
                          sharePrices
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        : "$0"
                    }}•1/{{
                      propertyDetails.how_many_share
                        ? propertyDetails.how_many_share
                        : "8"
                    }}
                    Ownership</span
                  >
                  <small v-if="propertyDetails.status == 'published'">
                    AVAILABLE NOW
                  </small>
                  <small v-else> SOLD </small>
                </div>
              </div>
              <div class="col-md-4">
                <div class="top_details_share">
                  <ul>
                    <li>
                      <span>
                        <img
                          src="/images/wish.png"
                          class="img-fluid"
                          alt="wish"
                        />
                      </span>
                      Favorite
                    </li>
                    <li>
                      <span>
                        <img
                          src="/images/share.png"
                          class="img-fluid"
                          alt="share"
                        />
                      </span>
                      Share
                    </li>
                    <li>
                      <span>
                        <img
                          src="/images/video.png"
                          class="img-fluid"
                          alt="video"
                        />
                      </span>
                      Play Video
                    </li>
                    <li v-if="propertyDetails.status !== 'published'">
                      <span>
                        <img
                          src="/images/notify.png"
                          class="img-fluid"
                          alt="notify"
                        />
                      </span>
                      Notify Me
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="proprty_details_top">
          <div class="container-xxl">
            <div class="row">
              <div class="col-xl-6 col-lg-7 col-md-7">
                <!-- <GalleryProperty :imageDetails="images" /> -->
                <SlidersImageSlider :imageDetails="propertyImages" />
              </div>
              <div class="col-xl-6 col-lg-5 col-md-5 mt-3 mt-md-0">
                <!-- <MapsProperty :mapLocation="mapLocation" /> -->
                <MapsProperty :mapLocation="geoLocation" />
              </div>
            </div>
          </div>
        </div>
        <div class="proprty_details_bottom">
          <div class="container-xl">
            <div class="row">
              <div class="col-md-7">
                <div class="proprty_details_bottom_content">
                  <div class="attributes">
                    <span class="pro_title">Attributes</span>
                    <ul>
                      <li>
                        {{
                          propertyDetails.bedrooms
                            ? propertyDetails.bedrooms
                            : "0"
                        }}
                        Beds
                      </li>
                      <li>
                        {{
                          propertyDetails.bathrooms
                            ? propertyDetails.bathrooms
                            : "0"
                        }}
                        Baths
                      </li>
                      <li>
                        {{
                          propertyDetails.square_footage
                            ? propertyDetails.square_footage
                            : "0"
                        }}
                        sq ft
                      </li>
                    </ul>
                  </div>
                  <div class="property_location">
                    <span class="pro_title">LOCATION</span>
                    <p>
                      {{
                        propertyDetails.street_address
                          ? propertyDetails.street_address
                          : "London, United Kingdom"
                      }}
                    </p>
                  </div>
                  <div class="property_desc">
                    <span class="pro_title">ABOUT THIS HOME</span>
                    <p>
                      {{
                        propertyDetails.property_description
                          ? propertyDetails.property_description
                          : "No description"
                      }}
                    </p>
                  </div>
                  <div
                    class="property_amenities"
                    v-if="propertyAmenities.length > 0"
                  >
                    <span class="pro_title">DISTINCTIVE AMENITIES</span>
                    <ul>
                      <li
                        v-for="(item, index) in propertyAmenities"
                        :key="'property-amenity-' + index"
                      >
                        <div class="image_box">
                          <img
                            :src="`/images/emenities_icon/${item
                              .replace(/\s+/g, '-')
                              .toLowerCase()}.png`"
                            alt=""
                            @error="
                              $event.target.src =
                                '/images/emenities_icon/balcony.png'
                            "
                          />
                        </div>
                        <p>{{ item }}</p>
                      </li>
                    </ul>
                  </div>

                  <div class="property_vtour">
                    <span class="pro_title">PROPERTY VIDEO</span>
                    <div class="property_vtour_box">
                      <VideosYouTube :urlLink="videoId" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="property_side_box">
                  <div class="property_side_sticky">
                    <div class="property_side_box_tour">
                      <div class="property_side_box_tour_title">
                        <span>SCHEDULE A TOUR</span>
                      </div>
                      <FormsAppo />
                    </div>
                    <div class="property_side_box_cost_estimate">
                      <div class="property_side_box_cost_estimate_title">
                        <span>
                          PRICING DETAILS FOR <br />
                          1/{{
                            propertyDetails.how_many_share
                              ? propertyDetails.how_many_share
                              : "8"
                          }}
                          SHARE IN CO-OWNERSHIP
                        </span>
                      </div>
                      <div class="property_side_box_cost_estimate_content">
                        <div class="estimate_content_top">
                          <div class="estimate_content_top_first">
                            <ul>
                              <li>
                                1/{{
                                  propertyDetails.how_many_share
                                    ? propertyDetails.how_many_share
                                    : "8"
                                }}
                              </li>
                            </ul>
                            <p>OWNERSHIP</p>
                          </div>
                          <div class="estimate_content_top_second">
                            <span>{{
                              totalAfterdevide
                                ? "$" +
                                  totalAfterdevide
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                : "$0"
                            }}</span>
                          </div>
                        </div>
                        <div class="estimate_content_main">
                          <ul>
                            <li>
                              <span
                                >Purchase Price for 1/8 share<small
                                  >Whole house Price:
                                  {{
                                    propertyDetails.property_price
                                      ? "$" +
                                        propertyDetails.property_price
                                          .toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                      : "$0"
                                  }}</small
                                ></span
                              >
                              <span>{{
                                sharePrices
                                  ? "$" +
                                    sharePrices
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                  : "$0"
                              }}</span>
                            </li>
                            <li>
                              <span
                                >Closing & LEGAL FEES<small
                                  >12% of total cost (estimated) : Your cost =
                                  1/8 of 12%</small
                                ></span
                              >
                              <span>{{
                                sharePricespercent
                                  ? "$" +
                                    sharePricespercent
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                  : "$0"
                              }}</span>
                            </li>
                            <li>
                              <span
                                >Renovations, Remodelling and professional
                                cost<small
                                  >12% of total cost (estimated) : Your cost =
                                  1/8 of 12%</small
                                ></span
                              >
                              <span>{{
                                sharePricespercent
                                  ? "$" +
                                    sharePricespercent
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                  : "$0"
                              }}</span>
                            </li>
                          </ul>
                        </div>
                        <div class="estimate_content_footer">
                          <ul>
                            <li>
                              <span>
                                Total 1/{{
                                  propertyDetails.how_many_share
                                    ? propertyDetails.how_many_share
                                    : "8"
                                }}
                                Ownership
                              </span>
                              <span>{{
                                totalAfterdevide
                                  ? "$" +
                                    totalAfterdevide
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                  : "$0"
                              }}</span>
                            </li>
                            <li>
                              <span>
                                home expenses
                                <button
                                  type="button"
                                  class="btn btn-primary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#monthlyeacxpence"
                                >
                                  <img
                                    src="/images/info.png"
                                    class="img-fluid"
                                    alt="info"
                                  />
                                </button>
                              </span>
                              <span>{{
                                totalpropertyExpences
                                  ? "$" +
                                    totalpropertyExpences
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                                    "/mo"
                                  : "$0/mo"
                              }}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <h5>Understanding ownership costs</h5>
                  <p>
                    Know the bottom line before you buy. No hidden fees, no
                    surprises, no monthly markups.
                  </p>
                  <NuxtLink to="/learn"> Learn More </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLayout>
      <div
        class="modal fade"
        id="monthlyeacxpence"
        tabindex="-1"
        aria-labelledby="monthlyeacxpencelLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="expence_modal_close">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="expence_modal_content">
                <span class="title">Estimated monthly owner expenses</span>
                <p>
                  Redbuyers owners share home operating expenses pro rata, and
                  expenses are passed along monthly at cost. At closing, owners
                  pay 6 months of home expenses upfront to fund initial
                  operating costs.
                </p>
                <ul>
                  <li v-for="(items, index) in propertyExpences" :key="index">
                    <span>{{ items.expense_name }}</span>
                    <span>
                      {{
                        items.expense_value
                          ? "$" +
                            items.expense_value
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          : "$0"
                      }}
                    </span>
                  </li>
                </ul>
                <div class="total_month_expence">
                  <span>Monthly Contribution</span>
                  <span>{{
                    totalpropertyExpences
                      ? "$" +
                        totalpropertyExpences
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : "$0"
                  }}</span>
                </div>
                <div class="total_year_expence">
                  <span>Annual Total</span>
                  <span>{{
                    totalpropertyExpences
                      ? "$" +
                        (totalpropertyExpences * 12)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : "$0"
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.breadcrumb_list {
  padding: 25px 0;
}

.breadcrumb_list ol.breadcrumb {
  margin: 0;
}

.breadcrumb_list ol.breadcrumb li.breadcrumb-item a {
  color: #000;
}

.breadcrumb_list ol.breadcrumb li.breadcrumb-item {
  font-size: 17px;
}
.breadcrumb_list ol.breadcrumb li.breadcrumb-item.active {
  color: #523174;
}
.top_details_share ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.top_details_share ul li span {
  display: block;
  line-height: 0;
  margin-bottom: 7px;
}

.top_details_share ul li span img {
  width: 29px;
  height: 30px;
}

.top_details_share ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  cursor: pointer;
}

.top_details_property h1 {
  line-height: 1;
  font-size: 30px;
  margin-bottom: 10px;
}
.top_details_property span {
  display: block;
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 20px;
}

.top_details_property small {
  display: block;
  line-height: 1;
  font-size: 16px;
  text-transform: capitalize;
  margin-top: 15px;
}
.proprty_details_top {
  padding: 30px 0;
}
.property_location {
  margin-top: 25px;
  margin-bottom: 25px;
}

.attributes ul {
  display: flex;
  align-items: center;
}
.attributes ul li {
  font-style: normal;
  color: #000;
  position: relative;
}

.attributes ul li:not(:last-child) {
  margin-right: 23px;
}

.attributes ul li:not(:last-child):before {
  content: "";
  position: absolute;
  background: #999;
  height: 49%;
  width: 1px;
  right: -11px;
  top: 1px;
  bottom: 0;
  margin: auto;
}
span.pro_title {
  color: #000;
  display: block;
  font-size: 22px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.property_desc p {
  font-size: 16px;
}

.property_desc p:not(:last-child) {
  margin-bottom: 13px;
}

.property_desc {
  margin-bottom: 25px;
}

.image_box {
  width: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.property_amenities ul li {
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 12px;
}

.property_amenities ul li p {
  font-weight: 400;
  margin-left: 10px;
  font-size: 16px;
}

.property_amenities ul {
  display: flex;
  flex-flow: wrap;
  align-items: center;
}

.property_amenities {
  margin-bottom: 25px;
}

.proprty_details_bottom {
  padding-bottom: 60px;
}

.button_one {
  color: #fff;
  background: #523174;
  padding: 9px 32px;
  display: inline-block;
  border-radius: 5px;
  margin-top: 50px;
  transition: all 0.3s ease-out;
}
.button_one:hover {
  background: #000;
  transition: all 0.3s ease-out;
}
/*find*/
.find {
  padding: 50px 0;
  position: relative;
}

.find_content_box {
  padding: 20px 20px;
  position: relative;
  height: 100%;
  background: #523174;
  border-radius: 25px;
  box-shadow: 0 0 8px 3px #0000001c;
}

.find_content_box_icon {
  width: 85px;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.find_title h3 {
  font-size: 37px;
  color: #000000;
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
}

.find_title {
  margin-bottom: 55px;
  text-align: center;
}
.find_content_box_title span {
  font-weight: 600;
  font-size: 23px;
  display: block;
  line-height: 1;
  margin-top: 22px;
  margin-bottom: 9px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

.find_content_box_para p {
  font-size: 16px;
  text-align: center;
  color: #fff;
}

.find_content_box_para p:not(:last-child) {
  margin-bottom: 13px;
}
/*how-work*/
.howwork {
  padding: 40px 0 60px;
  position: relative;
}

.howwork_image {
  box-shadow: 0 0 8px 2px #0000001a;
}
.howwork_content span {
  font-weight: 500;
  font-size: 19px;
  display: block;
  margin-bottom: 20px;
  line-height: 1;
}

.howwork_content h5 {
  font-weight: 600;
  font-size: 34px;
  margin-bottom: 11px;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.howwork_content p {
  font-size: 15px;
  color: #000;
}
.howwork_content a {
  color: #000;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 19px;
  text-decoration: underline;
  display: block;
  margin-top: 17px;
  letter-spacing: 2px;
}
/***side-bar****/
.property_side_box {
  position: relative;
  top: 0;
  height: 100%;
}

.property_side_sticky {
  position: sticky;
  top: 109px;
}
.property_side_box_tour {
  border: 1px solid #523174;
  padding: 20px 15px 15px;
  position: relative;
}
.property_side_box_tour_title {
  position: absolute;
  background: #fff;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  top: -9px;
  padding: 0 11px;
}

.property_side_box_tour_title span {
  display: block;
  line-height: 1;
  font-weight: 600;
  font-size: 17px;
}
.property_side_box_cost_estimate {
  border: 1px solid #523174;
  padding: 30px 15px 25px;
  position: relative;
  margin-top: 50px;
}

.property_side_box_cost_estimate_title {
  position: absolute;
  background: #fff;
  left: 0;
  right: 0;
  margin: auto;
  width: -moz-fit-content;
  width: fit-content;
  top: -16px;
  padding: 0 11px;
  text-align: center;
}

.property_side_box_cost_estimate_title span {
  display: block;
  line-height: 1;
  font-weight: 600;
  font-size: 17px;
}

.estimate_content_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
  padding-bottom: 20px;
  margin-top: 19px;
}

.estimate_content_top_first {
  display: flex;
  align-items: center;
  line-height: 1;
  color: #000;
}

.estimate_content_top_first ul li {
  display: block;
  line-height: 1;
  border: 1px solid #000;
  padding: 6px 10px 6px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.estimate_content_top_first ul {
  margin-right: 15px;
}

.estimate_content_top_first p {
  font-weight: 500;
}

.estimate_content_top_second span {
  display: block;
  line-height: 1;
  font-size: 19px;
  font-weight: 600;
}
.estimate_content_main ul li:not(:last-child) {
  margin-bottom: 15px;
}

.estimate_content_main ul li {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
}

.estimate_content_main ul li span:first-child {
  width: 75%;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
}

.estimate_content_main ul li span:last-child {
  width: 25%;
  text-align: right;
  font-weight: 600;
  font-size: 16px;
}

.estimate_content_main ul li span:first-child small {
  display: block;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
}
.estimate_content_main {
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.estimate_content_footer ul li {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
}

.estimate_content_footer ul li span:first-child {
  width: 75%;
}

.estimate_content_footer ul li:not(:last-child) span:first-child {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 19px;
}

.estimate_content_footer ul li:not(:last-child) span:last-child {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 19px;
}

.estimate_content_footer ul li span {
  display: block;
  line-height: 1;
}

.estimate_content_footer ul li span:last-child {
  width: 25%;
  text-align: right;
}

.estimate_content_footer ul li:not(:last-child) {
  margin-bottom: 20px;
}

.estimate_content_footer ul li:last-child span {
  text-transform: capitalize;
  font-size: 17px;
}

.estimate_content_footer ul li:last-child span button {
  padding: 0;
  background: transparent;
  border: none;
  margin-left: 5px;
}

.estimate_content_footer ul li:last-child span button img {
  width: 15px;
}

.estimate_content_footer ul li:last-child span:first-child {
  display: flex;
  align-items: center;
}

.expence_modal_content span.title {
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 29px;
  line-height: 1.2;
  margin-bottom: 15px;
}

.expence_modal_content p {
  text-align: center;
  font-size: 16px;
  line-height: 1.1;
}

.expence_modal_content ul li:not(:last-child) {
  margin-bottom: 10px;
}

.expence_modal_content ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 17px;
  font-weight: 500;
}

.expence_modal_content ul {
  padding: 0 55px;
  margin-top: 20px;
}

.total_month_expence {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 19px;
  padding: 0 43px;
  margin: auto;
  margin-top: 12px;
  color: #fff;
}

.total_month_expence span {
  line-height: 1;
  background: #523174;
  padding: 13px;
}

.total_month_expence span:first-child {
  width: 70%;
}

.total_month_expence span:last-child {
  width: 30%;
  text-align: right;
}

.total_year_expence {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 19px;
  padding: 0 43px;
  margin: auto;
  color: #000;
  font-weight: 500;
}

.total_year_expence span {
  line-height: 1;
  padding: 13px;
}

.total_year_expence span:first-child {
  width: 70%;
}

.total_year_expence span:last-child {
  width: 30%;
  text-align: right;
}

.expence_modal_close {
  text-align: right;
}

.expence_modal_close button {
  border: 1px solid #2b2b2b;
  border-radius: 25px;
  padding: 10px;
  width: 0.5em;
  height: 0.5em;
  background-size: 0.8em;
}

@media screen and (max-width: 991.98px) {
  .property_available span {
    font-size: 14px;
    padding: 7px 9px;
  }
  .proprty_status img {
    margin-right: 7px;
    width: 16px;
  }
  .property_time span {
    font-size: 14px;
  }
  .property_time {
    margin-left: 35px;
  }
  .property_share_left img {
    width: 20px !important;
  }
  .property_share_left {
    padding: 7px 9px;
  }
  .property_share_left span {
    font-size: 14px;
  }
  .property_title h1 {
    font-size: 22px;
  }
  .property_location img {
    width: 11px;
  }
  .property_location span {
    font-size: 14px;
  }
  .property_price h2 {
    font-size: 34px;
  }
  .property_price h2 span {
    font-size: 25px;
  }
  .wishlist img {
    width: 25px;
  }
  .property_side_box_button button {
    font-size: 13px;
  }
  .property_location {
    margin-top: 6px;
  }
  .property_title {
    margin-top: 15px;
    padding-top: 15px;
  }
  .whole_price p {
    font-size: 15px;
  }
  .attributes p,
  .build_year p {
    font-size: 15px;
  }
  .property_amenities span,
  .property_desc span,
  .property_floor span.property_floor_title,
  .property_vtour span.property_vtour_title {
    font-size: 18px;
    margin-bottom: 18px;
  }
  .property_desc p:not(:last-child) {
    margin-bottom: 9px;
  }
  .property_desc p {
    font-size: 15px;
  }

  .property_amenities ul li p {
    font-size: 16px;
    margin-left: 8px;
  }
  .similar_property_title h2 {
    font-size: 24px;
  }
  .similar_property {
    padding: 35px 0 5px;
  }
  .property_side_box_estimate span.title {
    font-size: 20px;
    width: 87%;
  }
  .property_side_box_main {
    padding: 20px 14px;
  }
  .estimate_box_fin_finance strong,
  .estimate_box_fin_expence strong {
    font-size: 16px;
  }
  .estimate_box_fin_finance p,
  .estimate_box_fin_expence p {
    font-size: 16px;
  }
  .estimate_box_fin_finance {
    margin-bottom: 17px;
  }
  .estimate_box_final_cost strong {
    font-size: 39px;
  }
  .estimate_box_final_cost strong span {
    font-size: 28px;
  }
}
@media screen and (max-width: 767.98px) {
  .property_available span {
    font-size: 11px;
  }
  .property_time {
    margin-left: 20px;
  }
  .property_share_left span {
    font-size: 11px;
  }
  .property_share_left img {
    width: 16px !important;
  }
  .property_location img {
    width: 12px;
  }
  .property_location span {
    font-size: 15px;
  }
  .whole_price p {
    font-size: 14px;
  }
  .attributes p,
  .build_year p,
  .whole_price p {
    font-size: 14px;
  }
  .property_key_points {
    align-items: flex-start;
    flex-direction: column;
  }
  .property_amenities span,
  .property_desc span,
  .property_floor span.property_floor_title,
  .property_vtour span.property_vtour_title {
    font-size: 17px;
    margin-bottom: 14px;
  }
  .property_side_box {
    margin-top: 30px;
  }
  .proprty_status {
    flex-direction: column;
    align-items: flex-start !important;
  }

  .property_share_left {
    margin-top: 15px;
  }

  .wishlist {
    position: absolute;
    top: 0;
    right: 0;
  }

  .proprty_details_bottom_content {
    position: relative;
  }
}
</style>
