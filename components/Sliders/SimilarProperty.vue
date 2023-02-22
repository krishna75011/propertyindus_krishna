<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const props = defineProps({
  similarProDetails: {
    type: Object,
  },
});
</script>

<template>
  <div>
    <vueper-slides
      class="no-shadow fixed-height-custom"
      :visibleSlides="3"
      :gap="2"
      :arrows-outside="false"
      :arrows="false"
      :bullets="true"
      :bulletsOutside="true"
      :fixed-height="true"
      :touchable="false"
      :initSlide="2"
      autoplay
      :breakpoints="{
        1200: {
          visibleSlides: 3,
        },
        769: {
          visibleSlides: 2,
        },
        426: {
          visibleSlides: 1,
        },
      }"
    >
      <vueper-slide
        v-for="(proDetail, index) in similarProDetails"
        :key="index"
      >
        <template #content>
          <CardsProperty
            :propertyId="proDetail.id"
            :image="proDetail.image"
            :status="proDetail.status"
            :propertyName="proDetail.propertyName"
            :propertyPrice="proDetail.propertyPrice"
            :propertyLocation="proDetail.propertyLocation"
            :bed="proDetail.bed"
            :bath="proDetail.bath"
          />
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>
<style scoped>
.fixed-height-custom {
  height: 435px;
}
@media screen and (max-width: 1199.98px) {
  .fixed-height-custom {
    height: 435px;
  }
}
@media screen and (max-width: 991.98px) {
  .fixed-height-custom {
    height: 435px;
  }
}
@media screen and (max-width: 767.98px) {
  .fixed-height-custom {
    padding: 0 25px;
    height: 435px;
  }
}
</style>
