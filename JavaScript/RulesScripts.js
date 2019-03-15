const headerHeight = document.querySelector('header').clientHeight;
const sectionRules = document.getElementsByClassName('rules')[0];

sectionRules.style.marginTop = headerHeight.toString() + 'px';

const buttons = [...document.getElementsByClassName('button')];
const buttonsImages =
    [
        ["../Images/pawnmove1.JPG","../Images/pawnmove2.JPG",
         "../Images/pawnmove3.JPG","../Images/pawnmove4.JPG","../Images/pawnmove5.JPG"],
        ["../Images/pawnspecial0.JPG","../Images/pawnspecial1.JPG","../Images/pawnspecial2.JPG",
         "../Images/pawnspecial3.JPG","../Images/pawnspecial4.JPG","../Images/pawnspecial5.JPG"],
        ["../Images/pawnpromotion0.JPG","../Images/pawnpromotion1.JPG"],
        ["../Images/knightmove0.JPG","../Images/knightmove1.JPG",
            "../Images/knightmove2.JPG","../Images/knightmove3.JPG","../Images/knightmove4.JPG"],
        ["../Images/bishopmove0.JPG","../Images/bishopmove1.JPG",
         "../Images/bishopmove2.JPG","../Images/bishopmove3.JPG"],
        ["../Images/rookmove0.JPG","../Images/rookmove1.JPG",
            "../Images/rookmove2.JPG","../Images/rookmove3.JPG","../Images/rookmove4.JPG"],
        ["../Images/queenmove0.JPG","../Images/queenmove1.JPG",
            "../Images/queenmove2.JPG","../Images/queenmove3.JPG","../Images/queenmove4.JPG"],
        ["../Images/kingmove0.JPG","../Images/kingmove1.JPG",
            "../Images/kingmove2.JPG","../Images/kingmove3.JPG","../Images/kingmove4.JPG"],
        ["../Images/castlemove0.JPG","../Images/castlemove1.JPG","../Images/castlemove2.JPG"],
        ["../Images/checkmove0.JPG","../Images/checkmove1.JPG","../Images/checkmove2.JPG",
         "../Images/checkmove3.JPG","../Images/checkmove4.JPG","../Images/checkmove5.JPG",
         "../Images/checkmove6.JPG","../Images/checkmove7.JPG"],
        ["../Images/pawntaking0.JPG","../Images/pawntaking1.JPG","../Images/pawntaking2.JPG"],
        ["../Images/knighttaking0.JPG","../Images/knighttaking1.JPG","../Images/knighttaking2.JPG",
            "../Images/knighttaking3.JPG","../Images/knighttaking4.JPG","../Images/knighttaking5.JPG"],
        ["../Images/bishoptaking0.JPG","../Images/bishoptaking1.JPG","../Images/bishoptaking2.JPG"],
        ["../Images/rooktaking0.JPG","../Images/rooktaking1.JPG",
         "../Images/rooktaking2.JPG", "../Images/rooktaking3.JPG"],
        ["../Images/queentaking0.JPG","../Images/queentaking1.JPG",
         "../Images/queentaking2.JPG","../Images/queentaking3.JPG","../Images/queentaking4.JPG"],
        ["../Images/kingtaking0.JPG","../Images/kingtaking2.JPG","../Images/kingtaking1.JPG",
            "../Images/kingtaking3.JPG","../Images/kingtaking4.JPG","../Images/kingtaking5.JPG","../Images/kingtaking6.JPG"],
        ["../Images/mate0.JPG","../Images/mate1.JPG","../Images/mate2.JPG"],
        ["../Images/pat0.JPG","../Images/pat1.JPG","../Images/pat2.JPG"],
        ["../Images/fail0.JPG","../Images/fail1.JPG"]
    ];
const imagesContainers = [...document.getElementsByClassName('gambit-image')];
let movesNumbers = [];

for(let i = 0 ; i < 19 ; i++)
{
    movesNumbers[i] = 0;
}

for(let i = 0 ; i < buttons.length ; i++)
{
    buttons[i].addEventListener('click',()=>
    {
        if(buttons[i].classList.contains('button-previous'))
        {
            movesNumbers[Math.floor(i/2)]--;
            if(movesNumbers[Math.floor(i/2)] <= 0 ) { buttons[i].style.display='none'; }
            if(movesNumbers[Math.floor(i/2)] <= buttonsImages[Math.floor(i/2)].length - 1)
            {
                buttons[i + 1].style.display='block';

            }

        }
        else
        {
            movesNumbers[Math.floor(i/2)]++;
            if(movesNumbers[Math.floor(i/2)] > 0 ) { buttons[i - 1].style.display='block'; }
            if(movesNumbers[Math.floor(i/2)] >= buttonsImages[Math.floor(i/2)].length - 1)
            {
                buttons[i].style.display='none';

            }
        }
        imagesContainers[Math.floor(i/2)].src =
            buttonsImages[Math.floor(i/2)][movesNumbers[Math.floor(i/2)]];
    });
}