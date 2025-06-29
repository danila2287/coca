export const useAccordion = () => {
  function initMobileAccordion() {
    // Проверяем ширину экрана
    if (window.innerWidth > 380) return;

    const footerItems = document.querySelectorAll('.footer__item');

    footerItems.forEach((item) => {
      const title = item.querySelector('.footer__item-title');
      const sublist = item.querySelector('.footer__sublist');

      if (!title || !sublist) return;

      // Инициализация - скрываем все списки
      sublist.style.maxHeight = '0';

      title.addEventListener('click', () => {
        // Закрываем другие открытые списки
        footerItems.forEach((otherItem) => {
          if (otherItem !== item) {
            const otherSublist = otherItem.querySelector('.footer__sublist');
            const otherTitle = otherItem.querySelector('.footer__item-title');
            if (otherSublist) {
              otherSublist.style.maxHeight = '0';
              otherTitle.classList.remove('active');
            }
          }
        });

        // Переключаем текущий
        title.classList.toggle('active');
        if (title.classList.contains('active')) {
          sublist.style.maxHeight = sublist.scrollHeight + 'px';
        } else {
          sublist.style.maxHeight = '0';
        }
      });
    });
  }

  // Запускаем при загрузке и при изменении размера окна
  window.addEventListener('DOMContentLoaded', initMobileAccordion);
  window.addEventListener('resize', initMobileAccordion);
};
