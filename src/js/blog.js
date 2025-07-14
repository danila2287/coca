import '/scss/blog.scss';

//component
import { useTheme } from './components/theme.js';

useTheme();
//Burger

import { useBurger } from './components/burger.js';
useBurger();

import { useHeroSlider } from './components/blog/slider.js';
useHeroSlider();

import { useArticlesSlider } from './components/blog/slider.js';
useArticlesSlider();
