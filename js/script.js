"use strict"

//Бургер 

const iconMenu = document.querySelectorAll('.menu__icon');
if (iconMenu) {
const menuBody = document.querySelector('.menu__body');
iconMenu.addeventlistener("click", function(e) {
   document.body.classList.toggle('_lock');
   iconMenu.classList.toggle('_active');
   menuBody.classList.toggle('_active');
})
}
