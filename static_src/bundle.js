
 "use strict";
 import './assets'
 import $ from 'jquery';
 import './js/slick-carouse';

 (function($) {

   $(document).ready(function(){
         $('.customer-logos').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            settings: {
                  slidesToShow: 3
            },
            responsive: [{
               breakpoint: 768,
               settings: {
                     slidesToShow: 3
               }
            }, {
               breakpoint: 520,
               settings: {
                     slidesToShow: 3
               }
            }]
         });
   });

 })($);