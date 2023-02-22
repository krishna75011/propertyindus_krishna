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
  <div
    class="modal fade"
    :id="idn"
    tabindex="-1"
    :aria-labelledby="idn"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered behind_user_modal">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-5">
                <div class="behind_user_image">
                  <img :src="image" class="img-fluid" alt="" />
                </div>
              </div>
              <div class="col-md-7">
                <div class="behind_user_content">
                  <span>{{ name }} </span>
                  <small>{{ degination }}</small>
                  <p>{{ bio }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.behind_user_content {
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 56px 80px -32px rgb(57 59 106 / 15%);
  border-radius: 12px;
  padding: 20px;
}

.behind_user_content span {
  display: block;
  font-weight: 500;
  font-size: 22px;
  line-height: 1;
  margin-bottom: 9px;
}

.behind_user_modal .modal-body {
  padding: 2rem;
}

.behind_user_modal .modal-content {
  border-radius: 15px;
}

.behind_user_image {
  overflow: hidden;
  border-radius: 16px;
}

.behind_user_modal button.btn-close {
  position: absolute;
  right: 15px;
  top: 15px;
}

.behind_user_content small {
  display: block;
  line-height: 1;
  margin-bottom: 10px;
  font-size: 15px;
}

.behind_user_content p {
  font-size: 16px;
}
@media screen and (max-width: 991.98px) {
}
</style>
