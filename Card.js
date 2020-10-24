export class Card {
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