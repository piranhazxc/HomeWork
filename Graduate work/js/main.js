(function () {

  // header slider

  new Swiper('.header__bot-swiper', {

    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 5,
    initialSlide: 1,

    pagination: {
      el: '.header__bot-swiper-pagination',
      type: 'bullets'
    },

  });

  // testimonials slider

  new Swiper('.testimonials__swiper', {
    slidesPerView: 1,

    navigation: {
      nextEl: '.testimonials__button-next',
      prevEl: '.testimonials__button-prev',
    },

  });

  // // award slider

  new Swiper('.award__swiper', {

    slidesPerView: 5,
    // loop: true,
    spaceBetween: 30,
    initialSlide: 1,

    pagination: {
      el: '.award__swiper-pagination',
      type: 'bullets'
    },

  });


})()

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(element => {
  element.addEventListener('click', (e) => {

    const accordionControl = e.target.closest('.accordion-list__controls');
    if (!accordionControl) return

    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    accordionItem.classList.toggle('active');

    if (accordionItem.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = null;
    }
  })
});