<script setup>
import { usePlacesAutocomplete } from "v-use-places-autocomplete";

import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const query = ref("");
const streetNo = ref("");
const street = ref("");
const city = ref("");
const district = ref("");
const state = ref("");
const pin = ref("");
const setValue = ref(false);
const buttonDisable = ref(true);
const showcantfind = ref(false);

const { suggestions } = usePlacesAutocomplete(query, {
  apiKey: "AIzaSyC6OCBlTdphn7Vx1YUk7rQ99a1zuwoI0J8",
  autocompletionRequest: {
    componentRestrictions: { country: "in" },
  },
  debounce: 0,
  minLengthAutocomplete: 1,
});

function showaddrslist() {
  setValue.value = false;
  buttonDisable.value = true;
  var autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete")
  );
  autocomplete.setComponentRestrictions({
    // restrict the country
    country: ["in"],
  });
  autocomplete.addListener("place_changed", () => {
    buttonDisable.value = false;
    let place = autocomplete.getPlace();
    for (var i = 0; i < place.address_components.length; i++) {
      for (var j = 0; j < place.address_components[i].types.length; j++) {
        if (place.address_components[i].types[j] == "postal_code") {
          //console.log(place.address_components[i].long_name);
          pin.value = place.address_components[i].long_name;
        }
        if (place.address_components[i].types[j] == "street_number") {
          // console.log(place.address_components[i].long_name);
          streetNo.value = place.address_components[i].long_name + ",";
        }
        if (place.address_components[i].types[j] == "route") {
          //console.log(place.address_components[i].long_name);
          street.value = streetNo.value + place.address_components[i].long_name;
        }
        if (place.address_components[i].types[j] == "locality") {
          //console.log(place.address_components[i].long_name);
          city.value = place.address_components[i].long_name;
        }
        if (
          place.address_components[i].types[j] == "administrative_area_level_2"
        ) {
          // console.log(place.address_components[i].long_name);
          //  pin.value = place.address_components[i].long_name;
        }
        if (
          place.address_components[i].types[j] == "administrative_area_level_1"
        ) {
          //console.log(place.address_components[i].long_name);
          state.value = place.address_components[i].long_name;
        }
        if (place.address_components[i].types[j] == "country") {
          // console.log(place.address_components[i].long_name);
          //  pin.value = place.address_components[i].long_name;
        }
      }
    }
  });
}

// function setInputvalue(str) {
//   query.value = str.full;
//   setValue.value = false;
// }

const fromData = {
  street: street,
  city: city,
  district: district,
  state: state,
  pin: pin,
  showPersonal: true,
  showMain: false,
};

const schema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
});

const showAddaddress = {
  showManualaddress: true,
  showMain: false,
};

const emit = defineEmits(["chnageSubstatusbanner", "addAddresslist"]);

function onSubmit() {
  emit("chnageSubstatusbanner", fromData);
}

function addAddressl() {
  emit("addAddresslist", showAddaddress);
}
</script>

<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
      <div class="form_box">
        <div class="input_field">
          <Field
            type="text"
            name="address"
            class="form-control"
            placeholder="Enter your home address*"
            v-model="query"
            @keyup="showaddrslist"
            id="autocomplete"
            :class="{ 'is-invalid': errors.address }"
            autocomplete="off"
          />
          <div class="invalid-feedback">{{ errors.address }}</div>
        </div>
        <div class="button_box">
          <button type="submit" class="form_submit" :disabled="buttonDisable">
            START
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>

<style scoped>
.form_box .input_field input.form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #989898;
  opacity: 1; /* Firefox */
  font-size: 15px;
}

.form_box .input_field input.form-control:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #989898;
  font-size: 15px;
}

.form_box .input_field input.form-control::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #989898;
  font-size: 15px;
}

.form_box {
  display: flex;
  align-items: center;
}

.form_box .input_field input.form-control {
  width: 360px;
  border-radius: 0;
  padding: 12px 0px 12px 31px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: none;
  font-size: 15px;
}
.form_box .input_field {
  position: relative;
}

.form_box .input_field:before {
  background: url(/images/location.png);
  content: "";
  position: absolute;
  height: 18px;
  width: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  left: 9px;
  top: 0;
  bottom: 0;
  margin: auto;
}
.button_box {
  background: #fff;
  height: 100%;
  padding: 2px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.button_box button.form_submit {
  border: none;
  background: #523174;
  color: #fff;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 20px;
}
ul.address_list {
  position: absolute;
  background: #fff;
  top: 48px;
  left: 0;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  text-align: center;
  border: 1px solid #e7e7e7;
}

ul.address_list li {
  padding: 4px 12px;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

ul.address_list li:not(:last-child) {
  border-bottom: 1px solid #e7e7e7;
}

ul.address_list li:hover {
  background: #523174;
  color: #fff;
}

ul.address_list li img {
  width: 20px;
  margin-right: 5px;
  padding: 2px;
}

ul.address_list li:hover img {
  background: #fff;
  border-radius: 25px;
}
.powered_google img {
  width: 144px;
  padding: 3px;
}
ul.address_list p {
  font-size: 15px;
  padding: 5px;
}

ul.address_list p span {
  cursor: pointer;
  font-weight: 500;
}
@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
  .form_box .input_field input.form-control {
    width: 286px;
  }
}
@media (max-width: 991.98px) {
  .form_box .input_field input.form-control {
    width: 334px;
  }
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  .form_box .input_field input.form-control {
    width: 220px;
    padding: 10px 0px 10px 31px;
  }
  .button_box button.form_submit {
    border: none;
    font-size: 15px;
    padding: 14px 20px;
    line-height: 14px;
    border-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .button_box {
    padding: 0;
  }
}
@media (max-width: 375.98px) {
}

@media (max-width: 321.98px) {
  .form_box .input_field input.form-control {
    width: 184px;
  }
  .form_box .input_field input.form-control::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-size: 13px;
  }

  .form_box .input_field input.form-control:-ms-input-placeholder {
    font-size: 13px;
  }

  .form_box .input_field input.form-control::-ms-input-placeholder {
    font-size: 13px;
  }
}
</style>
