var mainBox = document.getElementById('mainBox');
var menuPrincipal = document.getElementById('menuPrincipal');
var divQuestoes = document.getElementById('divQuestoes');
var divQuizFinalizado = document.getElementById('divQuizFinalizado');
var startButton = document.getElementById('startButton');
var helpButton = document.getElementById('helpButton');
var creditsButton = document.getElementById('creditsButton');
var pacManPause = document.getElementById('pacManPause');
var pacManPlay = document.getElementById('pacManPlay');
var divInstrucoes = document.getElementById('divInstrucoes');


var question1Options = document.getElementById('question1Options').querySelectorAll('.questionButton');
var question2Options = document.getElementById('question2Options').querySelectorAll('.questionButton');
var question3Options = document.getElementById('question3Options').querySelectorAll('.questionButton');
var question4Options = document.getElementById('question4Options').querySelectorAll('.questionButton');
var question5Options = document.getElementById('question5Options').querySelectorAll('.questionButton');
var question6Options = document.getElementById('question6Options').querySelectorAll('.questionButton');
var question7Options = document.getElementById('question7Options').querySelectorAll('.questionButton');
var question8Options = document.getElementById('question8Options').querySelectorAll('.questionButton');
var question9Options = document.getElementById('question9Options').querySelectorAll('.questionButton');
var question10Options = document.getElementById('question10Options').querySelectorAll('.questionButton');
var question11Options = document.getElementById('question11Options').querySelectorAll('.questionButton');
var question12Options = document.getElementById('question12Options').querySelectorAll('.questionButton');
var question13Options = document.getElementById('question13Options').querySelectorAll('.questionButton');
var question14Options = document.getElementById('question14Options').querySelectorAll('.questionButton');
var question15Options = document.getElementById('question15Options').querySelectorAll('.questionButton');
var question16Options = document.getElementById('question16Options').querySelectorAll('.questionButton');
var question17Options = document.getElementById('question17Options').querySelectorAll('.questionButton');
var question18Options = document.getElementById('question18Options').querySelectorAll('.questionButton');
var question19Options = document.getElementById('question19Options').querySelectorAll('.questionButton');
var question20Options = document.getElementById('question20Options').querySelectorAll('.questionButton');
var question21Options = document.getElementById('question21Options').querySelectorAll('.questionButton');
var question22Options = document.getElementById('question22Options').querySelectorAll('.questionButton');
var question23Options = document.getElementById('question23Options').querySelectorAll('.questionButton');
var question24Options = document.getElementById('question24Options').querySelectorAll('.questionButton');
var question25Options = document.getElementById('question25Options').querySelectorAll('.questionButton');
var question26Options = document.getElementById('question26Options').querySelectorAll('.questionButton');
var question27Options = document.getElementById('question27Options').querySelectorAll('.questionButton');
var question28Options = document.getElementById('question28Options').querySelectorAll('.questionButton');
var question29Options = document.getElementById('question29Options').querySelectorAll('.questionButton');
var question30Options = document.getElementById('question30Options').querySelectorAll('.questionButton');



var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2');
var question3 = document.getElementById('question3');
var question4 = document.getElementById('question4');
var question5 = document.getElementById('question5');
var question6 = document.getElementById('question6');
var question7 = document.getElementById('question7');
var question8 = document.getElementById('question8');
var question9 = document.getElementById('question9');
var question10 = document.getElementById('question10');
var question11 = document.getElementById('question11');
var question12 = document.getElementById('question12');
var question13 = document.getElementById('question13');
var question14 = document.getElementById('question14');
var question15 = document.getElementById('question15');
var question16 = document.getElementById('question16');
var question17 = document.getElementById('question17');
var question18 = document.getElementById('question18');
var question19 = document.getElementById('question19');
var question20 = document.getElementById('question20');
var question21 = document.getElementById('question21');
var question22 = document.getElementById('question22');
var question23 = document.getElementById('question23');
var question24 = document.getElementById('question24');
var question25 = document.getElementById('question25');
var question26 = document.getElementById('question26');
var question27 = document.getElementById('question27');
var question28 = document.getElementById('question28');
var question29 = document.getElementById('question29');
var question30 = document.getElementById('question30');


var question = 1;
var score = 0;

