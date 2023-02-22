export default defineNuxtRouteMiddleware((to, from) => {
  if (from.name !== "thankyou") {
    if (to.path !== from.path && process.client) {
      window.scrollTo(0, 0);
      const sidebar = document.querySelector(".sidebar");
      const body = document.querySelector("body");
      sidebar.classList.remove("show");
      body.classList.remove("sidemenuopen");
    }
  }
});
