<script setup>
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

const props = defineProps({
  urlLink: {
    type: String,
  },
});
</script>

<template>
  <div class="video_box">
    <LiteYouTubeEmbed
      :id="urlLink"
      title="Video"
      :cookie="true"
      poster="maxresdefault"
      playerClass="lty-playbtn playerb"
      :adNetwork="false"
      params="rel=0&showinfo=0&controls=0&modestbranding=1"
    />
  </div>
</template>

<style scoped>
.video_box {
  border-radius: 15px;
  box-shadow: 0px 0px 5px 2px #0000001f;
  overflow: hidden;
  width: 50%;
}
</style>
