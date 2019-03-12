const headerHeight = document.querySelector('header').clientHeight;
const sectionTactics = document.getElementsByClassName('tactics')[0];

sectionTactics.style.marginTop = headerHeight.toString() + 'px';