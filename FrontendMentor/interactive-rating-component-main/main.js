const oneStar = document.querySelector('.one');
const twoStar = document.querySelector('.two');
const threeStar = document.querySelector('.three');
const fourStar = document.querySelector('.four');
const fiveStar = document.querySelector('.five');
const number = document.querySelector('.number')

const submit = document.querySelector('.submit');
const thanks = document.querySelector('.inactive');
const card1 = document.querySelector('.ratingShow');



oneStar.addEventListener  ('click', chooseOne);
function chooseOne  () {
    number.innerText = '1 ' ;
}


twoStar.addEventListener  ('click',chooseTwo);
function chooseTwo () {
    number.innerText = '2';
}
threeStar.addEventListener('click', chooseThree);
function chooseThree () {
    number.innerText = ' 3 ';

}
fourStar.addEventListener ('click', chooseFour);
function chooseFour () {
    number.innerText = ' 4 ';

}
fiveStar.addEventListener ('click', chooseFive);
function chooseFive () {
    number.innerText = ' 5 ';

}



submit.addEventListener('click', thanksScreen);
function thanksScreen (){
    thanks.classList.remove('inactive');
    card1.classList.add('inactive')
}
    





