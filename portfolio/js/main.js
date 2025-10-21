new WOW().init();
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.projects-pagination',
    bulletClass:'projects-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true
  },
});