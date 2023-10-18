(function () {

  // burger menu

  document.addEventListener('click', burgerMenu)

  function burgerMenu(event) {
    const burgerIcon = event.target.closest('.burger-icon')
    const burgerLink = event.target.closest('.nav__link')

    if (!burgerIcon && !burgerLink) return

    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }
  }

  // header slider

  new Swiper('.header__bot-swiper', {

    slidesPerView: 1,
    loop: true,
    initialSlide: 2,

    pagination: {
      el: '.header__bot-swiper-pagination',
      type: 'bullets'
    },

    breakpoints: {
      350: {
        slidesPerView: 1.5,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      },
      1440: {
        slidesPerView: 6
      }
    }

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

    slidesPerView: 1,
    loop: true,
    initialSlide: 2,

    pagination: {
      el: '.header__bot-swiper-pagination',
      type: 'bullets'
    },

    breakpoints: {
      350: {
        slidesPerView: 1.5,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      },
      1440: {
        slidesPerView: 6
      }
    },

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