import '/scss/main.scss';

//component
import { useTheme } from './components/theme.js';

useTheme();
//Burger

import { useBurger } from './components/burger.js';
useBurger();

import { useInsightSlider } from './components/home/slider.js';
useInsightSlider();

import { useTestimonialsSlider } from './components/home/slider.js';
useTestimonialsSlider();

import { useAccordion } from './components/accordion.js';
useAccordion();
