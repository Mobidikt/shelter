import{Card} from '../../Card.js';
const headerBtn = document.querySelector('.header__btn-menu');
const headerNav = document.querySelector('.header-navbar');
// const initialCards = JSON.parse(pets);
// console.log(initialCards);
// let cardList;

// function addCard(card) {
//   return new Card({
//     card,
//     cardTemplate
//   }).createCard();
// }

// function init(initialCards) {
//   cardList = new Section(
//     {
//       data: initialCards,
//       renderer: (item) => {
//         const card = addCard(item);
//         cardList.addItem(card);
//       },
//     },
//     elementList
//   );
//   cardList.renderer();
// }

const handleHeaderBtn =() =>{
    headerBtn.classList.toggle('header__btn-menu_active');
    headerNav.classList.toggle('header-navbar_active');
}

headerBtn.addEventListener('click', handleHeaderBtn);