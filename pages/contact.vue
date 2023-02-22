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
        title: error.response.data.data.email,
        icon: "warning",
        showCloseButton: true,
        showConfirmButton: false,
      });
    });
}
</script>

<template>
  <div>
    <NuxtLayout name="footer"
      ><div class="lead_new">
        <div class="container">
          <div class="row align-items-end">
            <div class="col-md-6">
              <div class="lead_box">
                <h1>Contact US</h1>
                <p>
                  We’re here to help & answer any question you might have. We
                  look forward to hearing from you.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form_box contact_custom">
                <Form
                  @submit="onSubmit()"
                  :validation-schema="schema"
                  v-slot="{ errors }"
                  class="row g-4 align-items-center"
                >
                  <div class="col-md-12 select_box">
                    <label class="form-label">
                      Select one of the following
                    </label>
                    <div class="redio_flex">
                      <div class="form-check form-check-inline">
                        <Field
                          class="form-check-input"
                          type="radio"
                          name="user"
                          id="inlineRadio1"
                          value="1"
                          v-model="user"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          I am a buyer
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <Field
                          class="form-check-input"
                          type="radio"
                          name="user"
                          id="inlineRadio2"
                          value="2"
                          v-model="user"
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          I am a seller
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="check_box">
                      <div class="form-check">
                        <Field
                          class="form-check-input"
                          type="checkbox"
                          value="1"
                          name="agent"
                          id="agent_opt"
                          v-model="agent"
                        />
                        <label class="form-check-label" for="agent_opt">
                          I am an Agent (Optional)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 custom_input2">
                    <Field
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Full Name*"
                      v-model="fullName"
                      :class="{ 'is-invalid': errors.name }"
                    />
                    <div class="invalid-feedback">{{ errors.name }}</div>
                  </div>
                  <div class="col-md-6 custom_input2">
                    <Field
                      type="text"
                      name="phone"
                      class="form-control"
                      placeholder="Phone Number*"
                      v-model="phone"
                      :class="{ 'is-invalid': errors.phone }"
                    />
                    <div class="invalid-feedback">{{ errors.phone }}</div>
                  </div>
                  <div class="col-md-6 custom_input2">
                    <Field
                      type="text"
                      name="email"
                      class="form-control"
                      placeholder="Email*"
                      v-model="email"
                      :class="{ 'is-invalid': errors.email }"
                    />
                    <div class="invalid-feedback">{{ errors.email }}</div>
                  </div>
                  <div class="col-md-6">
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
                  <div class="col-md-12 custom_input2">
                    <label class="form-label"> Drop us a line : </label>
                    <textarea
                      class="form-control"
                      placeholder="Your Message"
                      v-model="messagge"
                    ></textarea>
                  </div>
                  <div class="col-md-12">
                    <div class="check_box">
                      <div class="form-check">
                        <Field
                          class="form-check-input"
                          type="checkbox"
                          value="1"
                          name="receiveUpdates"
                          id="receive_updates"
                          v-model="receiveUpdates"
                        />
                        <label class="form-check-label" for="receive_updates">
                          Receive exclusive updates & listings to this email
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 custom_submit_button">
                    <button type="submit" class="form_submit">Next</button>
                    <small
                      >By clicking ‘Send’ you agree to be contacted by
                      PropertyIndus & agree to it’s terms .</small
                    >
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.lead_new {
  padding: 60px 0;
  position: relative;
  z-index: 9;
}
.lead_new:before {
  position: absolute;
  content: "";
  background: url(/images/contact_back.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
  height: 64%;
  width: 45%;
  left: 0;
  z-index: -9;
  top: 0;
}
.contact_custom .select_box {
  flex-direction: column;
}
.lead_box h1 {
  color: #000;
  font-size: 39px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 15px;
}

.lead_box p {
  font-size: 17px;
  margin-right: 48px;
}
.contact_custom .select_box label {
  text-transform: capitalize;
  font-weight: 500;
  font-size: 18px;
}

.contact_custom .select_box .redio_flex {
  margin: 0;
  width: 100%;
  margin-top: 10px;
}

.contact_custom .select_box .redio_flex label {
  font-weight: 400;
  font-size: 17px;
  text-transform: inherit;
}

.contact_custom .custom_input2 input {
  border-color: #eeeeee;
  padding: 8px 0;
}

.check_box .form-check-input {
  background-color: #fff;
  border: 1px solid #283240;
  border-radius: 3px;
}
.check_box .form-check-input:checked {
  background-color: #000000 !important;
  border-color: #000000 !important;
}
.check_box .form-check-label {
  color: #000;
}

.check_box .form-check-input:active {
  filter: brightness(100%);
}
.check_box .form-check-input:focus {
  border-color: #283240 !important;
}

.contact_custom .drop {
  width: 100%;
  margin: 0;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #000;
  opacity: 1;
  /* Firefox */
  font-size: 16px;
  opacity: 1;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #000;
  font-size: 16px;
  opacity: 1;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #000;
  font-size: 16px;
  opacity: 1;
}
.contact_custom textarea {
  background: #eeeeee;
  border-radius: 5px;
}

.contact_custom .custom_input2 label {
  text-transform: capitalize;
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 15px;
}

.contact_custom .custom_submit_button {
  margin-top: 24px;
}

.contact_custom .custom_submit_button small {
  display: block;
  font-size: 12px;
  margin-top: 10px;
  color: #7e7e7e;
}
.contact_custom textarea::placeholder {
  color: #7e7e7e;
  font-size: 15px;
}

.contact_custom textarea:-ms-input-placeholder {
  color: #7e7e7e;
  font-size: 15px;
}

.contact_custom textarea::-ms-input-placeholder {
  color: #7e7e7e;
  font-size: 15px;
}
@media screen and (max-width: 1199.98px) {
}

@media screen and (max-width: 991.98px) {
}

@media screen and (max-width: 767.98px) {
}
</style>
