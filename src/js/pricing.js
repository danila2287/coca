import '../assets/scss/pricing.scss';

//component
import { useTheme } from './components/theme.js';

useTheme();
//Burger

import { useBurger } from './components/burger.js';
useBurger();

import { usePriceSwitcher } from './components/pricing/plans.js';
usePriceSwitcher();
