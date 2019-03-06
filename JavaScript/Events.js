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
    console.log(wasClicked);
});

const quote = document.getElementsByClassName('introduction-quote')[0];

window.addEventListener('scroll',()=>
{
    if(scrollY > quote.offsetTop - 500)
    {
        quote.classList.add('show-quote')
    }
});