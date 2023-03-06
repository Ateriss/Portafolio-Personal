const navImg = document.querySelector('.cabecera__nav--img');
const menuItems = document.querySelectorAll('.cabecera__menu li a');
const menuList = document.querySelector('.cabecera__menu');

navImg.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuList.classList.remove('active');
  });
});
