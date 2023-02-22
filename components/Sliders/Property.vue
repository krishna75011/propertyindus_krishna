<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const props = defineProps({
  proDetails: {
    type: Object,
  },
});
</script>

<template>
  <div>
    <vueper-slides
      class="no-shadow fixed-height-custom next-side"
      :visibleSlides="2"
      :gap="2"
      :arrows-outside="true"
      :bullets="true"
      :bulletsOutside="true"
      :fixed-height="true"
      :touchable="false"
      :slide-multiple="true"
      :initSlide="1"
      :alwaysRefreshClones="true"
      :breakpoints="{
        1200: {
          visibleSlides: 2,
        },
        769: {
          visibleSlides: 2,
        },
        426: {
          visibleSlides: 1,
          fade: true,
        },
      }"
    >
      <vueper-slide v-for="(proDetail, index) in proDetails" :key="index">
        <template #content>
          <CardsProperty
            :propertyId="proDetail.id"
            :image="proDetail.image"
            :status="proDetail.status"
            :propertyName="proDetail.propertyName"
            :propertyPrice="proDetail.propertyPrice"
            :propertyShare="proDetail.propertyShare"
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
