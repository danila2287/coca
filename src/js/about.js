import '/scss/about.scss';

//component
import { useTheme } from './components/theme.js';

useTheme();
//Burger

import { useBurger } from './components/burger.js';
useBurger();

import { useHeroSlider } from './components/about/slider.js';
useHeroSlider();

import { useQurTeamSlider } from './components/about/slider.js';
useQurTeamSlider();
