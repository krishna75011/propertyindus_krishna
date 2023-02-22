<script setup>
const items = ref([
  {
    title: "First Floor",
    bed: 2,
    bath: 3,
    sqft: 200,
    image: "/images/floor_plan.png",
  },
  {
    title: "Second Floor",
    bed: 2,
    bath: 3,
    sqft: 200,
    image: "/images/floor_plan.png",
  },
  {
    title: "Third Floor",
    bed: 2,
    bath: 3,
    sqft: 200,
    image: "/images/floor_plan.png",
  },
]);
</script>
<template>
  <div class="accordion" id="accordionFloorplan">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <h2 class="accordion-header" :id="'heading' + index">
        <button
          class="accordion-button"
          :class="{ collapsed: index !== 0 }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + index"
          aria-expanded="true"
          :aria-controls="'collapse' + index"
        >
          {{ item.title }}
          <p>
            <span>
              Beds :<em>{{ item.bed }}</em>
            </span>
            <span>
              Bath :<em>{{ item.bath }}</em>
            </span>
            <span
              >Sqft :<em>{{ item.sqft }}</em>
            </span>
          </p>
        </button>
      </h2>
      <div
        :id="'collapse' + index"
        class="accordion-collapse collapse"
        :class="{ show: index === 0 }"
        :aria-labelledby="'heading' + index"
        data-bs-parent="#accordionFloorplan"
      >
        <div class="accordion-body">
          <div class="floor_plan_image">
            <img :src="item.image" alt="floor plan" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*faq-item*/
.accordion-button {
  border: none !important;
  box-shadow: none !important;
  color: #26282b !important;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 500;
  background: transparent;
  position: relative;
}
.accordion-button.collapsed[data-v-62d1c91d] {
  background: #f0e8d5 !important;
  border-radius: 4px;
}

.accordion-item {
  border-radius: 4px;
  background: #fff;
  border: none;
}

.accordion-body {
  text-align: center;
}

.accordion-item:not(:last-child) {
  margin-bottom: 20px;
}

.accordion-button:not(.collapsed):after {
  background-image: url(/images/up.svg);
}
.accordion-button p {
  position: absolute;
  right: 50px;
  font-size: 15px;
}

.accordion-button p span {
  color: #ababab;
}

.accordion-button p span em {
  font-style: normal;
  margin-left: 4px;
  color: #000;
}

.accordion-button p span:not(:last-child) {
  margin-right: 12px;
}
</style>
