<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const props = defineProps({
  imageDetails: {
    type: Object,
  },
});
</script>

<template>
  <div>
    <vueper-slides
      class="no-shadow fixed-height-custom"
      :visibleSlides="1"
      :arrows-outside="false"
      :bullets="false"
      :bulletsOutside="false"
      :fixed-height="true"
      :touchable="false"
      autoplay
      :alwaysRefreshClones="true"
      :fade="true"
    >
      <template #arrow-left>
        <img src="/images/left.png" class="img-fluid small-icon" alt="" />
      </template>

      <template #arrow-right>
        <img src="/images/right.png" class="img-fluid small-icon" alt="" />
      </template>
      <vueper-slide v-for="(image, index) in imageDetails" :key="index">
        <template #content>
          <div class="property_details_image main_image">
            <img :src="image" class="img-fluid" alt="" />
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<style scoped>
.fixed-height-custom {
  height: 400px;
}
.small-icon {
  width: 20px;
}
.property_details_image.main_image {
  width: 100%;
  object-fit: cover;
  height: 400px;
}
.property_details_image.main_image {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 4px 1px #0000000a;
  margin-bottom: 15px;
}
.property_details_image.main_image img {
  width: 100%;
  object-fit: cover;
  height: 400px;
}

@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
  .fixed-height-custom {
    height: 300px;
  }
  .property_details_image.main_image {
    height: 300px;
  }
  .property_details_image.main_image img {
    height: 300px;
  }
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
}
</style>
