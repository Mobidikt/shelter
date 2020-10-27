const cardTemplate = document
  .querySelector(".card-template")
  .content.querySelector(".card-wrapper");
const headerBtn = document.querySelector('.header__btn-menu');
const headerNav = document.querySelector('.header-navbar');
const popupCards = document.querySelector('.popup');
const elementList = document.querySelector(".our-friends__content");
let cardList = '';
const handleHeaderBtn =() =>{
    headerBtn.classList.toggle('header__btn-menu_active');
    headerNav.classList.toggle('header-navbar_active');
       if(headerNav.classList.contains('header-navbar_active')){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
}

class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._closeButton = this._popup.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
    this._overlayClose = this._overlayClose.bind(this);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }
  _overlayClose(e) {
    if (e.target.classList.contains("popup")) {
      this.close();
    }
  }
  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._overlayClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._overlayClose);
    document.body.style.overflow = 'auto';
  }
}
const popupCard = new Popup(popupCards);

const popupImg = popupCards.querySelector('.popup__img');
const popupDescription = popupCards.querySelector('.popup__text');
const popupSubtitle = popupCards.querySelector('.popup__subtitle');
const popupTitle = popupCards.querySelector('.popup__title');
const popupAge = popupCards.querySelector('.age');
const popupInoculations = popupCards.querySelector('.inoculations');
const popupDiseases = popupCards.querySelector('.diseases');
const popupParasites = popupCards.querySelector('.parasites');

function handleCardClick(data){
  popupCard.open()
  popupImg.src = data.link;
  popupTitle.textContent = `${data.name}`;
  popupSubtitle.textContent = `${data.type}`;
  popupDescription.textContent = `${data.description}`;
  popupAge.textContent = `${data.age}`;
  popupInoculations.textContent = `${data.inoculations}`;
  popupDiseases.textContent = `${data.diseases}`;
  popupParasites.textContent = `${data.parasites}`;
  document.body.style.overflow = 'hidden';
}

class Card {
  constructor({
    card,
    cardTemplate, 
    handleCardClick
  }) {
    this._link = card.img;
    this._name = card.name;
    this._type = card.type;
    this._breed = card.breed;
    this._description = card.description;
    this._age = card.age;
    this._inoculations = card.inoculations;
    this._diseases = card.diseases;
    this._parasites = card.parasites;
    this._template = cardTemplate;
    this._open = handleCardClick;
  }

  _getTemplate() {
    return this._template.cloneNode(true);
  }
  _openPopup() {
    this._open({link: this._link, name: this._name, type: this._type, age: this._age, description: this._description, inoculations: this._inoculations, diseases: this._diseases, parasites: this._parasites});
  }
  _setEventListeners() {
    this._card.querySelector('.card').addEventListener("click", () => this._openPopup()); //реализация попап картинки
  }
  createCard() {
    this._card = this._getTemplate();
    this._image = this._card.querySelector(".card__img");
    this._card.querySelector(".card__title").textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._setEventListeners();
    return this._card;
  }
}

class Section {
  constructor({ data, renderer }, containerSelector) {
    this._items = data;
    this._renderer = renderer;
    this._container = containerSelector;
  }
  renderer() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(element) {
    this._container.prepend(element);
  }
}

const pets =[{
    "name": "Jennifer",
    "img": "../../assets/images/pets/pets-jennifer.png",
    "type": "Dog - Labrador",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets/pets-sophia.png",
    "type": "Dog - Shih tzu",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets/pets-woody.png",
    "type": "Dog - Golden Retriever",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets/pets-scarlet.png",
    "type": "Dog - Jack Russell Terrier",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets/pets-katrine.png",
    "type": "Cat - British Shorthair",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets/pets-timmy.png",
    "type": "Cat - British Shorthair",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets/pets-freddle.png",
    "type": "Cat - British Shorthair",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets/pets-charly.png",
    "type": "Dog - Jack Russell Terrier",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
  ] 


function addCard(card) {
  return new Card({
    card,
    cardTemplate,
    handleCardClick
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
init(pets)
headerBtn.addEventListener('click', handleHeaderBtn);
popupCard.setEventListeners();