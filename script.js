const menu = document.querySelector(".menu");
const close = document.querySelector('.close');
const mobileView = document.querySelector('.mobileView')



const show = () =>{
  mobileView.style.display = 'block';
  menu.style.display = 'none';
}

const donotshow = () =>{
  mobileView.style.display = 'none';
  menu.style.display = 'block';
}

menu.addEventListener('click', show);
close.addEventListener('click',donotshow);