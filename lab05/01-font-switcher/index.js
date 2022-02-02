var currentFont = 1.4;

const makeBigger = () => {
   currentFont += .2;
   setFont();
};

const makeSmaller = () => {
   currentFont -= .2;
   setFont();
};

const setFont = () => {
   document.querySelector('.content').style.fontSize = `${currentFont}em`;
   document.querySelector('h1').style.fontSize = `${currentFont}`
}

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
