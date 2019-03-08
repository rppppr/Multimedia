const navButton = document.getElementsByClassName('nav-list-button')[0];
const navList = document.getElementsByClassName('nav-list')[0];

let wasClicked = 0;

navButton.addEventListener('click',()=>
{
    if(wasClicked===0)
    {
        navList.classList.add('show-menu');
        wasClicked = 1;
    }
    else
    {
        navList.classList.remove('show-menu');
        wasClicked = 0;
    }
});
