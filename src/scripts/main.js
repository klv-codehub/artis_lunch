import numAnimation from './modules/numAnimation';
import menu from './modules/menu';
import animationScroll from './modules/animationScroll';

import googleMaps from 'google-maps';
import {initMap} from './modules/_initMap';
import _formValidation from './modules/_formValidation';
import _owl from './modules/_owl';


$(document).ready(function(){

    numAnimation(0, 220, '#clients', 3000);
    numAnimation(0, 1300, '#dinners', 3000);
    numAnimation(0, 65, '#workers', 3000);

    menu('.menu__item');

    $('#more').click(function(e) {
        e.preventDefault(); 
        animationScroll('.section_adv', 1000);
    });

    $('#order').click(function(e) { 
        e.preventDefault(); 
        animationScroll('.section_form', 1000);
    });

    _formValidation();

    _owl();

    googleMaps.KEY = 'AIzaSyDb-hSAeXf2JnxUCPnrIL8W54NMBW8rCRs';
    googleMaps.load(initMap);
    
});
