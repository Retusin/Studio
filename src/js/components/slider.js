import Swiper, { Pagination } from "swiper";

Swiper.use([Pagination]);
const swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
