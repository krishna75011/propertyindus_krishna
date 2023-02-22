<script setup>
const showPrev = ref(false);
const showNext = ref(true);

const slide = (direction) => {
  const citybox = document.querySelector(".city_list");
  const cityList = document.querySelector(".city_list ul");
  // const prev = document.querySelector(".prev");
  // const next = document.querySelector(".next");
  const widthcity = citybox.scrollWidth;
  const widthul = cityList.scrollWidth;
  let scroll = widthul - widthcity;
  let scrollCompleted = 0;
  const slideVar = setInterval(function () {
    if (direction == "left") {
      cityList.scrollLeft -= 10;
      // next.classList.remove("d-none");
      showNext.value = true;
    } else {
      cityList.scrollLeft += 10;
      // prev.classList.remove("d-none");
      showPrev.value = true;
    }
    if (cityList.scrollLeft < 10) {
      // prev.classList.add("d-none");
      showPrev.value = false;
    }
    if (cityList.scrollLeft >= scroll) {
      // next.classList.add("d-none");
      showNext.value = false;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
};

const showFilter = ref(false);

const showFilterBox = () => {
  showFilter.value = true;
};

const hideFilterBox = () => {
  showFilter.value = false;
};

const selected = ref(["undefined"]);

const seen = ref(false);
const isActive = ref(false);

const showseen = () => {
  isActive.value = !isActive.value;
  seen.value = !seen.value;
};
</script>

<script>
import axios from "axios";
export default {
  name: "PropertyListings",
  data() {
    return {
      apiUrl: "https://app.propertyindus.com",
      cityList: [
        "Kolkata",
        "Mumbai",
        "Delhi",
        "Kanpur",
        "Bangalore",
        "Hyderabad",
        "Ahmedabad",
        "Surat",
        "Pune",
        "Jaipur",
        "Lucknow",
      ],
      propertyImagesoth: [
        "https://media.istockphoto.com/photos/modern-luxury-holiday-villa-at-seaside-picture-id1321598038",
        "https://media.istockphoto.com/photos/white-and-wooden-open-space-office-picture-id1266569529",
        "https://media.istockphoto.com/photos/tropical-luxury-picture-id838383438",
        "https://media.istockphoto.com/photos/contemporary-loft-office-picture-id1215535086",
        "https://media.istockphoto.com/photos/interior-of-modern-meeting-room-picture-id887116570",
        "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
        "https://media.istockphoto.com/photos/interior-design-in-pool-villa-house-and-home-feature-dining-table-and-picture-id1216654191",
      ],
      isLoading: true,
      isLoadingfilter: true,
      allProperties: [],
      propertiesToDisplay: [],
      perPage: 6,
      pageToOpen: 1,
      currentPage: 1,
      bottonStatus: "",
      showclearCitybutton: false,
      clickedItems: [],
      clickedcitys: [],
      finalcityArray: [],
    };
  },
  created() {
    this.getAllCities();
    this.getAllProperties();
  },
  methods: {
    getAllProperties() {
      this.isLoading = true;
      let _this = this;
      axios
        .get(`${this.apiUrl}/api/properties?most_relevant=1`)
        .then((res) => {
          if (res.data.data.data.length > 0) {
            let propertyListTemp = res.data.data.data;

            let formattedArr = [];
            let tempArroth = [];
            let allPropertiescity = [];
            let formattedCitylist = [];
            for (let i = 0; i < propertyListTemp.length; i++) {
              var shares = propertyListTemp[i].how_many_share;
              var property_price = Math.round(
                propertyListTemp[i].property_price
              );
              var share_price = Math.round(property_price / shares);
              if (propertyListTemp[i].photos.length > 0) {
                // this.propertyImages = propertyDetails.photos.map(el => `${this.apiUrl}`+`${el.url}`);

                for (let j = 0; j < propertyListTemp[i].photos.length; j++) {
                  tempArroth[j] =
                    this.apiUrl + propertyListTemp[i].photos[j].url;
                }
                if (tempArroth.length > 0) {
                  this.propertyImagesoth = [...tempArroth];
                }
              }
              let tempObj = {
                id: propertyListTemp[i].id,
                image: this.propertyImagesoth,
                status: propertyListTemp[i].status,
                propertyName: propertyListTemp[i].property_name,
                propertyShare: propertyListTemp[i].how_many_share,
                propertyPrice: share_price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                propertyLocation: propertyListTemp[i].street_address,
                bed: parseInt(propertyListTemp[i].bedrooms),
                bath: parseInt(propertyListTemp[i].bathrooms),
                propertyCityid: propertyListTemp[i].city_id.toString(),
              };
              formattedArr[i] = { ...tempObj };
              formattedCitylist[i] = propertyListTemp[i].city_id.toString();
            }
            _this.finalcityArray = Array.from(new Set(formattedCitylist)); // a, b
            _this.allPropertiescity = formattedArr;
            _this.allProperties = formattedArr;
            _this.isLoading = false; //no longer fetching
            _this.renderList(); //re-renderlist on DOM
          }
        })
        .catch((err) => {
          console.log("unable to fetch properties");
        });
    },
    renderList(pageNumber = 1) {
      this.propertiesToDisplay = [];

      if (this.allProperties.length) {
        let _this = this;

        return new Promise(function (res, rej) {
          _this.pageToOpen = pageNumber;

          for (let i = _this.start; i <= _this.stop; i++) {
            _this.propertiesToDisplay.push(_this.allProperties[i]);
          }

          res();
        })
          .then(function () {
            _this.currentPage = _this.pageToOpen;
          })
          .catch(function () {
            console.log("render err");
          });
      }
    },

    resetValue(items) {
      this.bottonStatus = true;
      this.showclearCitybutton = true;

      let _this = this;
      const check = _this.clickedItems.includes(items);
      if (check) {
        let checkname = _this.clickedItems.filter(function (elem, index) {
          if (elem == items) {
            _this.clickedItems.splice(index, 1);

            var result = _this.allPropertiescity.filter((item) =>
              _this.clickedItems.includes(item.propertyCityid)
            );

            _this.allProperties = result;
            _this.renderList(); //re-renderlist on DOM
            console.log(_this.allProperties);
          }
        });
      } else {
        _this.clickedItems.push(items);

        var result = _this.allPropertiescity.filter((item) =>
          _this.clickedItems.includes(item.propertyCityid)
        );

        _this.allProperties = result;
        _this.renderList(); //re-renderlist on DOM
        console.log(_this.allProperties);
      }
      if (_this.clickedItems.length <= 0) {
        _this.showclearCitybutton = false;
        _this.allProperties = _this.allPropertiescity;
        _this.renderList(); //re-renderlist on DOM
      }
    },

    clearCityfilter() {
      this.clickedItems.splice(0);
      this.bottonStatus = false;
      this.showclearCitybutton = false;
      this.allProperties = this.allPropertiescity;
      this.renderList(); //re-renderlist on DOM
    },

    getAllCities() {
      this.isLoadingfilter = true;
      let _this = this;
      axios
        .get(`${this.apiUrl}/api/cities`)
        .then((res) => {
          let cityList = res.data.data;
          let cityListaray = [];
          if (cityList.length > 0) {
            let formattedArr = [];
            for (let i = 0; i < cityList.length; i++) {
              let tempObj = {
                cityId: cityList[i].id.toString(),
                cityName: cityList[i].city_name,
              };
              formattedArr[i] = { ...tempObj };
            }
            this.cityListaray = formattedArr;
            var result = _this.cityListaray.filter((item) =>
              _this.finalcityArray.includes(item.cityId)
            );
            this.cityList = result;
            _this.isLoadingfilter = false;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  computed: {
    totalPages() {
      return this.allProperties.length &&
        this.allProperties.length > this.perPage
        ? Math.ceil(this.allProperties.length / this.perPage)
        : 1;
    },

    start() {
      return (this.pageToOpen - 1) * this.perPage;
    },

    stop() {
      if (this.allProperties.length - this.start >= this.perPage) {
        return this.pageToOpen * this.perPage - 1;
      } else {
        return this.allProperties.length - 1;
      }
    },

    showNextpage() {
      return this.currentPage < this.totalPages;
    },

    showPrevpage() {
      return this.currentPage > 1;
    },
  },

  watch: {
    perPage: function () {
      this.renderList();
    },
  },
};
</script>
<template>
  <div>
    <NuxtLayout name="footer">
      <NuxtLayout name="subscribe">
        <div class="listings_inner">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12">
                <div class="listings_inner_title">
                  <span>Spectacular Second Homes</span>
                  <h1>Luxury Homes In Top Locations</h1>
                  <p>
                    Explore our collection of available homes and Indus-worthy
                    Prospects.
                  </p>
                </div>
              </div>
              <div class="col-md-12"></div>
              <div class="col-md-12">
                <div class="listings_inner_box">
                  <div class="row">
                    <div class="col-md-12" v-if="isLoading">
                      <div class="loader">
                        Loading properties. Please wait...
                      </div>
                    </div>
                    <div
                      class="col-md-12"
                      v-else-if="propertiesToDisplay.length"
                    >
                      <div class="row">
                        <div
                          class="col-lg-4 col-md-6 mbottom"
                          v-for="(proDetailInner, index) in propertiesToDisplay"
                          :key="index"
                        >
                          <CardsProperty
                            :propertyId="proDetailInner.id"
                            :image="proDetailInner.image"
                            :status="proDetailInner.status"
                            :propertyName="proDetailInner.propertyName"
                            :propertyShare="proDetailInner.propertyShare"
                            :propertyPrice="proDetailInner.propertyPrice"
                            :propertyLocation="proDetailInner.propertyLocation"
                            :bed="proDetailInner.bed"
                            :bath="proDetailInner.bath"
                          />
                        </div>
                      </div>
                      <div
                        class="col-md-12"
                        v-if="allProperties.length > propertiesToDisplay.length"
                      >
                        <div class="pagination_custom">
                          <button
                            class="pagination_button"
                            v-show="showPrevpage"
                            @click.stop.prevent="renderList(currentPage - 1)"
                          >
                            <img src="/images/left.png" alt="prev" />
                          </button>
                          <button
                            class="pagination_button"
                            :class="{
                              active_pagi_page: currentPage === index,
                            }"
                            v-for="index in totalPages"
                            :key="index"
                            @click.stop.prevent="
                              renderList((currentPage = index))
                            "
                          >
                            {{ index }}
                          </button>

                          <button
                            class="pagination_button"
                            v-show="showNextpage"
                            @click.stop.prevent="renderList(currentPage + 1)"
                          >
                            <img src="/images/right.png" alt="next" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-sm-offset-3" v-else>
                      Nothing to show
                    </div>
                  </div>
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
.listings_inner {
  padding: 50px 0;
}
.listings_inner_title h1 {
  font-size: 37px;
  color: #000000;
  line-height: 1;
  margin-bottom: 25px;
  font-weight: 600;
  text-transform: uppercase;
}

.listings_inner_title {
  text-align: center;
  margin-bottom: 55px;
}

.listings_inner_title span {
  font-size: 19px;
  font-weight: 500;
  display: block;
  margin-bottom: 20px;
  color: #000;
  line-height: 1;
}
.listings_inner_title p {
  font-size: 19px;
  font-weight: 500;
  display: block;
  color: #000;
  line-height: 1;
}
.mbottom:nth-last-child(n + 4) {
  margin-bottom: 25px;
}
.city_list ul {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow-x: scroll;
}

.city_list ul li:not(:last-child) {
  margin-right: 8px;
}
.listing_filters_title span {
  color: #523174;
  font-size: 17px;
  font-weight: 500;
}

.listing_filters_title {
  margin-bottom: 18px;
}
.listing_filters_box {
  margin-bottom: 20px;
}
.city_list {
  width: 80%;
  display: flex;
  align-items: center;
}
.city_list ul::-webkit-scrollbar {
  height: 0;
  width: 0;
}
.city_list button.next img,
.city_list button.prev img {
  width: 12px;
}

.city_list button.next,
.city_list button.prev {
  background: transparent;
  border: none;
  padding: 0;
  line-height: 1;
}
.city_list button.next {
  margin-left: 10px;
}
.city_list button.prev {
  margin-right: 10px;
}
.listing_filters_title button {
  background: transparent;
  border: none;
  padding: 0;
  margin-left: 17px;
  color: #db4949;
  font-size: 16px;
  font-weight: 500;
}
.listing_filters {
  display: flex;
  align-items: center;
}

p.sort_box {
  background: #fff;
  border: 1px solid #523174;
  width: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.filter_option {
  width: 20%;
  height: 100%;
  margin-left: 7px;
  position: relative;
}

span.sort_title {
  color: #696969;
  font-weight: 500;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
}

span.sort_title img {
  width: 20px;
  margin-right: 4px;
}

span.sort_type {
  font-weight: 600;
  color: #26282b;
  margin-left: 5px;
  font-size: 16px;
}

.filter_option_box {
  position: absolute;
  z-index: 9;
  width: 275px;
  right: 0;
  top: 0;
  background: #fff;
  border: 1px solid #523174;
}

.filter_option_box_sort_by_title span img {
  filter: contrast(0);
  width: 17px;
}

.filter_option_box_sort_by_title,
.filter_option_box_by_destination_title {
  position: relative;
  text-align: center;
  border-bottom: 1px solid #c3c3c3;
  padding: 6px;
  background: #f7f5f4;
}

.filter_option_box_sort_by_title strong,
.filter_option_box_by_destination_title strong {
  color: #523174;
  font-size: 17px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
}

.filter_option_box_sort_by_title span {
  position: absolute;
  right: 14px;
  line-height: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 17px;
  height: 17px;
  cursor: pointer;
}

.country_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f7f5f4;
  margin-bottom: 7px;
}

.country_list span {
  display: block;
  width: 100%;
  text-align: center;
  margin: 0 2px;
  padding: 7px;
  color: #6e6e6e;
  font-weight: 500;
  font-family: "Manrope", sans-serif;
  font-size: 15px;
  cursor: pointer;
}

.country_list span:hover {
  background: #f7f5f4;
}

.country_list span:first-child {
  margin-left: 0;
}

.country_list span:last-child {
  margin-right: 0;
}

.main_state {
  position: relative;
  padding: 5px;
  background: #523174a8;
}

span.show_sub_state img {
  margin-top: 1px;
  transform: rotate(270deg);
  width: 8px;
  transition: all 0.3s ease-in-out;
}

span.show_sub_state {
  background: #e5e5e5;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 25px;
  right: 7px;
  top: 0;
  border-radius: 26px;
  bottom: 0;
  margin: auto;
  cursor: pointer;
}

.main_state .form-check {
  margin-right: 30px;
}

.sub_state_list {
  padding: 6px;
  margin-left: 18px;
}

.sub_state_list_input {
  padding: 3px 9px;
}

.sub_state_list_input:hover {
  background: #d3bb9d;
}

.sub_state_list_input:hover label {
  color: #fff;
}
.main_state .form-check label {
  color: #fff;
}
span.show_sub_state.changearrow img {
  transform: rotate(90deg);
  transition: all 0.3s ease-in-out;
  margin-top: -2px;
}

button.pagination_button {
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  border-radius: 2.125rem;
  background-color: #5231744d;
  color: #523174;
  border: none;
  font-size: 1rem;
  width: 38px;
  height: 38px;
  border: 1px solid #523174;
  position: relative;
}

button.pagination_button.active_pagi_page {
  box-shadow: 0 0 0.3rem 0 rgb(0 0 0 / 0%), 0 0 0.6rem 1px rgb(0 0 0 / 15%);
  background: #523174;
  color: #fff;
}

.pagination_custom button.pagination_button:not(:last-child) {
  margin-right: 12px;
}

button.pagination_button img {
  width: 12px;
  line-height: 0;
  display: flex;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 13px;
}
.pagination_custom button.pagination_button:not(:last-child) img {
  left: 10px;
}
button.pagination_button:last-child,
button.pagination_button:first-child {
  padding: 0.85rem 0.6rem;
  background: #523174;
}

.pagination_custom {
  text-align: center;
  margin-top: 38px;
  display: flex;
  justify-content: center;
}
button.pagination_button:hover {
  box-shadow: 0 0 0.3rem 0 rgb(0 0 0 / 0%), 0 0 0.6rem 1px rgb(0 0 0 / 15%);
  background: #523174;
  color: #fff;
}
@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
  .mbottom:nth-last-child(n + 3) {
    margin-bottom: 25px;
  }
}
@media (max-width: 767.98px) {
  .listings_inner {
    padding: 40px 0;
  }
  .listings_inner_title span {
    font-size: 17px;
    margin-bottom: 12px;
  }
  .listings_inner_title h1 {
    font-size: 23px;
    margin-bottom: 15px;
  }
  .listings_inner_title p {
    font-size: 16px;
  }
  .mbottom:nth-last-child(n + 2) {
    margin-bottom: 25px;
  }
  .listings_inner_title {
    margin-bottom: 30px;
  }
}
@media (max-width: 575.98px) {
}
</style>
