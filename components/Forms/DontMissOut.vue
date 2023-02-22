<script setup>
import axios from "axios";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const uEmail = ref("");
const agent = ref("0");

const schema = Yup.object().shape({
  uEmail: Yup.string().required("Email is required").email("Email is invalid"),
});

function onSubmit() {
  const router = useRouter();
  localStorage.setItem("email", uEmail.value);
  localStorage.setItem("agent", agent.value);
  localStorage.setItem("user", "1");
  localStorage.setItem("formName", "dontmiss");
  localStorage.setItem("pageName", "/");
  router.push({ path: "/leads" });
}
</script>
<template>
  <div class="dont_miss_out_box">
    <div class="dont_miss_out_box_content">
      <span>Don’t miss out</span>
      <p>Our best homes sell fast, get personalized content first.</p>
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
        <div class="button_box">
          <button type="submit" class="form_submit">JOIN OR SIGN IN</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped>
.dont_miss_out_box {
  background: #fff;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  height: 86%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
.dont_miss_out_box_content span {
  font-size: 33px;
  line-height: 1;
  margin-bottom: 20px;
  font-weight: 700;
  color: #000;
  display: block;
  text-align: center;
}

.dont_miss_out_box_content p {
  text-align: center;
  font-size: 17px;
  display: block;
  line-height: 1.4;
  color: #000;
  margin-bottom: 25px;
}
.input_field input.form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #000;
  opacity: 1; /* Firefox */
  font-size: 15px;
}

.input_field input.form-control:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #000;
  font-size: 15px;
}

.input_field input.form-control::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #000;
  font-size: 15px;
}
.input_field input.form-control {
  background: white;
  border-radius: 5px !important;
  border-bottom: none;
  padding: 6px 10px;
  color: #000;
  border: 1px solid rgba(40, 50, 64, 0.5);
}

.check_box {
  margin-top: 25px;
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
.form_submit {
  background: #523174;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  padding: 7px 53px;
  border: none;
  transition: all 0.3s ease-out;
  font-size: 17px;
  letter-spacing: 1px;
  width: 100%;
}
.form_submit:hover {
  background: #000;
  color: #fff;
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
