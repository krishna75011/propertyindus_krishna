<script setup>
const openburg = () => {
  const sidebar = document.querySelector(".sidebar");
  const body = document.querySelector("body");
  sidebar.classList.add("show");
  body.classList.add("sidemenuopen");
};

const closeburg = () => {
  const sidebar = document.querySelector(".sidebar");
  const body = document.querySelector("body");
  sidebar.classList.remove("show");
  body.classList.remove("sidemenuopen");
};
</script>
<template>
  <div>
    <header class="v-navigation">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="menu_area">
              <div class="main_menu">
                <nav class="navbar navbar-expand-lg">
                  <NuxtLink class="navbar-brand" to="/">
                    <img src="/images/logo-white.png" alt="logo" />
                  </NuxtLink>
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <NuxtLink class="nav-link" to="/">
                        BUYERS CO INVEST
                      </NuxtLink>
                    </li>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" to="/sellers">
                        SELLERS INSTANT OFFER
                      </NuxtLink>
                    </li>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" to="/story">
                        OUR STORY
                      </NuxtLink>
                    </li>
                  </ul>
                  <div class="login_button">
                    <NuxtLink class="nav-link" to="/"> LOGIN/SIGN UP </NuxtLink>
                  </div>
                  <span id="open_burg" @click="openburg">
                    <div class="menu-btn__burger"></div>
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="side_menu">
      <nav class="sidebar">
        <div class="top_side_menu">
          <div class="top_side_menu_logo">
            <img src="/images/logo-white.png" alt="logo" />
          </div>
          <div class="top_side_menu_close" @click="closeburg">
            <img src="/images/close.png" alt="close" />
          </div>
        </div>
        <ul>
          <li>
            <NuxtLink to="/learn">LEARN</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">BUYERS CO INVEST</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/sellers">SELLERS INSTANT OFFER</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/story">OUR STORY</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#!">FAQs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/careers">Careers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact Us</NuxtLink>
          </li>
        </ul>
        <div class="side_social">
          <NuxtLink href="#!" target="_blank">
            <span>
              <img src="/images/twitter.png" alt="twitter" />
            </span>
          </NuxtLink>
          <NuxtLink href="#!" target="_blank">
            <span>
              <img src="/images/facebook.png" alt="facebook" />
            </span>
          </NuxtLink>
          <NuxtLink href="#!" target="_blank">
            <span>
              <img src="/images/insta.png" alt="instagram" />
            </span>
          </NuxtLink>
          <NuxtLink href="#!" target="_blank">
            <span>
              <img src="/images/linkedin.png" alt="linkedin" />
            </span>
          </NuxtLink>
        </div>
        <div class="side_button">
          <NuxtLink to="#!">Login / Sign Up</NuxtLink>
        </div>
      </nav>
    </div>
    <slot />
  </div>
</template>
<style scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 9999;
  transition: all 0.3s ease-out;
  background: #523174;
  box-shadow: 0 0 8px 3px #00000026;
}

.main_menu {
  padding: 25px 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.navbar {
  padding: 0;
}
.main_menu a.navbar-brand img {
  width: 250px;
}

.main_menu ul.navbar-nav li a {
  padding: 0 !important;
  line-height: 1;
  color: #fff;
  font-size: 17px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  font-weight: 500;
}

.main_menu ul.navbar-nav li:not(:last-child) {
  margin-right: 45px;
}

.main_menu a.navbar-brand {
  padding: 0;
  margin: 0;
}

.login_button a {
  padding: 8px !important;
  line-height: 1;
  color: #000;
  font-size: 17px;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  font-weight: 500;
  border: 1px solid #fff;
  background: #fff;
}

.login_button {
  margin-left: 30px;
}

@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
  .login_button {
    margin-left: 25px;
  }
  .login_button a {
    padding: 6px !important;
    font-size: 15px;
  }
  .main_menu ul.navbar-nav li a {
    font-size: 15px;
  }
  .main_menu ul.navbar-nav li:not(:last-child) {
    margin-right: 20px;
  }
}
@media (max-width: 991.98px) {
  .navbar-nav {
    display: none;
  }
  .login_button {
    margin-left: 250px;
  }
}
@media (max-width: 767.98px) {
  .login_button {
    display: none;
  }
}
@media (max-width: 575.98px) {
  .main_menu a.navbar-brand img {
    width: 200px;
  }
}
</style>
