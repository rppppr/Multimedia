const headerHeight = document.querySelector('header').clientHeight;
const sectionTactics = document.getElementsByClassName('tactics')[0];

sectionTactics.style.marginTop = headerHeight.toString() + 'px';

const audioMessage = new Audio("../Audio/szachy.mp3");

const stopMessage = document.getElementsByClassName('stop')[0];
const startMessage = document.getElementsByClassName('go')[0];

const playMessage = document.getElementsByClassName('play-message')[0];

let playStop = 0;

playMessage.addEventListener('click',()=>
{
   if(playStop === 0)
   {
        stopMessage.style.display = 'block';
        startMessage.style.display = 'none';
        audioMessage.play();
        playStop = 1;
   }
   else
   {
       stopMessage.style.display = 'none';
       startMessage.style.display = 'block';
       audioMessage.pause();
       playStop = 0;
   }
   audioMessage.onended = ()=> { stopMessage.style.display = 'none'; startMessage.style.display = 'block'; };
});


const showTranscription = document.getElementsByClassName('transcription')[0];
const transcriptionText = document.getElementsByClassName('transcription-text')[0];

let wasShowed = 0;

showTranscription.addEventListener('click',()=>
{
    if(wasShowed === 0)
    {
        wasShowed = 1;
        transcriptionText.classList.add('show-message');
        showTranscription.textContent = "Ukryj transkrypcję";
    }
    else
    {
        wasShowed = 0;
        transcriptionText.classList.remove('show-message');
        showTranscription.textContent = "Wyświetl transkrypcję";
    }
});

let answer = document.getElementsByClassName('exercise-answer')[0];
const answerCheck = document.getElementsByClassName('exercise-answer-check')[0];

answerCheck.addEventListener('click',()=>
{
    if(answer.value === "B8" || answer.value === "A8" || answer.value === "b8" || answer.value === "a8")
    {
        answer.value = "";
        answer.placeholder = "Świetna odpowiedź!";
    }
    else
    {
        answer.value = "";
        answer.placeholder = "Niestety źle, spróbuj jeszcze raz!";
    }
});