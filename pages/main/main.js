import {pets} from './pets.js';
import {Card} from '../../Card.js';
import {Section} from '../../Section.js';
export const cardTemplate = document
  .querySelector(".card-template")
  .content.querySelector(".card");
const headerBtn = document.querySelector('.header__btn-menu');
const headerNav = document.querySelector('.header-navbar');
const headerWrapper = document.querySelector('.header__wrapper');
const elementList = document.querySelector(".slick-list");
let cardList = '';


const handleHeaderBtn =() =>{
    headerBtn.classList.toggle('header__btn-menu_active');
    headerNav.classList.toggle('header-navbar_active');
    headerWrapper.classList.toggle('header__wrapper_active');
}

// pets.forEach((pet) =>{
//     addCard(pet) ;
// })

function addCard(card) {
  return new Card({
    card,
    cardTemplate,
  }).createCard();
}
function init(pets) {
  cardList = new Section(
    {
      data: pets,
      renderer: (pet) => {
        const card = addCard(pet);
        cardList.addItem(card);
      },
    },
    elementList
  );
  cardList.renderer();

}
// init(pets)
headerBtn.addEventListener('click', handleHeaderBtn);