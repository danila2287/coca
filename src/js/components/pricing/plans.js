// export const usePriceSwitcher = () => {
//   const switcher = document.querySelector('[data-price="switcher"]');

//   const starterPrice = document.querySelector('[data-price="starter"]');
//   const popularPrice = document.querySelector('[data-price="popular"]');
//   const enterprisePrice = document.querySelector('[data-price="entriesprice"]');

//   const priceList = {
//     starter: {
//       default: 120,
//       withSale: 100,
//     },
//     popular: {
//       default: 1680,
//       withSale: 1400,
//     },
//     entriesprice: {
//       default: 2520,
//       withSale: 2100,
//     },
//   };

//   switcher.checked = true;

//   const setPriceWithSale = () => {
//     starterPrice.textContent = priceList.starter.withSale;
//     popularPrice.textContent = priceList.popular.withSale;
//     enterprisePrice.textContent = priceList.entriesprice.withSale;
//   };

//   const setDefaultPrice = () => {
//     starterPrice.textContent = priceList.starter.default;
//     popularPrice.textContent = priceList.popular.default;
//     enterprisePrice.textContent = priceList.entriesprice.default;
//   };

//   setPriceWithSale();

//   switcher.addEventListener('change', () => {
//     if (switcher.checked) {
//       setPriceWithSale();
//     } else {
//       setDefaultPrice();
//     }
//   });
// };
export const usePriceSwitcher = () => {
  // Получаем чекбокс, а не обертку
  const switcher = document.querySelector(
    '.hero__switcher-checkbox[data-price="switcher"]',
  );

  if (!switcher) {
    console.error('Price switcher checkbox not found');
    return;
  }

  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="entriesprice"]');

  const priceList = {
    starter: {
      default: 120,
      withSale: 100,
    },
    popular: {
      default: 1680,
      withSale: 1400,
    },
    entriesprice: {
      // оставляем как есть, чтобы соответствовать HTML
      default: 2520,
      withSale: 2100,
    },
  };

  // Устанавливаем начальное состояние
  switcher.checked = true;

  const setPriceWithSale = () => {
    if (starterPrice)
      starterPrice.textContent = `$${priceList.starter.withSale} `;
    if (popularPrice)
      popularPrice.textContent = `$${priceList.popular.withSale} `;
    if (enterprisePrice)
      enterprisePrice.textContent = `$${priceList.entriesprice.withSale} `;
  };

  const setDefaultPrice = () => {
    if (starterPrice)
      starterPrice.textContent = `$${priceList.starter.default} `;
    if (popularPrice)
      popularPrice.textContent = `$${priceList.popular.default} `;
    if (enterprisePrice)
      enterprisePrice.textContent = `$${priceList.entriesprice.default} `;
  };

  // Устанавливаем начальные цены
  setPriceWithSale();

  // Добавляем обработчик изменения
  switcher.addEventListener('change', () => {
    if (switcher.checked) {
      setPriceWithSale();
    } else {
      setDefaultPrice();
    }
  });
};
