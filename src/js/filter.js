import { parse } from "postcss";

const plates = document.querySelectorAll('.plates__plate');

document.querySelector('.apartments__filter').addEventListener('click', (event) => {
  if ( !event.target.classList.contains('filter__button') ) return false;
  // console.log(event.target);
  let min = parseInt(event.target.dataset.priceMin, 10);
  let max = parseInt(event.target.dataset.priceMax, 10);
  let price = 0;

  plates.forEach((elem) => {
    price = parseInt(elem.dataset.price, 10);
    if ( (price >= min) && (price <= max) ) {
      elem.classList.remove('plate_hide');
    } else {
      elem.classList.add('plate_hide');
    }
  });
});