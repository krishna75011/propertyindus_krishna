<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const props = defineProps({
  crewstoriesItems: {
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
      :arrows="false"
      :arrows-outside="false"
      :bulletsOutside="true"
      :touchable="false"
      :initSlide="1"
      :fixed-height="true"
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
        v-for="(crewstoriesItem, index) in crewstoriesItems"
        :key="index"
      >
        <template #content>
          <CardsCrewStories
            :image="crewstoriesItem.image"
            :name="crewstoriesItem.name"
            :degination="crewstoriesItem.degination"
            :quote="crewstoriesItem.quote"
          />
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<style scoped>
.fixed-height-custom {
  height: 407px;
}

@media screen and (max-width: 1199.98px) {
  .fixed-height-custom {
    height: 408px;
  }
}
@media screen and (max-width: 991.98px) {
  .fixed-height-custom {
    height: 387px;
  }
}

@media screen and (max-width: 767.98px) {
  .fixed-height-custom {
    height: 354px;
    padding: 0 15px;
  }
  .crewstories_box_content {
    margin-top: 14px;
  }
}
</style>
