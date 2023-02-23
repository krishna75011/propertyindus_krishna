<script setup>
const configs = useRuntimeConfig();
</script>
<template>
  <div>
    <slot />
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-3 mb-mb-4 mb-lg-0 mb-3 custom_center">
            <div class="footer_title">
              <span>Contact Us</span>
            </div>
            <div class="footer_contact">
              <ul>
                <li>
                  <img src="/images/call.png" alt="" />
                  <NuxtLink :to="`tel:${configs.PHONE}`">{{
                    configs.PHONE
                  }}</NuxtLink>
                </li>
                <li>
                  <img src="/images/mail.png" alt="" />
                  <NuxtLink :to="`mailto:${configs.EMAIL}`">{{
                    configs.EMAIL
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
            <div class="footer_social">
              <ul>
                <li>
                  <NuxtLink href="/"
                    ><img src="/images/twitter.png" alt="twitter"
                  /></NuxtLink>
                </li>
                <li>
                  <NuxtLink href="/"
                    ><img src="/images/facebook.png" alt="facebook"
                  /></NuxtLink>
                </li>
                <li>
                  <NuxtLink href="/"
                    ><img src="/images/insta.png" alt="instagram"
                  /></NuxtLink>
                </li>
                <li>
                  <NuxtLink href="/"
                    ><img src="/images/linkedin.png" alt="linkedin"
                  /></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-lg-3 mb-mb-0 mb-lg-0 mb-3">
            <div class="footer_title">
              <span>Offerings</span>
            </div>
            <div class="footer_contact">
              <ul>
                <li>
                  <NuxtLink to="/learn">Learn</NuxtLink>
                </li>
                <li><NuxtLink to="/listings">Listings</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-lg-3 mb-mb-0 mb-lg-0 mb-3">
            <div class="footer_title">
              <span>About</span>
            </div>
            <div class="footer_contact">
              <ul>
                <li>
                  <NuxtLink to="/story">Our story</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/careers">Careers</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-5 col-lg-3">
            <div class="footer_title">
              <span>Support</span>
            </div>
            <div class="footer_contact">
              <ul>
                <li>
                  <NuxtLink to="/">FAQs</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">Terms & Conditions</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">Privacy Policy</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact">Contact Us</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-12">
            <div class="footr_copyright">
              <p>
                Copyright © {{ new Date().getFullYear() }}. All Rights Reserved
                Property Indus
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
footer {
  background: #283240;
  color: #fff;
  padding: 60px 0 30px;
}
.footer_title span {
  font-size: 22px;
  font-weight: 500;
}

.footer_title {
  border-bottom: 1px solid #ffffffb5;
  padding-bottom: 8px;
  margin-bottom: 16px;
}
.footer_contact a {
  font-size: 16px;
  color: #fff;
  display: inline-block;
  line-height: 1;
  margin-left: 11px;
  transition: all 0.3s ease-out;
}

.footer_contact ul li:not(:last-child) {
  margin-bottom: 18px;
}

.footer_contact ul li {
  display: flex;
  align-items: center;
}
.footer_social ul {
  display: flex;
  align-items: center;
}

.footer_social ul li a {
  background: #fff;
  width: 32px;
  border-radius: 5px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;
}

.footer_social ul li:not(:last-child) {
  margin-right: 14px;
}

.footer_social {
  margin-top: 25px;
}

.footer_social ul li a:hover {
  background: #523174;
  transition: all 0.3s ease-out;
}
.footer_contact a:hover {
  color: #523174;
  transition: all 0.3s ease-out;
}
.footr_copyright {
  text-align: center;
  border-top: 1px solid #ffffffb5;
  margin-top: 40px;
  padding-top: 25px;
}

.footr_copyright p {
  font-size: 16px;
}

@media (max-width: 1399.98px) {
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
  .custom_center {
    text-align: center;
  }

  .footer_title {
    border: none;
    padding-bottom: 0;
    margin-bottom: 10px;
  }

  .custom_center .footer_contact ul li {
    justify-content: center;
  }
  .footer_social ul {
    justify-content: center;
  }
  .footer_title span {
    font-size: 20px;
  }
  .footer_contact ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .footer_contact ul li a {
    margin: 0 !important;
  }
  .footer_contact ul li:not(:last-child) {
    margin-bottom: 0;
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid #fff;
  }
  .custom_center .footer_contact ul {
    flex-direction: column;
  }
  .custom_center .footer_contact ul li:not(:last-child) {
    margin-bottom: 15px;
    margin-right: 0;
    padding-right: 0;
    border-right: none;
  }
  .custom_center .footer_contact ul li a {
    margin-left: 10px !important;
  }
  .footer_contact ul li {
    margin-bottom: 15px !important;
  }
  .footr_copyright {
    margin-top: 14px;
  }
}
@media (max-width: 767.98px) {
  .footr_copyright p {
    font-size: 15px;
  }
}
@media (max-width: 575.98px) {
}
</style>
