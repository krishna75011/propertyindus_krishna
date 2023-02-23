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
const position = ref(["Front End Developer", "Back End Developer"]);
const selectPosition = ref("");
const fileName = ref("Upload Resume");
const files = ref(null);

function onFileChange(event) {
  var fileData = event.target.files[0];
  fileName.value = fileData.name;
  files.value = event.target.files[0];
}

const schema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  phone: Yup.string()
    .required("Mobile Number is required")
    .matches(/^\d{10}$/, "Mobile Number must be 10 digits"),
  resume: Yup.string().required("Resume is required"),
});

const submitForm = async () => {
  const formData = new FormData();
  formData.append("name", fullName.value);
  formData.append("phone", phone.value);
  formData.append("email", email.value);
  formData.append("position", selectPosition.value);
  formData.append("cover_note", messagge.value);
  formData.append("resume", files.value);

  axios
    .post("https://app.propertyindus.com/api/submit-careers", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function (response) {
      const router = useRouter();
      localStorage.setItem("thankyou", true);
      router.push({ path: "/thankyou-career" });
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
  <div>
    <NuxtLayout name="footer">
      <BannersCareerBanner />
      <div class="career_box" id="upload_resume">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-6 mb-md-0 mb-4">
              <div class="career_box_content">
                <img src="/images/career_side_image.png" class="img-fluid" />
                <span>
                  It’s important to us that everyone feels healthy and happy.
                </span>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="career_form contact_custom">
                <span>Ready to work at PROPERTYINDUS</span>
                <p>
                  If you're looking for a place where you can work with talented
                  people, solve hard problems and change an industry while doing
                  the most impactful work of your career, apply today.
                </p>
                <Form
                  @submit="submitForm"
                  :validation-schema="schema"
                  v-slot="{ errors }"
                  class="row g-lg-4 g-md-3 g-3 align-items-center"
                >
                  <div class="col-md-12 custom_input2">
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
                  <div class="col-md-12 custom_input2">
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
                  <div class="col-md-12 custom_input2">
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
                  <div class="col-md-12">
                    <div class="drop">
                      <v-select
                        class="style-chooser"
                        v-model="selectPosition"
                        :options="position"
                        :clearable="disable"
                        :clearSearchOnSelect="disable"
                        :filterable="disable"
                        :searchable="disable"
                        placeholder="Choose Position*"
                      >
                      </v-select>
                    </div>
                  </div>
                  <div class="col-md-12 custom_input2">
                    <label class="form-label"> Cover Note : </label>
                    <textarea
                      class="form-control"
                      placeholder="Tell us about your experience"
                      v-model="messagge"
                    ></textarea>
                  </div>
                  <div class="col-md-12">
                    <div class="input-group custom-file-button">
                      <label
                        class="input-group-text"
                        for="resume-file"
                        role="button"
                        >Browse</label
                      >
                      <label
                        for="resume-file"
                        class="form-control"
                        role="button"
                        >{{ fileName }}</label
                      >
                      <Field
                        type="file"
                        class="d-none"
                        ref="file"
                        id="resume-file"
                        name="resume"
                        @change="onFileChange"
                        :class="{ 'is-invalid': errors.resume }"
                      />
                      <div class="invalid-feedback">{{ errors.resume }}</div>
                    </div>
                  </div>
                  <div class="col-md-12 custom_submit_button text-center">
                    <button type="submit" class="form_submit">APPLY</button>
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
.contact_custom .select_box {
  flex-direction: column;
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
.custom-file-button label.input-group-text {
  background: #523174;
  color: #fff;
  font-weight: 600;
  padding: 7px 33px;
  border-color: #523174;
  font-size: 17px;
  box-shadow: 0 4px 6px 1px #00000024;
}

.custom-file-button label.form-control {
  box-shadow: 0 4px 6px 1px #00000024;
  border-top-right-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
  border: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #c4c4c4;
  overflow: hidden;
}

.career_form.contact_custom span {
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 10px;
}

.career_form.contact_custom p {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
}
.career_box {
  padding: 70px 0px;
}
.career_box_content span {
  display: block;
  font-weight: 500;
  font-size: 28px;
  padding: 0 41px;
}
.career_box_content {
  position: sticky;
  top: 30px;
}
@media (max-width: 1441.98px) {
}
@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
  .career_form.contact_custom span {
    font-size: 20px;
  }
  .career_form.contact_custom p {
    font-size: 12px;
  }
  .career_box_content span {
    font-size: 27px;
  }
  .custom-file-button label.input-group-text {
    padding: 7px 19px;
  }
}
@media (max-width: 991.98px) {
  .check_box .form-check-label {
    font-size: 15px;
  }
  .contact_custom .select_box label {
    font-size: 17px;
  }
  .contact_custom .custom_input2 label {
    font-size: 16px;
  }
  .career_form.contact_custom span {
    font-size: 18px;
  }
  .career_box_content span {
    padding: 0px 26px;
    font-size: 16px;
  }
  ::placeholder {
    font-size: 15px;
  }

  :-ms-input-placeholder {
    font-size: 15px;
  }

  ::-ms-input-placeholder {
    font-size: 15px;
  }
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  .career_box {
    padding: 40px 0px;
  }
  .custom-file-button label.input-group-text {
    font-size: 15px;
  }
  .custom-file-button label.form-control {
    font-size: 15px;
  }
  .career_form.contact_custom span,
  .career_form.contact_custom p,
  .career_box_content span {
    text-align: center;
  }
}
@media (max-width: 321.98px) {
}
</style>
