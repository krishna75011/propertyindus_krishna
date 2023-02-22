<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  cityid: {
    type: String,
  },
  bottonsStatus: {
    type: Boolean,
  },
});
const emit = defineEmits(["clearButton"]);

var selected = ref(false);
var showClose = ref(false);

const toggleItem = (item) => {
  selected.value = !selected.value;
  showClose.value = !showClose.value;
  emit("clearButton", item);
};
watchEffect(() => {
  if (props.bottonsStatus === false) {
    selected.value = false;
    showClose.value = false;
  }
});
</script>
<template>
  <div>
    <button
      type="button"
      class="city_button"
      @click="toggleItem(cityid)"
      :class="{ selected: selected }"
    >
      {{ name }}
      <span v-if="showClose"><img src="/images/close.png" alt="" /></span>
    </button>
  </div>
</template>
<style scoped>
.city_button.selected {
  background: #bc986b;
  color: #fff;
}
.city_button {
  background: #f0e8d5;
  border: 1px solid #bc986b;
  color: #bc986b;
  font-family: "Manrope", sans-serif;
  font-size: 15px;
  border-radius: 26px;
  padding: 6px 24px;
  line-height: 1;
  position: relative;
}
.city_button span {
  display: inline-block;
  width: 10px;
  position: absolute;
  right: 8px;
  top: 5px;
}

.city_button span img {
  width: 100%;
}

@media screen and (max-width: 767.98px) {
  .city_button {
    font-size: 13px;
    padding: 6px 18px;
  }
  .city_button span {
    right: 6px;
    top: 6px;
    width: 8px;
  }
}
</style>
