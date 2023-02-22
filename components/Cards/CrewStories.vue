<script setup>
const props = defineProps({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  degination: {
    type: String,
  },
  quote: {
    type: String,
  },
});
</script>

<template>
  <div class="crewstories_box">
    <div class="crewstories_box_quote_image">
      <div class="crewstories_box_image">
        <img :src="image" class="img-fluid" alt="" />
      </div>
    </div>
    <div class="crewstories_box_name">
      <span>{{ name }}</span>
    </div>
    <div class="crewstories_box_degination">
      <span>{{ degination }}</span>
    </div>
    <div class="crewstories_box_content">
      <p>
        {{ quote }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.crewstories_box {
  background: #f0e8d5;
  padding: 25px 25px;
  text-align: center;
  border: 1px solid #523174;
  height: 100%;
}

.crewstories_box_image {
  background: #edf1f3;
  border-radius: 85px;
  box-shadow: 0 0 4px 1px #00000024;
  height: 145px;
  margin: auto;
  overflow: hidden;
  padding-top: 7px;
  width: 145px;
  position: relative;
}

.crewstories_box_quote_image {
  position: relative;
  height: 145px;
  width: 145px;
  margin: auto;
}
.crewstories_box_quote_image:before {
  background: url(/images/quote.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 16px;
  content: "";
  height: 18px;
  right: 9px;
  width: 19px;
  z-index: 9;
  position: absolute;
}
.crewstories_box_quote_image:after {
  content: "";
  position: absolute;
  background: #523174;
  height: 27px;
  width: 27px;
  bottom: 11px;
  right: 6px;
  border-radius: 25px;
}

.crewstories_box_name span {
  display: block;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  line-height: 1;
}

.crewstories_box_name {
  margin: 16px 0 7px;
}

.crewstories_box_degination span {
  font-size: 15px;
  display: block;
  line-height: 1;
}

.crewstories_box_content {
  margin-top: 25px;
}

.crewstories_box_content p {
  font-size: 14px;
  font-family: "Manrope", sans-serif;
}


</style>
