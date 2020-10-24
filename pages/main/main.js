// import {pets} from './pets.js';
// import {Card} from '../../Card.js';
// import {Section} from '../../Section.js';
const cardTemplate = document
  .querySelector(".card-template")
  .content.querySelector(".card-wrapper");
const headerBtn = document.querySelector('.header__btn-menu');
const headerNav = document.querySelector('.header-navbar');
const headerWrapper = document.querySelector('.header__wrapper');
const elementList = document.querySelector(".multiple-items");
let cardList = '';


const handleHeaderBtn =() =>{
    headerBtn.classList.toggle('header__btn-menu_active');
    headerNav.classList.toggle('header-navbar_active');
    headerWrapper.classList.toggle('header__wrapper_active');
}


class Card {
  constructor({
    card,
    cardTemplate
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
    console.log(this._link);
  }

  _getTemplate() {
    return this._template.cloneNode(true);
  }
//   _openPhoto() {
//     this._open({ link: this._link, name: this._name });
//   }
  _setEventListeners() {
    // this._image.addEventListener("click", () => this._openPhoto()); //реализация попап картинки
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
    "type": "Dog",
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
    "type": "Dog",
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
    "type": "Dog",
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
    "type": "Dog",
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
    "type": "Cat",
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
    "type": "Cat",
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
    "type": "Cat",
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
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets/pets-jennifer.png",
    "type": "Dog",
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
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
//   {
//     "name": "Woody",
//     "img": "../../assets/images/woody.png",
//     "type": "Dog",
//     "breed": "Golden Retriever",
//     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     "age": "3 years 6 months",
//     "inoculations": ["adenovirus", "distemper"],
//     "diseases": ["right back leg mobility reduced"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Scarlett",
//     "img": "../../assets/images/scarlett.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     "age": "3 months",
//     "inoculations": ["parainfluenza"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Katrine",
//     "img": "../../assets/images/katrine.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     "age": "6 months",
//     "inoculations": ["panleukopenia"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Timmy",
//     "img": "../../assets/images/timmy.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     "age": "2 years 3 months",
//     "inoculations": ["calicivirus", "viral rhinotracheitis"],
//     "diseases": ["kidney stones"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Freddie",
//     "img": "../../assets/images/freddie.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     "age": "2 months",
//     "inoculations": ["rabies"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Charly",
//     "img": "../../assets/images/charly.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     "age": "8 years",
//     "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
//     "diseases": ["deafness", "blindness"],
//     "parasites": ["lice", "fleas"]
//   },
//   {
//     "name": "Jennifer",
//     "img": "../../assets/images/jennifer.png",
//     "type": "Dog",
//     "breed": "Labrador",
//     "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     "age": "2 months",
//     "inoculations": ["none"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Sophia",
//     "img": "../../assets/images/sophia.png",
//     "type": "Dog",
//     "breed": "Shih tzu",
//     "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     "age": "1 month",
//     "inoculations": ["parvovirus"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Woody",
//     "img": "../../assets/images/woody.png",
//     "type": "Dog",
//     "breed": "Golden Retriever",
//     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     "age": "3 years 6 months",
//     "inoculations": ["adenovirus", "distemper"],
//     "diseases": ["right back leg mobility reduced"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Scarlett",
//     "img": "../../assets/images/scarlett.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     "age": "3 months",
//     "inoculations": ["parainfluenza"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Katrine",
//     "img": "../../assets/images/katrine.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     "age": "6 months",
//     "inoculations": ["panleukopenia"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Timmy",
//     "img": "../../assets/images/timmy.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     "age": "2 years 3 months",
//     "inoculations": ["calicivirus", "viral rhinotracheitis"],
//     "diseases": ["kidney stones"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Freddie",
//     "img": "../../assets/images/freddie.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     "age": "2 months",
//     "inoculations": ["rabies"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Charly",
//     "img": "../../assets/images/charly.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     "age": "8 years",
//     "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
//     "diseases": ["deafness", "blindness"],
//     "parasites": ["lice", "fleas"]
//   },
//   {
//     "name": "Jennifer",
//     "img": "../../assets/images/jennifer.png",
//     "type": "Dog",
//     "breed": "Labrador",
//     "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     "age": "2 months",
//     "inoculations": ["none"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Sophia",
//     "img": "../../assets/images/sophia.png",
//     "type": "Dog",
//     "breed": "Shih tzu",
//     "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     "age": "1 month",
//     "inoculations": ["parvovirus"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Woody",
//     "img": "../../assets/images/woody.png",
//     "type": "Dog",
//     "breed": "Golden Retriever",
//     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     "age": "3 years 6 months",
//     "inoculations": ["adenovirus", "distemper"],
//     "diseases": ["right back leg mobility reduced"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Scarlett",
//     "img": "../../assets/images/scarlett.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     "age": "3 months",
//     "inoculations": ["parainfluenza"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Katrine",
//     "img": "../../assets/images/katrine.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     "age": "6 months",
//     "inoculations": ["panleukopenia"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Timmy",
//     "img": "../../assets/images/timmy.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     "age": "2 years 3 months",
//     "inoculations": ["calicivirus", "viral rhinotracheitis"],
//     "diseases": ["kidney stones"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Freddie",
//     "img": "../../assets/images/freddie.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     "age": "2 months",
//     "inoculations": ["rabies"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Charly",
//     "img": "../../assets/images/charly.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     "age": "8 years",
//     "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
//     "diseases": ["deafness", "blindness"],
//     "parasites": ["lice", "fleas"]
//   },
//   {
//     "name": "Jennifer",
//     "img": "../../assets/images/jennifer.png",
//     "type": "Dog",
//     "breed": "Labrador",
//     "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     "age": "2 months",
//     "inoculations": ["none"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Sophia",
//     "img": "../../assets/images/sophia.png",
//     "type": "Dog",
//     "breed": "Shih tzu",
//     "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     "age": "1 month",
//     "inoculations": ["parvovirus"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Woody",
//     "img": "../../assets/images/woody.png",
//     "type": "Dog",
//     "breed": "Golden Retriever",
//     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     "age": "3 years 6 months",
//     "inoculations": ["adenovirus", "distemper"],
//     "diseases": ["right back leg mobility reduced"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Scarlett",
//     "img": "../../assets/images/scarlett.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     "age": "3 months",
//     "inoculations": ["parainfluenza"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Katrine",
//     "img": "../../assets/images/katrine.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     "age": "6 months",
//     "inoculations": ["panleukopenia"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Timmy",
//     "img": "../../assets/images/timmy.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     "age": "2 years 3 months",
//     "inoculations": ["calicivirus", "viral rhinotracheitis"],
//     "diseases": ["kidney stones"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Freddie",
//     "img": "../../assets/images/freddie.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     "age": "2 months",
//     "inoculations": ["rabies"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Charly",
//     "img": "../../assets/images/charly.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     "age": "8 years",
//     "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
//     "diseases": ["deafness", "blindness"],
//     "parasites": ["lice", "fleas"]
//   },{
//     "name": "Jennifer",
//     "img": "../../assets/images/jennifer.png",
//     "type": "Dog",
//     "breed": "Labrador",
//     "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     "age": "2 months",
//     "inoculations": ["none"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Sophia",
//     "img": "../../assets/images/sophia.png",
//     "type": "Dog",
//     "breed": "Shih tzu",
//     "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     "age": "1 month",
//     "inoculations": ["parvovirus"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Woody",
//     "img": "../../assets/images/woody.png",
//     "type": "Dog",
//     "breed": "Golden Retriever",
//     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     "age": "3 years 6 months",
//     "inoculations": ["adenovirus", "distemper"],
//     "diseases": ["right back leg mobility reduced"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Scarlett",
//     "img": "../../assets/images/scarlett.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     "age": "3 months",
//     "inoculations": ["parainfluenza"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Katrine",
//     "img": "../../assets/images/katrine.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     "age": "6 months",
//     "inoculations": ["panleukopenia"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Timmy",
//     "img": "../../assets/images/timmy.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     "age": "2 years 3 months",
//     "inoculations": ["calicivirus", "viral rhinotracheitis"],
//     "diseases": ["kidney stones"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Freddie",
//     "img": "../../assets/images/freddie.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     "age": "2 months",
//     "inoculations": ["rabies"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Charly",
//     "img": "../../assets/images/charly.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     "age": "8 years",
//     "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
//     "diseases": ["deafness", "blindness"],
//     "parasites": ["lice", "fleas"]
//   },
// {
//     "name": "Jennifer",
//     "img": "../../assets/images/jennifer.png",
//     "type": "Dog",
//     "breed": "Labrador",
//     "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     "age": "2 months",
//     "inoculations": ["none"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Sophia",
//     "img": "../../assets/images/sophia.png",
//     "type": "Dog",
//     "breed": "Shih tzu",
//     "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     "age": "1 month",
//     "inoculations": ["parvovirus"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Woody",
//     "img": "../../assets/images/woody.png",
//     "type": "Dog",
//     "breed": "Golden Retriever",
//     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     "age": "3 years 6 months",
//     "inoculations": ["adenovirus", "distemper"],
//     "diseases": ["right back leg mobility reduced"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Scarlett",
//     "img": "../../assets/images/scarlett.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     "age": "3 months",
//     "inoculations": ["parainfluenza"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Katrine",
//     "img": "../../assets/images/katrine.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     "age": "6 months",
//     "inoculations": ["panleukopenia"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Timmy",
//     "img": "../../assets/images/timmy.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     "age": "2 years 3 months",
//     "inoculations": ["calicivirus", "viral rhinotracheitis"],
//     "diseases": ["kidney stones"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Freddie",
//     "img": "../../assets/images/freddie.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     "age": "2 months",
//     "inoculations": ["rabies"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Charly",
//     "img": "../../assets/images/charly.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     "age": "8 years",
//     "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
//     "diseases": ["deafness", "blindness"],
//     "parasites": ["lice", "fleas"]
//   },
//   {
//     "name": "Jennifer",
//     "img": "../../assets/images/jennifer.png",
//     "type": "Dog",
//     "breed": "Labrador",
//     "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     "age": "2 months",
//     "inoculations": ["none"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Sophia",
//     "img": "../../assets/images/sophia.png",
//     "type": "Dog",
//     "breed": "Shih tzu",
//     "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     "age": "1 month",
//     "inoculations": ["parvovirus"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Woody",
//     "img": "../../assets/images/woody.png",
//     "type": "Dog",
//     "breed": "Golden Retriever",
//     "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     "age": "3 years 6 months",
//     "inoculations": ["adenovirus", "distemper"],
//     "diseases": ["right back leg mobility reduced"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Scarlett",
//     "img": "../../assets/images/scarlett.png",
//     "type": "Dog",
//     "breed": "Jack Russell Terrier",
//     "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     "age": "3 months",
//     "inoculations": ["parainfluenza"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Katrine",
//     "img": "../../assets/images/katrine.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     "age": "6 months",
//     "inoculations": ["panleukopenia"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Timmy",
//     "img": "../../assets/images/timmy.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     "age": "2 years 3 months",
//     "inoculations": ["calicivirus", "viral rhinotracheitis"],
//     "diseases": ["kidney stones"],
//     "parasites": ["none"]
//   },
//   {
//     "name": "Freddie",
//     "img": "../../assets/images/freddie.png",
//     "type": "Cat",
//     "breed": "British Shorthair",
//     "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     "age": "2 months",
//     "inoculations": ["rabies"],
//     "diseases": ["none"],
//     "parasites": ["none"]
//   },
  {
    "name": "Charly",
    "img": "../../assets/images/pets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }] 
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
init(pets)
headerBtn.addEventListener('click', handleHeaderBtn);