<script setup>
// onMounted(() => {
//   const thankyou = ref(false);
//   if (localStorage.getItem("thankyou") == "") {
//     localStorage.setItem("thankyou", false);
//   }
//   thankyou.value = localStorage.getItem("thankyou");
//   if (thankyou.value == false) {
//     const router = useRouter();
//     router.push({ path: "/" });
//   }
// });
// const page = ref("");

// page.value = localStorage.getItem("formName");
// localStorage.removeItem("formName");
// localStorage.removeItem("email");
// localStorage.removeItem("agent");
</script>

<template>
  <div class="thankyou_box">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="thankyou_box_image">
            <img src="/images/thankyou_side.png" class="img-fluid" alt="" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="thankyou_box_content_box">
            <div class="thankyou_box_content">
              <p>
                Thank you for contacting us. You have successfully registered
                yourself on our wait list.
              </p>
              <p>We ’ll be in touch soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thankyou_box {
  position: relative;
  display: flex;
  height: 86vh;
  justify-content: center;
  align-items: center;
  z-index: 9;
}
.thankyou_box_content_box:before {
  position: absolute;
  content: "";
  background: url(/images/like.png);
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: 100% 100%;
  height: 140px;
  width: 140px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.thankyou_box_content_box:after {
  position: absolute;
  content: "";
  background: #bea0f08c;
  height: 80%;
  width: 80%;
  z-index: -9;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.thankyou_box_content_box {
  text-align: center;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.thankyou_box_content {
  z-index: 9;
}
.thankyou_box_content p {
  font-size: 18px;
  line-height: 1;
  font-style: italic;
}

.thankyou_box_content p:not(:last-child) {
  margin-bottom: 40px;
}

@media screen and (max-width: 2560px) {
}
@media screen and (max-width: 1199.98px) {
}

@media screen and (max-width: 991.98px) {
  .thankyou_box_content h1 {
    font-size: 59px;
    margin-bottom: 16px;
  }
  .thankyou_box_content img.img-fluid {
    width: 296px;
    margin-bottom: 15px;
  }
  .thankyou_box_content p {
    font-size: 16px;
    width: 80%;
    margin: auto;
  }
  .thankyou_box_content p:not(:last-child) {
    margin-bottom: 14px;
  }
  .back_home a {
    padding: 10px 15px;
    margin-top: 28px;
    font-size: 15px;
  }
}

@media screen and (max-width: 767.98px) {
  .thankyou_box_content p {
    line-height: 1.3;
  }
  .thankyou_box_content img.img-fluid {
    width: 231px;
    margin-bottom: 12px;
  }
  .thankyou_box_content h1 {
    font-size: 45px;
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 376.98px) {
}

@media screen and (max-width: 321.98px) {
  .thankyou_box_content h1 {
    font-size: 39px;
    margin-bottom: 11px;
  }
}
</style>
