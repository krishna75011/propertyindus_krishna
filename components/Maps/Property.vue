<script setup>
import { GoogleMap, Marker } from "vue3-google-map";

const props = defineProps({
  mapLocation: {
    type: Object,
  },
});
// const center = ref({ lat: 40.689247, lng: -74.044502 });
</script>

<template>
  <div class="map_box">
    <!-- <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.11463065684!2d79.92880612495698!3d13.048043803640542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1654115210908!5m2!1sen!2sin"
      allowfullscreen
      class="map_box_item"
    ></iframe> -->
    <GoogleMap
      api-key="AIzaSyC6OCBlTdphn7Vx1YUk7rQ99a1zuwoI0J8"
      class="map_box_item"
      :center="mapLocation"
      :zoom="15"
    >
      <Marker :options="{ position: mapLocation }" />
    </GoogleMap>
  </div>
</template>

<style scoped>
.map_box {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 0 4px 1px #0000000a;
  overflow: hidden;
}

.map_box .map_box_item {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 767.98px) {
  .map_box {
    height: 242px;
  }
}
</style>
