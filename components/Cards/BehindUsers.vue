<script setup>
const props = defineProps({
  idn: {
    type: String,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  degination: {
    type: String,
  },
  bio: {
    type: String,
  },
});
</script>

<template>
  <div class="col-lg-4 col-md-6">
    <div class="behind_user_card">
      <div class="behind_user_card_image">
        <img :src="image" class="img-fluid" alt="" />
      </div>
      <div class="behind_user_card_content_box">
        <div class="behind_user_card_content">
          <span>{{ name }}</span>
          <p>{{ degination }}</p>
        </div>
        <div class="behind_user_card_button">
          <button
            type="button"
            class="button_one"
            data-bs-toggle="modal"
            :data-bs-target="`#${idn}`"
          >
            <img src="/images/open_modal.png" class="img-fluid" alt="" />
          </button>
        </div>
      </div>
    </div>
    <ModalsBehindScenesUser
      :idn="idn"
      :image="image"
      :name="name"
      :degination="degination"
      :bio="bio"
    />
  </div>
</template>

<style scoped>
.behind_user_card {
  padding: 0 15px 40px;
}

.behind_user_card_image {
  overflow: hidden;
  border-radius: 16px;
}
.behind_user_card_content_box {
  display: flex;
  align-items: center;
  margin: 0 14px 0;
  background: #fff;
  position: relative;
  top: -40px;
  padding: 30px 13px;
  border-radius: 15px;
  justify-content: space-between;
  box-shadow: 0px 56px 80px -32px rgb(57 59 106 / 17%);
}
.behind_user_card_content span {
  font-size: 18px;
  display: block;
  line-height: 1;
  margin-bottom: 10px;
  font-weight: 500;
  color: #160042;
}

.behind_user_card_content p {
  font-size: 14px;
}
.button_one {
  background: #f7f9fd;
  border-radius: 41px;
  color: #fff;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  padding: 12px 14px;
  transition: all 0.3s ease-out;
  border: none;
}
.button_one:hover {
  background: #523174;
  transition: all 0.3s ease-out;
}
@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
}
</style>
