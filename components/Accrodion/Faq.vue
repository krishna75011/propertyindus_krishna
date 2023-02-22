<script setup>
const props = defineProps({
  faqItems: {
    type: Object,
  },
});
</script>
<template>
  <div class="accordion" id="accordionSellerfaq">
    <div class="accordion-item" v-for="(item, index) in faqItems" :key="index">
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
        </button>
      </h2>
      <div
        :id="'collapse' + index"
        class="accordion-collapse collapse"
        :class="{ show: index === 0 }"
        :aria-labelledby="'heading' + index"
        data-bs-parent="#accordionSellerfaq"
      >
        <div class="accordion-body">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*faq-item*/
.accordion-button {
  background: transparent;
  color: #000000;
  padding: 14px 0 14px 80px;
  font-weight: 600;
  box-shadow: none;
  border: none;
  border-radius: 0;
  font-size: 18px;
}

.accordion-item {
  border-radius: 0;
  background: transparent;
  border: none;
}

.accordion-body {
  padding: 0.5rem 30px 1rem 80px;
}

.accordion-body p {
  font-size: 16px;
}

.accordion-item {
  border-bottom: 1px solid #00000038;
}
.accordion-button:not(.collapsed):after {
  background-image: url(/images/minus.png);
  top: 22px;
  transform: none;
}
.accordion-button::after {
  width: 1.1rem;
  height: 1.1rem;
  background-image: url(/images/plus.png);
  position: absolute;
  left: 53px;
  top: 15px;
  background-size: 1.1rem;
}

@media screen and (max-width: 991.98px) {
  .accordion-button {
    font-size: 16px;
    padding: 11px 0;
  }
  .accordion-body p {
    font-size: 14px;
  }
  .accordion-button::after {
    width: 1rem;
    height: 1rem;
    background-size: 1rem;
  }
}
</style>
