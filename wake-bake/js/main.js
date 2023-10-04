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

  // modal window

  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelector('.about__img-button')

  modalBtn.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()

    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__close') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal')
    }
  }

  // tabs toogle

  const tabControls = document.querySelector('.tab-controls')

  tabControls.addEventListener('click', switchTab)

  function switchTab(e) {
    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabId = tabControl.getAttribute(('href'))

    document.querySelector('.tab-content--show').classList.remove('tab-content--show')
    document.querySelector(tabId).classList.add('tab-content--show')

    document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
    tabControl.classList.add('tab-controls__link--active')

  }

  // accordion

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return
      e.preventDefault()
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }
      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }

    });

  });

  // gallery slider

  new Swiper('.gallery__slider', {

    spaceBetween: 15,
    slidesPerView: 2,

    pagination: {
      el: '.gallery__pagination',
      type: 'fraction'
    },

    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
    },

    breakpoints: {
      451: {
        slidesPerView: 2
      },
      601: {
        slidesPerView: 3
      },
      801: {
        spaceBetween: 32
      },
      1101: {
        slidesPerView: 4
      }
    }

  });

  // testimonials slider 

  new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    pagination: {
      el: '.gallery__pagination',
      type: 'fraction'
    },

    navigation: {
      nextEl: '.testimonials__button-next',
      prevEl: '.testimonials__button-prev'
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },

    breakpoints: {
      901: {
        slidesPerView: 1.5
      },
      1201: {
        slidesPerView: 2.1
      }
    }

  });

  // tel mask

  const telInput = document.querySelectorAll('input[type="tel"]')
  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(telInput)

})()