// Html das questões
function renderQuestion(){
    // O innerHTML serve pra escrever dentro do html (Nesse caso dentro da div mainBox)

    menuPrincipal.style.display = 'none';
    divInstrucoes.style.display = 'none';
    divCreditos.style.display = 'none';
    divQuestoes.style.display = 'block';

    switch (question){
        case 1:
            question1.style.display = 'block';
        break;
        case 2:
            question1.style.display = 'none';
            question2.style.display = 'block';
        break;
        case 3:           
            question2.style.display = 'none';
            question3.style.display = 'block';
        break;
        case 4:            
            question3.style.display = 'none';
            question4.style.display = 'block';
        break;
        case 5:           
            question4.style.display = 'none';
            question5.style.display = 'block';
        break;
        case 6:    
            question5.style.display = 'none';
            question6.style.display = 'block';
        break;
        case 7:    
            question6.style.display = 'none';
            question7.style.display = 'block';
        break;
        case 8:    
            question7.style.display = 'none';
            question8.style.display = 'block';
        break;
        case 9:    
            question8.style.display = 'none';
            question9.style.display = 'block';
        break;
        case 10:    
            question9.style.display = 'none';
            question10.style.display = 'block';
        break;
        case 11:    
            question10.style.display = 'none';
            question11.style.display = 'block';
        break;
        case 12:    
            question11.style.display = 'none';
            question12.style.display = 'block';
        break;
        case 13:    
            question12.style.display = 'none';
            question13.style.display = 'block';
        break;
        case 14:    
            question13.style.display = 'none';
            question14.style.display = 'block';
        break;
        case 15:    
            question14.style.display = 'none';
            question15.style.display = 'block';
        break;
        case 16:    
            question15.style.display = 'none';
            question16.style.display = 'block';
        break;
        case 17:    
            question16.style.display = 'none';
            question17.style.display = 'block';
        break;
        case 18:    
            question17.style.display = 'none';
            question18.style.display = 'block';
        break;
        case 19:    
            question18.style.display = 'none';
            question19.style.display = 'block';
        break;
        case 20:    
            question19.style.display = 'none';
            question20.style.display = 'block';
        break;
        case 21:    
            question20.style.display = 'none';
            question21.style.display = 'block';
        break;
        case 22:
            question21.style.display = 'none';
            question22.style.display = 'block';
        break;
        case 23:    
            question22.style.display = 'none';
            question23.style.display = 'block';
        break;
        case 24:    
            question23.style.display = 'none';
            question24.style.display = 'block';
        break;
        case 25:    
            question24.style.display = 'none';
            question25.style.display = 'block';
        break;
        case 26:    
            question25.style.display = 'none';
            question26.style.display = 'block';
        break;
        case 27:    
            question26.style.display = 'none';
            question27.style.display = 'block';
        break;
        case 28:    
            question27.style.display = 'none';
            question28.style.display = 'block';
        break;
        case 29:    
            question28.style.display = 'none';
            question29.style.display = 'block';
        break;
        case 30:    
            question29.style.display = 'none';
            question30.style.display = 'block';
        break;
        case 31:
            question30.style.display = 'none';
            divQuestoes.style.display = 'none';
            divQuizFinalizado.style.display = "block";
            divQuizFinalizado.innerHTML = 
            `
                <p>Sua pontuação: ${score}</p>
                <br>
                <button onclick="reloadPage()" class="optionButton questionButton">Menu Principal</button>
            `
        break;
    }
    console.log(`question: ${question}`);
    console.log(`score: ${score}`);
}

// Html das instruções
function renderInstructions(){
    menuPrincipal.style.display = 'none';
    divQuestoes.style.display = 'none';
    divCreditos.style.display = 'none';
    divInstrucoes.style.display = 'block';
}

function renderCredits(){
    menuPrincipal.style.display = 'none';
    divQuestoes.style.display = 'none';
    divInstrucoes.style.display = 'none';
    divCreditos.style.display = 'block';
}

function increaseMainBox(fun){
    
    menuPrincipal.style.display = 'none';
    
    startButton.style.display = 'none';
    helpButton.style.display = 'none';
    creditsButton.style.display = 'none';

    let id = null;
    let h = mainBox.style.minHeight;
    let w = mainBox.style.minWidth;
    clearInterval(id);
    id = setInterval(frame, 7);
    function frame(){
        if (h == 45 || w == 70){
            clearInterval(id);
            fun();
        } else {
            mainBox.style.minHeight = `${h}vh`;
            mainBox.style.minWidth = `${w}vw`;
            h++;
            w++;
        }
    }
    fun();
}

const audio = new Audio('./public/audio/PacManMusic.mp3');
audio.volume = 0.2;

function audioPlay(){
    audio.play();
    pacManPlay.style.display = 'none';
    pacManPause.style.display = 'block';
}

