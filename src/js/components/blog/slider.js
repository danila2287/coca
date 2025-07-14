import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';

export const useHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
export const useArticlesSlider = () => {
  new Swiper('.articles2__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
    navigation: {
      nextEl: '.articles2-button-next',
      prevEl: '.articles2-button-prev',
    },
  });
};
