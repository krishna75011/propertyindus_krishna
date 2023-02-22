<script setup>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const selected = ref(["Featured"]);

const options = ref(["Featured", "Low to high", "High to low"]);

const disable = ref(false);
</script>

<template>
  <div class="sort_drop">
    <v-select
      class="style-chooser"
      v-model="selected"
      :options="options"
      :clearable="disable"
      :clearSearchOnSelect="disable"
      :filterable="disable"
      :searchable="disable"
    ></v-select>
    <!-- <select class="form-select">
      <option value="Featured" selected>Featured</option>
      <option value="Low to high">Price: Low to high</option>
      <option value="High to low">Price: High to low</option>
    </select> -->
  </div>
</template>

<style scoped>
/* .sort_drop .form-select {
  border-radius: 0;
  border: none;
}

.sort_drop .form-select:focus {
  box-shadow: none;
}

select.form-select option {
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
}

select.form-select option:hover {
  background: rgba(0, 0, 0, 0.3) !important;
} */
</style>