function audioPause(){
    audio.currentTime = 0;
    audio.pause();
    pacManPause.style.display = 'none';
    pacManPlay.style.display = 'block';
}

function questionAnswered(correct){

    const toastyMk = new Audio('./public/audio/toastySound.mp3');
    toastyMk.volume = 0.2;

    const correctfx = new Audio('./public/audio/correctfx.mp4');
    correctfx.volume = 0.2;

    const wrongfx = new Audio('./public/audio/wrongfx.mp4');
    wrongfx.volume = 0.2;
    
    switch (question){
        case 1:


            question1Options[0].classList.add('optionButtonWrong');
            question1Options[0].disabled = true
            question1Options[1].classList.add('optionButtonWrong');
            question1Options[1].disabled = true
            question1Options[2].classList.add('optionButtonCorrect');
            question1Options[2].disabled = true
            question1Options[3].classList.add('optionButtonWrong');
            question1Options[3].disabled = true
        break;
        case 2:

            

            question2Options[0].classList.add('optionButtonWrong');
            question2Options[0].disabled = true
            question2Options[1].classList.add('optionButtonWrong');
            question2Options[1].disabled = true
            question2Options[2].classList.add('optionButtonWrong');
            question2Options[2].disabled = true
            question2Options[3].classList.add('optionButtonCorrect');
            question2Options[3].disabled = true
        break;
        case 3:
            question3Options[0].classList.add('optionButtonWrong');
            question3Options[0].disabled = true
            question3Options[1].classList.add('optionButtonCorrect');
            question3Options[1].disabled = true
            question3Options[2].classList.add('optionButtonWrong');
            question3Options[2].disabled = true
            question3Options[3].classList.add('optionButtonWrong');
            question3Options[3].disabled = true
        break;
        case 4:
            question4Options[0].classList.add('optionButtonWrong');
            question4Options[0].disabled = true
            question4Options[1].classList.add('optionButtonWrong');
            question4Options[1].disabled = true
            question4Options[2].classList.add('optionButtonCorrect');
            question4Options[2].disabled = true
            question4Options[3].classList.add('optionButtonWrong');
            question4Options[3].disabled = true
        break;
        case 5:
            question5Options[0].classList.add('optionButtonWrong');
            question5Options[0].disabled = true
            question5Options[1].classList.add('optionButtonWrong');
            question5Options[1].disabled = true
            question5Options[2].classList.add('optionButtonWrong');
            question5Options[2].disabled = true
            question5Options[3].classList.add('optionButtonCorrect');
            question5Options[3].disabled = true
        break;
        case 6:
            question6Options[0].classList.add('optionButtonCorrect');
            question6Options[0].disabled = true
            question6Options[1].classList.add('optionButtonWrong');
            question6Options[1].disabled = true
            question6Options[2].classList.add('optionButtonWrong');
            question6Options[2].disabled = true
            question6Options[3].classList.add('optionButtonWrong');
            question6Options[3].disabled = true
        break;
        case 7:
            question7Options[0].classList.add('optionButtonWrong');
            question7Options[0].disabled = true
            question7Options[1].classList.add('optionButtonWrong');
            question7Options[1].disabled = true
            question7Options[2].classList.add('optionButtonCorrect');
            question7Options[2].disabled = true
            question7Options[3].classList.add('optionButtonWrong');
            question7Options[3].disabled = true
        break;
        case 8:
            question8Options[0].classList.add('optionButtonWrong');
            question8Options[0].disabled = true
            question8Options[1].classList.add('optionButtonWrong');
            question8Options[1].disabled = true
            question8Options[2].classList.add('optionButtonWrong');
            question8Options[2].disabled = true
            question8Options[3].classList.add('optionButtonCorrect');
            question8Options[3].disabled = true
        break;
        case 9:
            question9Options[0].classList.add('optionButtonWrong');
            question9Options[0].disabled = true
            question9Options[1].classList.add('optionButtonWrong');
            question9Options[1].disabled = true
            question9Options[2].classList.add('optionButtonCorrect');
            question9Options[2].disabled = true
            question9Options[3].classList.add('optionButtonWrong');
            question9Options[3].disabled = true
        break;
        case 10:
            question10Options[0].classList.add('optionButtonWrong');
            question10Options[0].disabled = true
            question10Options[1].classList.add('optionButtonWrong');
            question10Options[1].disabled = true
            question10Options[2].classList.add('optionButtonWrong');
            question10Options[2].disabled = true
            question10Options[3].classList.add('optionButtonCorrect');
            question10Options[3].disabled = true
        break;
        case 11:
            question11Options[0].classList.add('optionButtonCorrect');
            question11Options[0].disabled = true
            question11Options[1].classList.add('optionButtonWrong');
            question11Options[1].disabled = true
            question11Options[2].classList.add('optionButtonWrong');
            question11Options[2].disabled = true
            question11Options[3].classList.add('optionButtonWrong');
            question11Options[3].disabled = true
        break;
        case 12:
            question12Options[0].classList.add('optionButtonWrong');
            question12Options[0].disabled = true
            question12Options[1].classList.add('optionButtonWrong');
            question12Options[1].disabled = true
            question12Options[2].classList.add('optionButtonCorrect');
            question12Options[2].disabled = true
            question12Options[3].classList.add('optionButtonWrong');
            question12Options[3].disabled = true
        break;
        case 13:
            question13Options[0].classList.add('optionButtonCorrect');
            question13Options[0].disabled = true
            question13Options[1].classList.add('optionButtonWrong');
            question13Options[1].disabled = true
            question13Options[2].classList.add('optionButtonWrong');
            question13Options[2].disabled = true
            question13Options[3].classList.add('optionButtonWrong');
            question13Options[3].disabled = true
        break;
        case 14:
            question14Options[0].classList.add('optionButtonWrong');
            question14Options[0].disabled = true
            question14Options[1].classList.add('optionButtonWrong');
            question14Options[1].disabled = true
            question14Options[2].classList.add('optionButtonWrong');
            question14Options[2].disabled = true
            question14Options[3].classList.add('optionButtonCorrect');
            question14Options[3].disabled = true
        break;
        case 15:
            question15Options[0].classList.add('optionButtonWrong');
            question15Options[0].disabled = true
            question15Options[1].classList.add('optionButtonCorrect');
            question15Options[1].disabled = true
            question15Options[2].classList.add('optionButtonWrong');
            question15Options[2].disabled = true
            question15Options[3].classList.add('optionButtonWrong');
            question15Options[3].disabled = true
        break;
        case 16:
            question16Options[0].classList.add('optionButtonWrong');
            question16Options[0].disabled = true
            question16Options[1].classList.add('optionButtonWrong');
            question16Options[1].disabled = true
            question16Options[2].classList.add('optionButtonWrong');
            question16Options[2].disabled = true
            question16Options[3].classList.add('optionButtonCorrect');
            question16Options[3].disabled = true
        break;
        case 17:
            question17Options[0].classList.add('optionButtonCorrect');
            question17Options[0].disabled = true
            question17Options[1].classList.add('optionButtonWrong');
            question17Options[1].disabled = true
            question17Options[2].classList.add('optionButtonWrong');
            question17Options[2].disabled = true
            question17Options[3].classList.add('optionButtonWrong');
            question17Options[3].disabled = true
        break;
        case 18:
            question18Options[0].classList.add('optionButtonWrong');
            question18Options[0].disabled = true
            question18Options[1].classList.add('optionButtonWrong');
            question18Options[1].disabled = true
            question18Options[2].classList.add('optionButtonCorrect');
            question18Options[2].disabled = true
            question18Options[3].classList.add('optionButtonWrong');
            question18Options[3].disabled = true
        break;
        case 19:
            question19Options[0].classList.add('optionButtonCorrect');
            question19Options[0].disabled = true
            question19Options[1].classList.add('optionButtonWrong');
            question19Options[1].disabled = true
            question19Options[2].classList.add('optionButtonWrong');
            question19Options[2].disabled = true
            question19Options[3].classList.add('optionButtonWrong');
            question19Options[3].disabled = true
        break;
        case 20:
            question20Options[0].classList.add('optionButtonWrong');
            question20Options[0].disabled = true
            question20Options[1].classList.add('optionButtonWrong');
            question20Options[1].disabled = true
            question20Options[2].classList.add('optionButtonWrong');
            question20Options[2].disabled = true
            question20Options[3].classList.add('optionButtonCorrect');
            question20Options[3].disabled = true
        break;
        case 21:
            question21Options[0].classList.add('optionButtonWrong');
            question21Options[0].disabled = true
            question21Options[1].classList.add('optionButtonWrong');
            question21Options[1].disabled = true
            question21Options[2].classList.add('optionButtonCorrect');
            question21Options[2].disabled = true
            question21Options[3].classList.add('optionButtonWrong');
            question21Options[3].disabled = true
        break;
        case 22:
            question22Options[0].classList.add('optionButtonCorrect');
            question22Options[0].disabled = true
            question22Options[1].classList.add('optionButtonWrong');
            question22Options[1].disabled = true
            question22Options[2].classList.add('optionButtonWrong');
            question22Options[2].disabled = true
            question22Options[3].classList.add('optionButtonWrong');
            question22Options[3].disabled = true
        break;
        case 23:
            question23Options[0].classList.add('optionButtonWrong');
            question23Options[0].disabled = true
            question23Options[1].classList.add('optionButtonCorrect');
            question23Options[1].disabled = true
            question23Options[2].classList.add('optionButtonWrong');
            question23Options[2].disabled = true
            question23Options[3].classList.add('optionButtonWrong');
            question23Options[3].disabled = true
        break;
        case 24:
            question24Options[0].classList.add('optionButtonWrong');
            question24Options[0].disabled = true
            question24Options[1].classList.add('optionButtonWrong');
            question24Options[1].disabled = true
            question24Options[2].classList.add('optionButtonWrong');
            question24Options[2].disabled = true
            question24Options[3].classList.add('optionButtonCorrect');
            question24Options[3].disabled = true
        break;
        case 25:
            question25Options[0].classList.add('optionButtonWrong');
            question25Options[0].disabled = true
            question25Options[1].classList.add('optionButtonCorrect');
            question25Options[1].disabled = true
            question25Options[2].classList.add('optionButtonWrong');
            question25Options[2].disabled = true
            question25Options[3].classList.add('optionButtonWrong');
            question25Options[3].disabled = true
        break;
        case 26:
            question26Options[0].classList.add('optionButtonWrong');
            question26Options[0].disabled = true
            question26Options[1].classList.add('optionButtonWrong');
            question26Options[1].disabled = true
            question26Options[2].classList.add('optionButtonWrong');
            question26Options[2].disabled = true
            question26Options[3].classList.add('optionButtonCorrect');
            question26Options[3].disabled = true
        break;
        case 27:
            question27Options[0].classList.add('optionButtonWrong');
            question27Options[0].disabled = true
            question27Options[1].classList.add('optionButtonWrong');
            question27Options[1].disabled = true
            question27Options[2].classList.add('optionButtonCorrect');
            question27Options[2].disabled = true
            question27Options[3].classList.add('optionButtonWrong');
            question27Options[3].disabled = true
        break;
        case 28:
            question28Options[0].classList.add('optionButtonWrong');
            question28Options[0].disabled = true
            question28Options[1].classList.add('optionButtonCorrect');
            question28Options[1].disabled = true
            question28Options[2].classList.add('optionButtonWrong');
            question28Options[2].disabled = true
            question28Options[3].classList.add('optionButtonWrong');
            question28Options[3].disabled = true
        break;
        case 29:
            question29Options[0].classList.add('optionButtonWrong');
            question29Options[0].disabled = true
            question29Options[1].classList.add('optionButtonWrong');
            question29Options[1].disabled = true
            question29Options[2].classList.add('optionButtonWrong');
            question29Options[2].disabled = true
            question29Options[3].classList.add('optionButtonCorrect');
            question29Options[3].disabled = true
        break;
        case 30:
            question30Options[0].classList.add('optionButtonCorrect');
            question30Options[0].disabled = true
            question30Options[1].classList.add('optionButtonWrong');
            question30Options[1].disabled = true
            question30Options[2].classList.add('optionButtonWrong');
            question30Options[2].disabled = true
            question30Options[3].classList.add('optionButtonWrong');
            question30Options[3].disabled = true
        break;
    }
    
    question++;

    if(correct){
        correctfx.play();
        score++;
    }else{
        wrongfx.play()
    }
    setTimeout(renderQuestion, 1.75*1000);
}

// função pra resetar os pontos e ir pro menu


function resetAndGoToMainMenu(){
    question = 1;
    score = 0;
    mainBox.style.minHeight = 0;
    mainBox.style.minWidth = 0;

    divQuestoes.style.display = 'none';
    divQuizFinalizado.style.display = 'none';
    divInstrucoes.style.display = 'none';
    divCreditos.style.display = 'none'

    startButton.style.display = 'block';
    helpButton.style.display = 'block';
    menuPrincipal.style.display = 'block';
    creditsButton.style.display = 'block';

    console.log(`question: ${question}`);
    console.log(`score: ${score}`);
}

function reloadPage(){
    document.location.reload();
}