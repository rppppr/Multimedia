const headerHeight = document.querySelector('header').clientHeight;
const sectionRules = document.getElementsByClassName('rules')[0];

sectionRules.style.marginTop = headerHeight.toString() + 'px';