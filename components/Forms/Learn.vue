<script setup>
import axios from "axios";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { usePlacesAutocomplete } from "v-use-places-autocomplete";

const name = ref("");
const uEmail = ref("");
const phone = ref("");
const address = ref("");
const user = ref("1");

const schema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  uEmail: Yup.string().required("Email is required").email("Email is invalid"),
  phone: Yup.string()
    .required("Mobile Number is required")
    .matches(/^\d{10}$/, "Mobile Number must be 10 digits"),
  address: Yup.string().required("Address is required"),
});

function onSubmit(values, { resetForm }) {
  const formdata = JSON.stringify({
    name: name.value,
    email: uEmail.value,
    phone: phone.value,
    place_to_own: address.value,
    role: user.value,
  });
  axios
    .post("https://app.propertyindus.com/api/add-support", formdata, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      Swal.fire({
        title: response.data.message,
        icon: "success",
        showCloseButton: true,
        showConfirmButton: false,
      });
      resetForm({
        values: {
          name: "",
          uEmail: "",
          phone: "",
          address: "",
          user: "1",
        },
      });
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
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      v-slot="{ errors }"
      class="row g-4 align-items-center"
    >
      <div class="col-md-12 custom_input2">
        <label class="form-label"> Name </label>
        <Field
          type="text"
          class="form-control"
          name="name"
          v-model="name"
          :class="{ 'is-invalid': errors.name }"
          autocomplete="off"
        />
        <div class="invalid-feedback">{{ errors.name }}</div>
      </div>
      <div class="col-md-12 custom_input2">
        <label class="form-label"> Email </label>
        <Field
          type="email"
          class="form-control"
          name="uEmail"
          v-model="uEmail"
          :class="{ 'is-invalid': errors.uEmail }"
          autocomplete="off"
        />
        <div class="invalid-feedback">{{ errors.uEmail }}</div>
      </div>
      <div class="col-md-12 custom_input2">
        <label class="form-label"> Phone </label>
        <Field
          type="text"
          class="form-control"
          name="phone"
          v-model="phone"
          :class="{ 'is-invalid': errors.phone }"
          autocomplete="off"
        />
        <div class="invalid-feedback">{{ errors.phone }}</div>
      </div>
      <div class="col-md-12 custom_input2">
        <label class="form-label">
          Where would you like to own in Kerala?
        </label>
        <Field
          type="text"
          class="form-control"
          required
          v-model="address"
          name="address"
          :class="{ 'is-invalid': errors.address }"
          autocomplete="off"
        />
        <div class="invalid-feedback">{{ errors.address }}</div>
      </div>
      <div class="col-md-12 custom_submit_button text-center">
        <button type="submit" class="form_submit">SUBMIT</button>
      </div>
    </Form>
  </div>
</template>
