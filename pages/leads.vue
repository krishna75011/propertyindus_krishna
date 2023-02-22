<script setup>
import axios from "axios";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const disable = ref(false);
const fullName = ref("");
const email = ref("");
const phone = ref("");
const messagge = ref("");
const residence = ref([]);
const selectResidence = ref("India");
const user = ref("1");
const agent = ref("0");
const receiveUpdates = ref("0");
const formName = ref("");
const page = ref("");

const schema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  phone: Yup.string()
    .required("Mobile Number is required")
    .matches(/^\d{10}$/, "Mobile Number must be 10 digits"),
});

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

formName.value = localStorage.getItem("formName");
page.value = localStorage.getItem("pageName");
email.value = localStorage.getItem("email");
agent.value = localStorage.getItem("agent");
user.value = localStorage.getItem("user");
// localStorage.removeItem("formName");
// localStorage.removeItem("pageName");
// localStorage.removeItem("email");
// localStorage.removeItem("agent");
// localStorage.removeItem("user");

function onSubmit() {
  const formdata = JSON.stringify({
    email: email.value,
    phone: phone.value,
    name: fullName.value,
    country: selectResidence.value,
    lead_type: user.value,
    is_agent: agent.value,
    is_receive: receiveUpdates.value,
    message: messagge.value,
  });
  axios
    .post("https://app.propertyindus.com/api/submit-lead", formdata, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      const router = useRouter();
      localStorage.setItem("thankyou", true);
      router.push({ path: "/thankyou" });
    })
    .catch(function (error) {
      Swal.fire({
        title: error.response.data.message,
        icon: "warning",
        showCloseButton: true,
        showConfirmButton: false,
      });
    });
}
</script>

<template>
  <div class="lead_new">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 p-0">
          <div class="lead_box">
            <h1>
              These questions help us reach out to explain our latest and
              personalized offers.
            </h1>
            <div class="image_leade_box">
              <img src="/images/leads_side.png" alt="next" />
              <NuxtLink :to="page" class="d-md-none d-lg-block d-none">
                Back
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-0">
          <div class="form_box">
            <Form
              @submit="onSubmit()"
              :validation-schema="schema"
              v-slot="{ errors }"
              class="row g-4 align-items-center"
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
                <label class="form-label"> Phone Number </label>
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
                <label class="form-label"> current country of residence </label>
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
              <div class="col-md-12 custom_input2" v-if="formName == 'appo'">
                <label class="form-label"> Message </label>
                <Field
                  type="text"
                  name="messagge"
                  class="form-control"
                  v-model="messagge"
                />
              </div>
              <div class="col-md-12 custom_submit_button">
                <NuxtLink :to="page" class="d-md-block d-lg-none">
                  Back
                </NuxtLink>
                <button type="submit" class="form_submit">Next</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*form*/
.lead_new {
  padding: 60px 0;
}
.form_box {
  padding: 0 45px;
  background: #fff;
  display: flex;
  align-items: center;
}

.lead_box h1 {
  color: #000;
  font-size: 39px;
  text-align: left;
  line-height: 1.3;
  font-weight: 600;
  text-transform: uppercase;
}

.lead_box a {
  background: #000000;
  color: #fff;
  border: none;
  font-size: 16px;
  line-height: 1;
  padding: 11px 23px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 4px;
  margin-right: 5px;
}

.lead_box img {
  width: 80%;
}
.image_leade_box {
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
}
.lead_box:before {
  content: "";
  position: absolute;
  background: #000;
  height: 105%;
  width: 2px;
  right: -14px;
  top: -5px;
}

@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
  .lead_box h1 {
    font-size: 30px;
  }
}
@media (max-width: 991.98px) {
  .lead_box h1 {
    font-size: 23px;
  }
  .lead_box img {
    width: 100%;
  }
  .custom_submit_button {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .custom_submit_button a {
    background: #000000;
    color: #fff;
    border: none;
    font-size: 16px;
    line-height: 1;
    padding: 11px 23px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 4px;
    margin-right: 5px;
  }
}
@media (max-width: 767.98px) {
  .lead_box:before {
    content: none;
  }
  .lead_new {
    padding: 35px 0;
  }
  .lead_box {
    padding: 0 45px 25px;
  }
}
@media (max-width: 375.98px) {
  .lead_box h1 {
    font-size: 20px;
  }
}
@media (max-width: 321.98px) {
  .lead_box,
  .form_box {
    padding: 0 20px 25px;
  }
}
</style>
