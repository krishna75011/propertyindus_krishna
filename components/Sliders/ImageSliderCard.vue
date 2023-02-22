<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const props = defineProps({
  imageDetails: {
    type: Object,
  },
});

const showAppointmentBox = (e) => {
  e.preventDefault();
  console.log("in some action");
};
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
      :infinite="true"
    >
      <template #arrow-left>
        <img
          src="/images/left.png"
          class="img-fluid small-icon"
          alt=""
          @click="showAppointmentBox"
        />
      </template>

      <template #arrow-right>
        <img
          src="/images/right.png"
          class="img-fluid small-icon"
          alt=""
          @click="showAppointmentBox"
        />
      </template>
      <vueper-slide v-for="(image, index) in imageDetails" :key="index">
        <template #content>
          <div class="property_details_image main_image">
            <img :src="image" alt="" />
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<style scoped>
.fixed-height-custom {
  height: 266px;
}

.small-icon {
  width: 20px;
}
.property_details_image.main_image {
  width: 100%;
  object-fit: cover;
  height: 266px;
}

.property_details_image.main_image img {
  width: 100%;
  object-fit: cover;
  height: 266px;
}

@media screen and (max-width: 991.98px) {
  .fixed-height-custom {
    height: 266px;
  }
}
</style>
