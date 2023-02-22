<script setup>
import axios from "axios";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const today = new Date();
const now_date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const now_time = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
};

const date = ref(now_date);
const time = ref(now_time);
const appoType = ref("1");
const buttonText = ref("VIRTUAL");

const schemaappo = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  uEmail: Yup.string().required("Email is required").email("Email is invalid"),
  phone: Yup.string()
    .required("Mobile Number is required")
    .matches(/^\d{10}$/, "Mobile Number must be 10 digits"),
});

function onSubmitappo() {
  var hourss = time.value.hours;
  var minutess = time.value.minutes;
  var ampm = hourss >= 12 ? "pm" : "am";
  hourss = hourss % 12;
  hourss = hourss ? hourss : 12; // the hour '0' should be '12'
  minutess = minutess < 10 ? "0" + minutess : minutess;
  var strTime = hourss + ":" + minutess + " " + ampm;

  var event = new Date(date.value);

  let dateconv = JSON.stringify(event);
  dateconv = dateconv.slice(1, 11);

  const router = useRouter();
  localStorage.setItem("date", dateconv);
  localStorage.setItem("time", strTime);
  localStorage.setItem("appoType", appoType.value);
  localStorage.setItem("formName", "appo");
  localStorage.setItem("pageName", "/");
  router.push({ path: "/schedule-tour" });
}
</script>

<template>
  <div>
    <Form @submit="onSubmitappo">
      <div class="appointment_form_box">
        <div class="appointment_form_box_radio">
          <input
            type="radio"
            class="btn-check"
            name="appoType"
            id="virtual"
            autocomplete="off"
            v-model="appoType"
            value="1"
            @click="buttonText = 'VIRTUAL'"
          />
          <label class="btn btn-secondary me-2" for="virtual">VIRTUAL</label>

          <input
            type="radio"
            class="btn-check"
            name="appoType"
            id="inperson"
            autocomplete="off"
            v-model="appoType"
            value="2"
            @click="buttonText = 'IN - PERSON'"
          />
          <label class="btn btn-secondary" for="inperson">IN - PERSON</label>
        </div>
        <div class="input-group custom_calender">
          <small>Select a date:</small>
          <Datepicker
            v-model="date"
            placeholder="Date"
            autoApply
            :enableTimePicker="false"
            format="dd-MM-yyyy"
            :min-date="new Date()"
            :disabledWeekDays="[7, 0]"
            :clearable="false"
            inline
            hide-input-icon
          ></Datepicker>
        </div>
        <small>Select a time GMT+5:30:</small>
        <div class="input-group">
          <Datepicker
            v-model="time"
            placeholder="Time"
            autoApply
            timePicker
            :clearable="false"
            :is24="false"
            hide-input-icon
          ></Datepicker>
        </div>
      </div>
      <div class="appo_submit">
        <button type="submit">SCHEDULE {{ buttonText }} TOUR</button>
      </div>
    </Form>
  </div>
</template>
<style scoped>
.appointment_form_box .form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #000;
  opacity: 1; /* Firefox */
  font-size: 15px;
}

.appointment_form_box .form-control:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #000;
  font-size: 15px;
}

.appointment_form_box .form-control::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #000;
  font-size: 15px;
}
.appointment_form_box_radio {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: auto;
  padding: 3px;
  margin-bottom: 25px;
}
.appointment_form_box small {
  display: block;
  line-height: 1;
  font-size: 15px;
  margin-bottom: 15px;
}
.appointment_form_box_radio .btn-secondary {
  color: #707070;
  background-color: #ffffff;
  border-color: #ffffff;
  font-size: 17px;
}

.appointment_form_box_radio .btn-secondary:focus {
  box-shadow: none !important;
}

.appointment_form_box_radio .btn-check:checked + .btn-secondary,
.btn-secondary:active {
  color: #fff;
  background-color: #523174;
  border-color: #523174;
}

.appointment_form_box_radio :focus-visible {
  outline: none !important;
}
.appointment_form_box_radio .btn-check:focus + .btn-secondary,
.btn-secondary:focus {
  box-shadow: none !important;
}
.custom_calender {
  margin-bottom: 15px !important;
}
.appo_submit button {
  background: #523174;
  color: #fff;
  display: inline-block;
  font-size: 16px;
  padding: 8px 30px;
  border: none;
  border-radius: 5px;
}

.appo_submit {
  text-align: center;
  margin-top: 15px !important;
}

.appointment_form_box .form-control {
  background: #ffffff;
  border-color: #939393;
  font-size: 15px;
  border-radius: 5px !important;
}
.appointment_form_box textarea.form-control {
  background: #ffffff;
  border: 1px solid #939393;
  font-size: 15px;
  border-radius: 5px !important;
}
.appointment_form_box .input-group:not(:last-child) {
  margin-bottom: 15px;
}
.appointment_form_box .input-group .invalid-feedback {
  position: relative;
  bottom: -2px;
}
</style>
