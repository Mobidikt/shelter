const cards = document.querySelectorAll('.card');
const btnLeft = document.querySelector('.btn__left');
const btnRight = document.querySelector('.btn__right');
let currentItem =0;
let isEnabled = true;

function changeCurrentItem(n){
    currentItem=(n+cards.length)%cards.length;
}
function hideItem(direction){
    isEnabled = false;
    cards[currentItem].classList.add(direction);
    cards[currentItem].addEventListener('animationend', function(){
        this.classList.remove('active', direction);
    })
}

function showItem(direction){
    cards[currentItem].classList.add('next', direction);
    cards[currentItem].addEventListener('animationend', function(){
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled= true;
    })
}
function nextItem(n){
    hideItem('to-left');
    changeCurrentItem(n+1);
    showItem('from-right');
}
function previousItem(n){
    hideItem('to-right');
    changeCurrentItem(n-1);
    showItem('from-left');
}

btnLeft.addEventListener('click', function(){
    if(isEnabled){
        previousItem(currentItem);
    }
})
btnRight.addEventListener('click', function(){
    if(isEnabled){
        nextItem(currentItem);
    }
})