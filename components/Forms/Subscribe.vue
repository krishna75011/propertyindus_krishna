<script setup>
import axios from "axios";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const uEmail = ref("");
const user = ref("1");

const schema = Yup.object().shape({
  uEmail: Yup.string().required("Email is required").email("Email is invalid"),
  user: Yup.string().required("Who you are?"),
});
function onSubmit() {
  const router = useRouter();
  localStorage.setItem("email", uEmail.value);
  localStorage.setItem("agent", "0");
  localStorage.setItem("user", user.value);
  localStorage.setItem("formName", "subscribe");
  localStorage.setItem("pageName", "/");
  router.push({ path: "/leads" });
}
</script>
<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
      <div class="input_field">
        <div class="input-group">
          <Field
            type="email"
            name="uEmail"
            class="form-control"
            placeholder="Email*"
            v-model="uEmail"
            :class="{ 'is-invalid': errors.uEmail }"
            autocomplete="off"
          />
          <div class="invalid-feedback">{{ errors.uEmail }}</div>
        </div>
      </div>
      <div class="radio_box">
        <span>Select one of the following</span>
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
            I am a buyer</label
          >
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
            I am a seller</label
          >
        </div>
        <div class="invalid-feedback">{{ errors.user }}</div>
      </div>
      <div class="button_box">
        <button type="submit" class="form_submit">SUBSCRIBE</button>
      </div>
    </Form>
  </div>
</template>

<style scoped>
.input_field input.form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #283240;
  opacity: 1; /* Firefox */
  font-size: 15px;
}

.input_field input.form-control:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #283240;
  font-size: 15px;
}

.input_field input.form-control::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #283240;
  font-size: 15px;
}
.input_field input.form-control {
  background: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #283240;
  padding: 6px 0;
  color: #283240;
}

.radio_box span {
  display: block;
  color: #000;
  font-size: 16px;
  margin-bottom: 35px;
}

.radio_box {
  margin-top: 28px;
  text-align: center;
  color: #000;
}
.form_submit {
  background: #523174;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  padding: 7px 37px;
  border: none;
  transition: all 0.3s ease-out;
  font-size: 17px;
  letter-spacing: 1px;
}
.form_submit:hover {
  background: #000;
  transition: all 0.3s ease-out;
}
.button_box {
  margin-top: 35px;
  text-align: center;
}

@media screen and (max-width: 991.98px) {
  .form_submit {
    margin-top: 16px;
    padding: 9px 16px;
    font-size: 14px;
  }
  .button_box {
    margin-top: 8px;
  }
  .radio_box span {
    font-size: 14px;
    margin-bottom: 8px;
  }
  .radio_box {
    margin-top: 13px;
  }
  .radio_box label {
    font-size: 15px;
  }
}
</style>
