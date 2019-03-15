const headerHeight = document.querySelector('header').clientHeight;
const sectionHistory = document.getElementsByClassName('history')[0];

sectionHistory.style.marginTop = headerHeight.toString() + 'px';
