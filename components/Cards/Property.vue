<script setup>
const props = defineProps({
  image: {
    type: Object,
  },
  status: {
    type: String,
  },
  propertyName: {
    type: String,
  },
  propertyPrice: {
    type: String,
  },
  propertyShare: {
    type: String,
  },
  propertyLocation: {
    type: String,
  },
  bed: {
    type: Number,
  },
  bath: {
    type: Number,
  },
  propertyId: {
    type: Number,
  },
});
</script>

<template>
  <div class="property_box">
    <NuxtLink :to="`/listings/${propertyId}`" target="_self">
      <div class="property_image">
        <div class="status">
          <div v-if="status == 'published'">AVAILABLE NOW</div>
          <div v-else>SOLD</div>
        </div>
        <SlidersImageSliderCard :imageDetails="image" />
      </div>
      <div class="property_content">
        <div class="property_name">
          <!-- <NuxtLink
          :to="`/listings/${propertyName.replace(/\s+/g, '-').toLowerCase()}`"
          target="_self"
          >{{ propertyName }}</NuxtLink
        > -->
          <p>{{ propertyName }}</p>
          <div class="wishlist">
            <img src="/images/wish.png" alt="" />
          </div>
        </div>
        <div class="property_price">
          <p>${{ propertyPrice }} - 1/{{ propertyShare }} OWNERSHIP</p>
        </div>
        <div class="property_location">
          <p>
            {{ propertyLocation }}<span>{{ bed }} BD, {{ bath }} BA</span>
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.property_box {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3px;
  height: 100%;
}
.property_image {
  position: relative;
}
.property_image .status {
  position: absolute;
  left: 10px;
  bottom: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 15px;
  text-transform: uppercase;
  z-index: 999;
}
.property_image .status:after {
  content: "";
  background: url(/images/ststus_back.png);
  position: absolute;
  width: 106%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  right: -5px;
  top: 0;
  z-index: -9;
  opacity: 0.9;
}
.property_content {
  padding: 20px 12px 10px;
}

.property_name p {
  font-size: 22px;
  display: inline-block;
  line-height: 1;
  color: #000;
  transition: all 0.3s ease-out;
  font-weight: 600;
}
.property_box:hover .property_name p {
  color: #523174;
  transition: all 0.3s ease-out;
}
.property_name {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.property_price p {
  font-size: 19px;
  color: #000;
  line-height: 1;
  display: inline-block;
  font-weight: 600;
}

.property_price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.property_location p {
  color: #000;
  font-weight: 600;
  font-size: 17px;
}

.property_location p span {
  display: inline-block;
  margin-left: 19px;
}

.wishlist {
  cursor: pointer;
}
.wishlist img {
  width: 28px;
}
@media screen and (max-width: 1199.98px) {
  .property_eni span:not(:last-child):before {
    right: -21px;
  }
  .property_image img {
    height: 255px;
  }
  .property_location {
    align-items: flex-start;
  }

  .property_location img {
    margin-top: 1px;
  }
}
@media screen and (max-width: 991.98px) {
  .property_eni span:not(:last-child):before {
    right: -39px;
  }
  .property_image img {
    height: 180px;
  }
  .property_image .status {
    font-size: 12px;
    padding: 4px 9px;
  }
  .property_content {
    padding: 11px 17px;
  }
  .property_name a {
    font-size: 18px;
  }
  .property_name {
    margin-bottom: 8px;
  }
  .property_price p {
    font-size: 26px;
  }
  .property_price p span {
    font-size: 15px;
  }
  .wishlist img {
    width: 23px;
  }
  .property_location img {
    width: 15px;
  }
  .property_location p {
    font-size: 13px;
    margin-left: 5px;
  }
  .property_eni span img {
    margin-right: 5px;
    width: 20px;
  }
  .property_eni span {
    font-size: 12px;
  }
  .property_eni span:not(:last-child):before {
    right: -56px;
  }
}

@media screen and (max-width: 767.98px) {
  .property_content {
    padding: 11px 12px;
  }
  .property_eni span:not(:last-child):before {
    right: -42px;
  }
  .property_image img {
    height: 250px;
  }
  .property_name a {
    font-size: 20px;
  }
  .property_price p {
    font-size: 32px;
  }
  .property_price p span {
    font-size: 19px;
  }
  .wishlist img {
    width: 27px;
  }
  .property_location img {
    width: 16px;
    margin-top: 2px;
  }
  .property_location p {
    font-size: 14px;
  }
  .property_eni span img {
    margin-right: 9px;
    width: 24px;
  }
  .property_eni span {
    font-size: 15px;
  }
}

@media screen and (max-width: 375.98px) {
  .property_eni span:not(:last-child):before {
    right: -22px;
  }
}
</style>
