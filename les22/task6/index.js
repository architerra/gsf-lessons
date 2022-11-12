const btn = document.querySelector('.single-use-btn');

const stopClick = function () {
  console.log('clicked');
  btn.removeEventListener('click', stopClick);
};

btn.addEventListener('click', stopClick);
