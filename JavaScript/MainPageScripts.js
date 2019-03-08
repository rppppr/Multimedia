const quote = document.getElementsByClassName('introduction-quote')[0];

window.addEventListener('scroll',()=>
{
    if(scrollY > quote.offsetTop - 500)
    {
        quote.classList.add('show-quote')
    }
});

const buttonPrevious = document.getElementsByClassName('button-previous')[0];
const buttonNext = document.getElementsByClassName('button-next')[0];
const actualImage = document.getElementsByClassName('gambit-image')[0];
const imagesHrefs = ["Images/kingsgambit0.JPG","Images/kingsgambit1.JPG","Images/kingsgambit2.JPG","Images/kingsgambit3.JPG"];

let moveNumber = 0;

buttonPrevious.addEventListener('click',()=>
{
    moveNumber--;
    if(moveNumber < 3) { buttonNext.style.display = 'block'; }
    if(moveNumber < 1) { buttonPrevious.style.display = 'none'; }
    if(moveNumber > 0) { buttonPrevious.style.display = 'block'; }
    actualImage.src=imagesHrefs[moveNumber];
    console.log(actualImage.src);
});

buttonNext.addEventListener('click',()=>
{
    moveNumber++;
    if(moveNumber > 0) { buttonPrevious.style.display = 'block'; }
    if(moveNumber > 2) { buttonNext.style.display = 'none'; }
    if(moveNumber < 3) { buttonNext.style.display = 'block'; }
    actualImage.src=imagesHrefs[moveNumber];
    console.log(actualImage.src);
});