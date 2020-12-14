const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
  //scroll창을 내리다가 window의 top이 nav의 top보다 높아질 경우
  if(window.scrollY >= topOfNav) {
    console.log(scrollY);
    document.body.style.paddingTop = nav.offsetHeight + 'px'; //부자연스러운 동작 해소
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);