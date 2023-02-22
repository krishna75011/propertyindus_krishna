<script setup>
import axios from "axios";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const SellerPointsWorks = ref([
  {
    image: "/images/seller_points_work1.png",
    title: "Request For Offer Online",
    content:
      "Tell us about your home and answer a few questions. It takes less than 5 minutes. There is no obligation and it's free.",
    class: "mb-3 mb-md-4 customhight",
  },
  {
    image: "/images/seller_points_work2.png",
    title: "We Will Send You An Offer In 72 Hours",
    content:
      "If your property matches our requirements. Within 72 hours, we’ll send you a cash offer on your home.",
    class: "mb-3 mb-md-4",
  },
  {
    image: "/images/seller_points_work3.png",
    title: "Approvals And Verifications",
    content:
      "You can approve or negotiate our offer.  Once we agree with the offer terms, we will verify your documents with the registry in India. If everything is satisfactory, we will give you a deposit, and then the closing at the agreed time.",
    class: "mb-3 mb-md-0",
  },
  {
    image: "/images/seller_points_work4.png",
    title: "Close the deal. Sell to us",
    content:
      "We will close the deal in 6-12 months, with an early occupancy to modernize your property. We will market to prospective buyers prior to closing. We will close in time irrespective of whether we find a buyer or not.",
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

const disable = ref(false);
const showMain = ref(true);
const showPersonal = ref(false);
const showManualaddress = ref(false);
if (showPersonal === true || showManualaddress === true) {
  definePageMeta({
    layout: false,
  });
}

const addAddress = (items) => {
  showMain.value = items.showMain;
  showManualaddress.value = items.showManualaddress;
};

const addAddressfrom = (items) => {
  showMain.value = items.showMain;
  showManualaddress.value = items.showManualaddress;
};

const goHome = () => {
  showPersonal.value = false;
  showManualaddress.value = false;
  showMain.value = true;
};

const schemaManualaddress = Yup.object().shape({
  streetAddress: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
  district: Yup.string().required("District is required"),
  state: Yup.string().required("State is required"),
  pin: Yup.string().required("Postal Code is required"),
});

const streetAddress = ref("");
const city = ref("");
const district = ref("");
const state = ref("");
const pin = ref("");

const gotoPersonal = (items) => {
  showMain.value = items.showMain.value;
  streetAddress.value = items.street.value;
  city.value = items.city.value;
  district.value = items.district.value;
  state.value = items.state.value;
  pin.value = items.pin.value;
  if ((items.street.value != "") & (items.pin.value != "")) {
    showPersonal.value = items.showPersonal;
  } else {
    showManualaddress.value = items.showPersonal;
  }
};

const gotoPersonalmanual = () => {
  showManualaddress.value = false;
  showPersonal.value = true;
};

const step1 = ref(true);
const step2 = ref(false);
const step3 = ref(false);
const step4 = ref(false);
const step5 = ref(false);
const step6 = ref(false);

const fullName = ref("");
const email = ref("");
const phone = ref("");
const residence = ref([]);
const selectResidence = ref("India");
const homeowner = ref("1");
const homeowner_name = ref("");
const relationship = ref("");
const authorized = ref("1");
const minimum = ref("");
const better = ref("");
const bedrooms = ref("1");
const washrooms = ref("1");
const homeArea = ref("");
const homeCondition = ref("Highly upgraded");
const extraDetails = ref("");

const typeofhome = ref([
  "Villa",
  "Flat/Apartment",
  "Regular home",
  "Farm House",
  "Other",
]);
const selectTypeofhome = ref("Villa");
const style = ref(["One store", "2 store", "3 storey"]);
const selectStyle = ref("One store");
const landarea = ref([
  "0-5 cents",
  "5-10 cents",
  "10-20 cents",
  "over 20 cents",
  "over 1 acre",
]);
const selectLandarea = ref("0-5 cents");

const getAllcountry = async () => {
  try {
    const countryResponse = await axios.get(
      "https://app.propertyindus.com/api/countries"
    );
    let countryList = countryResponse.data.data;
    if (countryList.length > 0) {
      let formattedArr = [];
      for (let i = 0; i < countryList.length; i++) {
        formattedArr[i] = countryList[i].country_name;
      }
      residence.value = formattedArr;
    }
  } catch (error) {
    console.error(error);
  }
};
getAllcountry();
const backStep1 = () => {
  step2.value = false;
  step1.value = true;
};
const goStep2 = () => {
  if (homeowner.value == 1) {
    step1.value = false;
    step3.value = true;
  } else {
    step1.value = false;
    step2.value = true;
  }
};
const backStep2 = () => {
  if (homeowner.value == 1) {
    step3.value = false;
    step1.value = true;
  } else {
    step3.value = false;
    step2.value = true;
  }
};
const goStep3 = () => {
  step2.value = false;
  step3.value = true;
  if (homeowner.value == 1) {
    homeowner_name.value = "";
    relationship.value = "";
  }
};
const backStep3 = () => {
  step4.value = false;
  step3.value = true;
};
const goStep4 = () => {
  step3.value = false;
  step4.value = true;
};
const backStep4 = () => {
  step5.value = false;
  step4.value = true;
};
const goStep5 = () => {
  step4.value = false;
  step5.value = true;
};
const backStep5 = () => {
  step6.value = false;
  step5.value = true;
};
const goStep6 = () => {
  step5.value = false;
  step6.value = true;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  phone: Yup.string()
    .required("Mobile Number is required")
    .matches(/^\d{10}$/, "Mobile Number must be 10 digits"),
});

const schema2 = Yup.object().shape({
  homeowner_name: Yup.string().required("Home Owner Name is required"),
  relationship: Yup.string().required(
    "Relationship With The Owner is required"
  ),
});

// const schema3 = Yup.object().shape({
//   minimum: Yup.string()
//     .required("Minimum expected value is required")
//     .matches(/^\d+$/, "Enter only numbers"),
//   better: Yup.string()
//     .required("Better expected value is required")
//     .matches(/^\d+$/, "Enter only numbers"),
// });

// const schema4 = Yup.object().shape({
//   homearea: Yup.string()
//     .required("Home area is required")
//     .matches(/^\d+$/, "Enter only numbers"),
// });

const incrementBedrooms = () => {
  if (bedrooms.value < 8) {
    bedrooms.value++;
  }
};

const decrementBedrooms = () => {
  if (bedrooms.value > 1) {
    bedrooms.value--;
  }
};

const incrementWashrooms = () => {
  if (washrooms.value < 8) {
    washrooms.value++;
  }
};

const decrementWashrooms = () => {
  if (washrooms.value > 1) {
    washrooms.value--;
  }
};

// function onSubmit() {
//   const formdata = JSON.stringify({
//     home_address: streetAddress.value,
//     city: city.value,
//     district: district.value,
//     state: state.value,
//     postal_code: pin.value,
//     name: fullName.value,
//     phone: phone.value,
//     email: email.value,
//     current_country: selectResidence.value,
//     are_you_owner: "0",
//     owner_name: homeowner_name.value,
//     relationship_with_owner: relationship.value,
//     authorized_to_sell_home: "0",
//     home_type: selectTypeofhome.value,
//     home_style: selectStyle.value,
//     land_area: selectLandarea.value,
//     bedrooms: bedrooms.value,
//     washrooms: washrooms.value,
//     sqft: homeArea.value,
//     home_area: homeArea.value,
//     home_condition: homeCondition.value,
//     extra_details: extraDetails.value,
//     min_expected_price: minimum.value,
//     max_expected_price: better.value,
//     attachments: files,
//   });

//   axios
//     .post("https://app.propertyindus.com/api/submit-home-valuation", formdata, {
//       headers: {
//         // Overwrite Axios's automatically set Content-Type
//         "Content-Type": "application/json",
//       },
//     })
//     .then(function (response) {
//       if (response.status == 200) {
//         // window.location = "/thankyou";
//         console.log(response);
//       }
//     })
//     .catch(function (error) {
//       if (error.message == "Request failed with status code 400") {
//         // window.location = "/thankyou";
//         console.log(error);
//       }
//     });
// }
const isDragging = ref(false);
const files = ref([]);

const onChange = (event) => {
  files.value.push(...event.target.files);
};
const dragover = () => {
  isDragging.value = true;
};

const dragleave = () => {
  isDragging.value = false;
};

const onDrop = (e) => {
  files.value.push(...e.dataTransfer.files);
  isDragging.value = false;
};
const remove = (i) => {
  files.value.splice(i, 1);
};

const generateURL = (file) => {
  let fileSrc = URL.createObjectURL(file);
  setTimeout(() => {
    URL.revokeObjectURL(fileSrc);
  }, 1000);
  return fileSrc;
};

const submitForm = async () => {
  if (homeArea.value == "") {
    homeArea.value = 0;
  }

  if (minimum.value == "") {
    minimum.value = 0;
  }

  if (better.value == "") {
    better.value = 0;
  }
  const formData = new FormData();
  formData.append("home_address", streetAddress.value);
  formData.append("city", city.value);
  formData.append("district", district.value);
  formData.append("state", state.value);
  formData.append("postal_code", pin.value);
  formData.append("name", fullName.value);
  formData.append("phone", phone.value);
  formData.append("email", email.value);
  formData.append("current_country", selectResidence.value);
  formData.append("are_you_owner", homeowner.value);
  formData.append("owner_name", homeowner_name.value);
  formData.append("relationship_with_owner", relationship.value);
  formData.append("authorized_to_sell_home", authorized.value);
  formData.append("home_type", selectTypeofhome.value);
  formData.append("home_style", selectStyle.value);
  formData.append("land_area", selectLandarea.value);
  formData.append("bedrooms", bedrooms.value);
  formData.append("washrooms", washrooms.value);
  formData.append("sqft", homeArea.value);
  formData.append("home_area", homeArea.value);
  formData.append("home_condition", homeCondition.value);
  formData.append("extra_details", extraDetails.value);
  formData.append("min_expected_price", minimum.value);
  formData.append("max_expected_price", better.value);
  //formData.append("attachments", files.value.file);
  //files.value.forEach((file) => formData.append("attachments", file));
  for (let i = 0; i < files.value.length; i++) {
    formData.append(`attachments[${i}]`, files.value[i]);
  }
  axios
    .post("https://app.propertyindus.com/api/submit-home-valuation", formData, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function (response) {
      const router = useRouter();
      localStorage.setItem("thankyou", true);
      router.push({ path: "/thankyou" });
      //console.log(response.data);
    })
    .catch(function (error) {
      Swal.fire({
        title: error.response.data.message,
        icon: "warning",
        showCloseButton: true,
        showConfirmButton: false,
      });
    });
};
</script>

<template>
  <NuxtLayout name="default">
    <div v-if="showMain === true">
      <NuxtLayout name="footer">
        <NuxtLayout name="subscribe">
          <BannersSellersBanner
            @gotoPersonal="gotoPersonal"
            @addAddress="addAddress"
            @addAddressfrom="addAddressfrom"
          />
          <div class="seller_points">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-12">
                  <div class="seller_points_title">
                    <h2>
                      Get A No-obligation Cash Offer- Sell To Us- It's Easy!
                    </h2>
                    <span>
                      We cater to only NRI Indian sellers, who want to sell
                      their own property in India.
                      <strong>
                        Currently, we are only buying properties in Kerala.
                      </strong>
                    </span>
                    <p>
                      No middleman or realtors. No commission or fees to you. We
                      buy directly from you with a cash offer. Simple and easy
                    </p>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <div
                      class="col-md-6"
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
                        <div class="seller_points_work_box_content_box">
                          <div class="seller_points_work_box_title">
                            <span>{{ SellerPointsWork.title }}</span>
                          </div>
                          <div class="seller_points_work_box_content">
                            <p>
                              {{ SellerPointsWork.content }}
                            </p>
                            <span>{{ index + 1 }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 mt-4 mt-md-5 pt-2 pt-md-3">
                  <div class="row align-items-center">
                    <div class="col-md-6">
                      <div class="whosell_image">
                        <img
                          src="/images/whosell.png"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="whosell_content">
                        <h3>Who sells properties to us!</h3>
                        <p>
                          We are catering to NRI (Indians residing outside
                          India, who is OCA holders) who want to sell directly
                          to us without a middleman or realtors. NRI’s in
                          US/Canada, UK, Europe, and more… We do not charge any
                          commissions or fees. If your property matches our
                          buying criteria, we will be glad to give a
                          no-obligation offer. Watch our video to learn more.
                        </p>
                        <NuxtLink to="/learn"> Learn More </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="sellers_faq">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="sellers_faq_title">
                    <h4>Frequently Asked Questions</h4>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="sellers_faq_box">
                    <AccrodionFaq :faqItems="faqItems" />
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </NuxtLayout>
      </NuxtLayout>
    </div>
    <div v-if="showManualaddress === true">
      <div class="address_manual_box">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="address_manual_box_image">
                <img src="/images/address_manul_side.png" class="img-fluid" />
              </div>
              <div class="scustom_back_button">
                <button @click="goHome">back</button>
              </div>
            </div>
            <div class="col-md-8">
              <div class="address_manual_box_form">
                <Form
                  @submit="gotoPersonalmanual"
                  :validation-schema="schemaManualaddress"
                  v-slot="{ errors }"
                  class="row g-5 align-items-center"
                >
                  <div class="col-md-6 custom_input">
                    <label class="form-label"> STREET ADDRESS </label>
                    <Field
                      type="text"
                      name="streetAddress"
                      class="form-control"
                      v-model="streetAddress"
                      :class="{ 'is-invalid': errors.streetAddress }"
                    />
                    <div class="invalid-feedback">
                      {{ errors.streetAddress }}
                    </div>
                  </div>
                  <div class="col-md-6 custom_input">
                    <label class="form-label"> CITY </label>
                    <Field
                      type="text"
                      name="city"
                      class="form-control"
                      v-model="city"
                      :class="{ 'is-invalid': errors.city }"
                    />
                    <div class="invalid-feedback">{{ errors.city }}</div>
                  </div>
                  <div class="col-md-6 custom_input">
                    <label class="form-label"> DISTRICT </label>
                    <Field
                      type="text"
                      name="district"
                      class="form-control"
                      v-model="district"
                      :class="{ 'is-invalid': errors.district }"
                    />
                    <div class="invalid-feedback">{{ errors.district }}</div>
                  </div>
                  <div class="col-md-6 custom_input">
                    <label class="form-label"> STATE </label>
                    <Field
                      type="text"
                      name="state"
                      class="form-control"
                      v-model="state"
                      :class="{ 'is-invalid': errors.state }"
                    />
                    <div class="invalid-feedback">{{ errors.state }}</div>
                  </div>
                  <div class="col-md-6 custom_input">
                    <label class="form-label"> POSTAL CODE </label>
                    <Field
                      type="text"
                      name="pin"
                      class="form-control"
                      v-model="pin"
                      :class="{ 'is-invalid': errors.pin }"
                    />
                    <div class="invalid-feedback">{{ errors.pin }}</div>
                  </div>
                  <div class="col-md-6 custom_submit_button">
                    <button type="submit" class="form_submit">Next</button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showPersonal === true">
      <div class="multi_step_form">
        <div class="step1" v-if="step1">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-7 p-0">
                <div class="step_box">
                  <div class="step_box_sticky">
                    <div class="step_list">
                      <ul>
                        <li class="location compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Property Address</p>
                        </li>
                        <li class="contact active-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Contact Details</p>
                        </li>
                        <li class="price step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Expected price</p>
                        </li>
                        <li class="house step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Home Details</p>
                        </li>
                      </ul>
                    </div>
                    <div class="setp_content">
                      <h1>
                        These questions help us reach out to explain all your
                        selling options better!
                      </h1>
                    </div>
                    <div class="step_button">
                      <button @click="goHome">back</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 p-0">
                <div class="form_box">
                  <Form
                    @submit="goStep2"
                    :validation-schema="schema"
                    v-slot="{ errors }"
                    class="row g-5 align-items-center"
                  >
                    <div class="col-md-12 custom_input2">
                      <label class="form-label"> Name </label>
                      <Field
                        type="text"
                        name="name"
                        class="form-control"
                        v-model="fullName"
                        :class="{ 'is-invalid': errors.name }"
                      />
                      <div class="invalid-feedback">{{ errors.name }}</div>
                    </div>
                    <div class="col-md-12 custom_input2">
                      <label class="form-label"> Phone </label>
                      <Field
                        type="text"
                        name="phone"
                        class="form-control"
                        v-model="phone"
                        :class="{ 'is-invalid': errors.phone }"
                      />
                      <div class="invalid-feedback">{{ errors.phone }}</div>
                    </div>
                    <div class="col-md-12 custom_input2">
                      <label class="form-label"> Email </label>
                      <Field
                        type="text"
                        name="email"
                        class="form-control"
                        v-model="email"
                        :class="{ 'is-invalid': errors.email }"
                      />
                      <div class="invalid-feedback">{{ errors.email }}</div>
                    </div>
                    <div class="col-md-12 select_box">
                      <label class="form-label">
                        Current country of residence
                      </label>
                      <div class="drop">
                        <v-select
                          class="style-chooser"
                          v-model="selectResidence"
                          :options="residence"
                          :clearable="disable"
                          :clearSearchOnSelect="disable"
                          :filterable="disable"
                          :searchable="disable"
                        >
                        </v-select>
                      </div>
                    </div>
                    <div class="col-md-12 select_box">
                      <label class="form-label cw"> Are you homeowner </label>
                      <div class="redio_flex">
                        <div class="form-check form-check-inline">
                          <Field
                            class="form-check-input"
                            type="radio"
                            name="homeowner"
                            id="inlineRadio1"
                            value="1"
                            v-model="homeowner"
                          />
                          <label class="form-check-label" for="inlineRadio1"
                            >Yes</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <Field
                            class="form-check-input"
                            type="radio"
                            name="homeowner"
                            id="inlineRadio2"
                            value="0"
                            v-model="homeowner"
                          />
                          <label class="form-check-label" for="inlineRadio2"
                            >No</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 custom_submit_button">
                      <button type="submit" class="form_submit">Next</button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step2" v-if="step2">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-7 p-0">
                <div class="step_box">
                  <div class="step_box_sticky">
                    <div class="step_list">
                      <ul>
                        <li class="location compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Property Address</p>
                        </li>
                        <li class="contact active-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Contact Details</p>
                        </li>
                        <li class="price step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Expected price</p>
                        </li>
                        <li class="house step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Home Details</p>
                        </li>
                      </ul>
                    </div>
                    <div class="setp_content">
                      <h1>
                        These questions help us reach out to explain all your
                        selling options better!
                      </h1>
                    </div>
                    <div class="step_button">
                      <button @click="backStep1">back</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 p-0">
                <div class="form_box">
                  <Form
                    @submit="goStep3"
                    :validation-schema="schema2"
                    v-slot="{ errors }"
                    class="row g-5 align-items-center"
                  >
                    <div class="col-md-12 select_box">
                      <label class="form-label d-flex">
                        Are you homeowner :
                        <span class="ms-2" v-if="homeowner == '1'">Yes</span
                        ><span class="ms-2" v-else>No</span></label
                      >
                    </div>
                    <div class="col-md-12 custom_input2">
                      <label class="form-label"> Name of homeowner </label>
                      <div class="inlin_input">
                        <Field
                          type="text"
                          name="homeowner_name"
                          class="form-control"
                          v-model="homeowner_name"
                          :class="{ 'is-invalid': errors.homeowner_name }"
                        />
                        <div class="invalid-feedback">
                          {{ errors.homeowner_name }}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 custom_input2">
                      <label class="form-label">
                        Relationship with the owner
                      </label>
                      <div class="inlin_input2">
                        <Field
                          type="text"
                          name="relationship"
                          class="form-control"
                          v-model="relationship"
                          :class="{ 'is-invalid': errors.relationship }"
                        />
                        <div class="invalid-feedback">
                          {{ errors.relationship }}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 select_box">
                      <label class="form-label">
                        Are you authorized to sell this home
                      </label>
                      <div class="redio_flex">
                        <div class="form-check form-check-inline">
                          <Field
                            class="form-check-input"
                            type="radio"
                            name="authorized"
                            id="inlineRadio3"
                            value="1"
                            v-model="authorized"
                          />
                          <label class="form-check-label" for="inlineRadio3"
                            >Yes</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <Field
                            class="form-check-input"
                            type="radio"
                            name="authorized"
                            id="inlineRadio4"
                            value="0"
                            v-model="authorized"
                          />
                          <label class="form-check-label" for="inlineRadio4"
                            >No</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 custom_submit_button">
                      <button type="submit" class="form_submit">Next</button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step3" v-if="step3">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-7 p-0">
                <div class="step_box">
                  <div class="step_box_sticky">
                    <div class="step_list">
                      <ul>
                        <li class="location compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Property Address</p>
                        </li>
                        <li class="contact compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Contact Details</p>
                        </li>
                        <li class="price active-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Expected price</p>
                        </li>
                        <li class="house step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Home Details</p>
                        </li>
                      </ul>
                    </div>
                    <div class="setp_content">
                      <h1>
                        These questions help us reach out to explain all your
                        selling options better!
                      </h1>
                    </div>
                    <div class="step_button">
                      <button @click="backStep2">back</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 p-0">
                <div class="form_box">
                  <Form @submit="goStep4" class="row g-5 align-items-center">
                    <div class="col-md-12">
                      <div class="title_box">
                        <span> What is your excepted price ? </span>
                        <p>
                          Please put your lowest to realistic expected price
                          based on your knowledge of home sales in the area.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-12 position-relative custom_dflex">
                      <label class="form-label"> Minimum expected value </label>
                      <div class="input_pp_box custom_dflex">
                        <Field
                          type="text"
                          name="minimum"
                          class="form-control"
                          placeholder="Price In Ruppes"
                          v-model="minimum"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 position-relative custom_dflex">
                      <label class="form-label"> Better expected value </label>
                      <div class="input_pp_box custom_dflex">
                        <Field
                          type="text"
                          name="better"
                          class="form-control"
                          placeholder="Price In Ruppes"
                          v-model="better"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 custom_submit_button">
                      <button type="submit" class="form_submit">Next</button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step4" v-if="step4">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-7 p-0">
                <div class="step_box">
                  <div class="step_box_sticky">
                    <div class="step_list">
                      <ul>
                        <li class="location compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Property Address</p>
                        </li>
                        <li class="contact compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Contact Details</p>
                        </li>
                        <li class="price compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Expected price</p>
                        </li>
                        <li class="house active-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Home Details</p>
                        </li>
                      </ul>
                    </div>
                    <div class="setp_content">
                      <h1>
                        These questions help us reach out to explain all your
                        selling options better!
                      </h1>
                    </div>
                    <div class="step_button">
                      <button @click="backStep3">back</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 p-0">
                <div class="form_box">
                  <Form @submit="goStep5" class="row g-4 align-items-center">
                    <div class="col-md-12">
                      <div class="title_box">
                        <h4>HOME DETAILS</h4>
                      </div>
                    </div>
                    <div class="col-md-12 select_box">
                      <label class="form-label cw"> Type of home </label>
                      <div class="drop">
                        <v-select
                          class="style-chooser"
                          v-model="selectTypeofhome"
                          :options="typeofhome"
                          :clearable="disable"
                          :clearSearchOnSelect="disable"
                          :filterable="disable"
                          :searchable="disable"
                        >
                        </v-select>
                      </div>
                    </div>
                    <div class="col-md-12 select_box">
                      <label class="form-label cw"> Style </label>
                      <div class="drop">
                        <v-select
                          class="style-chooser"
                          v-model="selectStyle"
                          :options="style"
                          :clearable="disable"
                          :clearSearchOnSelect="disable"
                          :filterable="disable"
                          :searchable="disable"
                        >
                        </v-select>
                      </div>
                    </div>
                    <div class="col-md-12 select_box">
                      <label class="form-label cw"> Land area </label>
                      <div class="drop">
                        <v-select
                          class="style-chooser"
                          v-model="selectLandarea"
                          :options="landarea"
                          :clearable="disable"
                          :clearSearchOnSelect="disable"
                          :filterable="disable"
                          :searchable="disable"
                        >
                        </v-select>
                      </div>
                    </div>
                    <div class="col-md-12 select_box">
                      <label class="form-label cw"> Bedrooms </label>
                      <div class="inlin">
                        <span @click="decrementBedrooms">-</span>
                        <Field
                          type="text"
                          name="bedrooms"
                          class="form-control"
                          v-model="bedrooms"
                          disabled
                        />
                        <span @click="incrementBedrooms">+</span>
                      </div>
                    </div>
                    <div class="col-md-12 select_box">
                      <label class="form-label cw"> Washrooms </label>
                      <div class="inlin">
                        <span @click="decrementWashrooms">-</span>
                        <Field
                          type="text"
                          name="washrooms"
                          class="form-control"
                          v-model="washrooms"
                          disabled
                        />
                        <span @click="incrementWashrooms">+</span>
                      </div>
                    </div>
                    <div class="col-md-12 custom_submit_button">
                      <button type="submit" class="form_submit">Next</button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step5" v-if="step5">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-7 p-0">
                <div class="step_box">
                  <div class="step_box_sticky">
                    <div class="step_list">
                      <ul>
                        <li class="location compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Property Address</p>
                        </li>
                        <li class="contact compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Contact Details</p>
                        </li>
                        <li class="price compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Expected price</p>
                        </li>
                        <li class="house active-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Home Details</p>
                        </li>
                      </ul>
                    </div>
                    <div class="setp_content">
                      <h1>
                        These questions help us reach out to explain all your
                        selling options better!
                      </h1>
                    </div>
                    <div class="step_button">
                      <button @click="backStep4">back</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 p-0">
                <div class="form_box">
                  <Form @submit="goStep6" class="row g-5 align-items-center">
                    <div class="col-md-12">
                      <div class="title_box">
                        <h4>HOME DETAILS</h4>
                      </div>
                    </div>
                    <div class="col-md-12 select_box custom_input2">
                      <label class="form-label cw"> Home area </label>
                      <div class="new_in_grup">
                        <Field
                          type="text"
                          name="homearea"
                          class="form-control"
                          v-model="homeArea"
                        />
                        <span>Square feet</span>
                      </div>
                    </div>
                    <div class="col-md-12 custom_redio_box">
                      <label class="form-label"> Conditions of home </label>
                      <div class="redio_flex custom_redio_flex">
                        <div class="form-check form-check-inline">
                          <Field
                            class="form-check-input"
                            type="radio"
                            name="homeCondition"
                            id="homeCondition1"
                            value="Highly upgraded"
                            v-model="homeCondition"
                          />
                          <label class="form-check-label" for="homeCondition1"
                            >Highly upgraded</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <Field
                            class="form-check-input"
                            type="radio"
                            name="homeCondition"
                            id="homeCondition2"
                            value="Medium upgraded"
                            v-model="homeCondition"
                          />
                          <label class="form-check-label" for="homeCondition2"
                            >Medium upgraded</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <Field
                            class="form-check-input"
                            type="radio"
                            name="homeCondition"
                            id="homeCondition3"
                            value="Need upgrades"
                            v-model="homeCondition"
                          />
                          <label class="form-check-label" for="homeCondition3"
                            >Need upgrades</label
                          >
                        </div>
                        <div class="form-check form-check-inline">
                          <Field
                            class="form-check-input"
                            type="radio"
                            name="homeCondition"
                            id="homeCondition4"
                            value="Need works & reno"
                            v-model="homeCondition"
                          />
                          <label class="form-check-label" for="homeCondition4"
                            >Need works & reno</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="text_area_box">
                        <label class="form-label">Extra details if any</label>
                        <textarea
                          class="form-control"
                          v-model="extraDetails"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12 custom_submit_button">
                      <button type="submit" class="form_submit">Next</button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step5" v-if="step6">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-7 p-0">
                <div class="step_box">
                  <div class="step_box_sticky">
                    <div class="step_list">
                      <ul>
                        <li class="location compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Property Address</p>
                        </li>
                        <li class="contact compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Contact Details</p>
                        </li>
                        <li class="price compleate-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/com.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Expected price</p>
                        </li>
                        <li class="house active-step step_list_item">
                          <div class="icon">
                            <img
                              src="/images/incom.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <p>Home Details</p>
                        </li>
                      </ul>
                    </div>
                    <div class="setp_content">
                      <h1>
                        These questions help us reach out to explain all your
                        selling options better!
                      </h1>
                    </div>
                    <div class="step_button">
                      <button @click="backStep5">back</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 p-0">
                <div class="form_box">
                  <Form @submit="submitForm" class="row g-5 align-items-center">
                    <div class="col-md-12">
                      <div class="title_box">
                        <span> Do you want to upload any pictures ? </span>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="main">
                        <div
                          class="dropzone-container"
                          @drop.prevent="onDrop"
                          @dragover.prevent="dragover"
                          @dragenter.prevent
                          @dragleave.prevent="dragleave"
                        >
                          <input
                            type="file"
                            multiple
                            name="file"
                            id="fileInput"
                            class="hidden-input"
                            @change="onChange"
                            ref="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                          />

                          <label for="fileInput" class="file-label">
                            <div v-if="isDragging">
                              Release to drop files here.
                            </div>
                            <div v-else>
                              <span
                                >SELECT IMAGE FILE
                                <img
                                  src="/images/up_image.png"
                                  class="img-fluid"
                                  alt="image"
                              /></span>
                              <p>or drop Image documents here</p>
                            </div>
                          </label>
                          <!-- Note: Only add the code block below -->
                          <div
                            class="preview-container mt-4"
                            v-if="files.length"
                          >
                            <div
                              v-for="(file, index) in files"
                              :key="index"
                              class="preview-card"
                            >
                              <div>
                                <img
                                  class="preview-img"
                                  :src="generateURL(file)"
                                />
                                <button
                                  class="ml-2"
                                  type="button"
                                  @click="remove(index)"
                                  title="Remove file"
                                >
                                  ×
                                </button>
                                <!-- <p>
                                  {{ file.name }}
                                  {{ Math.round(file.size / 1000) + "kb" }}
                                </p> -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 custom_submit_button">
                      <button type="submit" class="form_submit">
                        Submit for our offer
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.seller_points {
  padding: 60px 0;
}
.seller_points_title {
  text-align: center;
  margin-bottom: 50px;
}
.seller_points_title h2 {
  font-size: 32px;
  color: #000000;
  line-height: 1;
  margin-bottom: 25px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.seller_points_title span {
  display: block;
  font-size: 16px;
  line-height: 1;
  margin-bottom: 15px;
}

.seller_points_title span strong {
  display: block;
  margin-top: 7px;
}

.seller_points_title p {
  font-size: 16px;
}

/*box*/
.seller_points_work_box {
  position: relative;
}

.seller_points_work_box_image {
  padding: 0 0 0 80px;
}

.seller_points_work_box_content_box {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.1);
  padding: 25px 18px;
  margin: 0 140px 0 10px;
  position: relative;
  top: -110px;
  text-align: center;
  margin-bottom: -80px;
}
.customhight .seller_points_work_box_content_box {
  padding: 48px 18px 25px;
}
.seller_points_work_box_image img {
  width: 100%;
  height: 294px;
}

.seller_points_work_box_title span {
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  font-weight: 700;
  font-size: 19px;
  line-height: 1.2;
  margin-bottom: 10px;
}

.seller_points_work_box_content p {
  font-size: 17px;
  margin-bottom: 10px;
}

.seller_points_work_box_content span {
  background: #523174;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  line-height: 1;
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 025px;
}
/*whosell*/
.whosell_image {
  box-shadow: 0 0 8px 2px #0000001a;
}
.whosell_image img {
  width: 100%;
}
.whosell_content h3 {
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 11px;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.whosell_content p {
  font-size: 16px;
  color: #000;
}
.whosell_content a {
  color: #000;
  text-transform: uppercase;
  font-size: 18px;
  text-decoration: underline;
  display: block;
  margin-top: 10px;
  letter-spacing: 0.1em;
}

/*multi-step-form*/
.multi_step_form {
  position: relative;
  height: 100%;
  overflow: hidden;
  width: 100%;
}
.step_box {
  position: relative;
  height: 100%;
  z-index: 9;
  width: 100%;
  padding: 29px;
}

.step_box:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -9;
  left: 0;
  top: 0;
  background: #26264f;
  opacity: 0.4;
}
.step_list ul li {
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  width: 25%;
  position: relative;
  opacity: 0.5;
  letter-spacing: 0.5px;
}

.step_list ul li.compleate-step {
  opacity: 1;
}
.step_list ul li.active-step {
  opacity: 1;
}
.step_list ul {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.step_list ul li span {
  display: block;
  margin: auto;
  text-transform: none;
  letter-spacing: 1px;
  color: #523174;
  font-weight: 500;
  word-break: break-word;
  font-size: 11px;
  width: 90%;
}
.step_list {
  margin-top: 35px;
  padding: 0 70px;
}
.step_list ul li .icon {
  position: relative;
  width: 36px;
  height: 36px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 27px;
  margin-bottom: 10px;
  overflow: hidden;
}

.step_list ul li .icon img {
  width: 35px;
  height: 35px;
}
.step_list ul li:before {
  content: "";
  position: absolute;
  background: #fff;
  height: 4px;
  width: 78%;
  top: 17px;
  left: 0;
  z-index: -9;
}
.step_list ul li.step_list_item p {
  position: absolute;
  left: 12px;
  width: 61%;
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.2;
  text-transform: capitalize;
  top: 35px;
}

.setp_content h1 {
  color: #fff;
  font-weight: 700;
  font-size: 39px;
  line-height: 1.5;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 100%;
}

.setp_content {
  margin-top: 60px;
  margin-bottom: 45px;
  margin-left: 65px;
}
.step_button {
  margin-left: 65px;
}
.step_button button {
  font-weight: 500;
  color: #000;
  background: #ffffff;
  padding: 8px 18px;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  text-transform: capitalize;
  font-size: 15px;
  letter-spacing: 1px;
  border: none;
}

.step1 .step_box {
  background: url(/images/step1.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
}

.step2 .step_box {
  background: url(/images/step1.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
}

.step3 .step_box {
  background: url(/images/step3.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
}

.step4 .step_box {
  background: url(/images/step3.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
}

.step5 .step_box {
  background: url(/images/step1.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
}

/*manul add address*/
.address_manual_box {
  position: relative;
  background: url(/images/manual_back.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  z-index: 9;
}
.address_manual_box_image {
  text-align: center;
}

.address_manual_box_image img {
  width: 65%;
}

.address_manual_box_form {
  padding: 0 30px;
}

/*form*/
.form_box {
  height: 86.5vh;
  padding: 45px;
  background: #fff;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1199.98px) {
}

@media screen and (max-width: 991.98px) {
}

@media screen and (max-width: 767.98px) {
}

@media screen and (max-width: 376.98px) {
}
@media screen and (max-width: 321.98px) {
}
</style>
