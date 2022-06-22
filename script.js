// canvas------------------------------------
let canvas = document.getElementById(`canvas`)
let ctx = canvas.getContext(`2d`)

canvas.height = 500
canvas.width = 700
// canvas end -------------------------------
let score = 0;

// Trivia Questions Section-----------------------------------------
// EASY QUESTIONS
let easyStock = [{
    question: `How many bending elements are there?` ,
    answer: [`Two`,`Four`,`Six`,`Eight`],
    correctAnswer: `B`,
    value: 1000
},
{
    question: `Who is the last Airbender?`,
    answer: [`Aang`,`Korra`,`Uung`,`The Boulder`],
    correctAnswer: `A`,
    value: 1000
    },
{
    question: `What animal does Aang ride?`,
    answer: [`Lemur`, `Hog Monkey`, `Unagi`, `Flying Bison`],
    correctAnswer: `D`,
    value: 1000
    },
{
    question: `What weapon does Sokka carry?`,
    answer: [`net`,`boomerang`, `dagger`,`these hands`],
    correctAnswer: `B`,
    value: 1000
    },
{
    question: `What does Zuko need to regain?`,
    answer: [`lost lunch`, `money`, `honor`,`girlfriend`],
    correctAnswer: `C`,
    value: 1000
    },
{
    question: `Who is the Blue Spirit?`,
    answer: [`Iroh`,`Jet`,`Zuko`, `Momo`],
    correctAnswer: `C`,
    value: 1000
    },
{
    question: `Who is Zuko's uncle?`,
    answer: [`Nezuko`, `Rock Lee`, `Hama`, `Iroh`],
    correctAnswer: `D`,
    value: 1000
    },
{
    question: `Can Sokka bend any elements?`,
    answer: [`No`, `Yes`, `What is bending?`, `Only when he has a sword`],
    correctAnswer: `A`,
    value: 1000
    },
{
    question: `Where is Azula from?`,
    answer: [`Earth Kingdom`, `The Swamp`, `Fire Nation`, `The Northern Air Temple`],
    correctAnswer: `C`,
    value: 1000
    },
{
    question: `Bonus: What does Sifu Mike wear on Friday's?`,
    answer: [`tropical shirt`, `gi`, `Gucci slides`,`straw hat`],
    correctAnswer: `A`,
    value: 25250
    },
]
// MEDIUM QUESTIONS
let mediumStock = [
    {
        question: `What is Iroh's nick name?`,
        answer: [`The Dragon of the West`, `The Sleeping Bison`,`A Chattering Hog Monkey`,`The Tsungi God`],
        correctAnswer: `A`,
        value: 10000
        },
    {
        question: `Who was the Firelord before Ozai?`,
        answer: [`Kyoshi`,`Jeung Jeung`, `Roku`,`Azulon`],
        correctAnswer: `D`,
        value: 10000
        },
    {
        question: `Sokkas first girlfriend is?`,
        answer: [`Katara`, `Toph`,`Yue`,`Suki`],
        correctAnswer: `C`,
        value: 10000
        },
    {
        question: `How many years was Aang frozen for?`,
        answer: [10,80,90,100],
        correctAnswer: `D`,
        value: 10000
        },
    {
        question: `When is all Firebending "turned off"?`,
        answer: [`Summer Solstice`, `Equinox`, `During an eclipse`, `Lunar Eclipse`],
        correctAnswer: `C`,
        value: 10000
        },
    {
        question: `What kind of bending does Aang learn from the Lion Turtle?`,
        answer: [`Water bending`, `Energy bending`,`Light bending`, `Tear bending`],
        correctAnswer: `B`,
        value: 10000
        },
    {
        question: `What is Iroh obssessed with?`,
        answer: [`Crackers`, `Coffee`,`Tea`, `Water`],
        correctAnswer: `C`,
        value: 10000
        },
    {
        question: `Who were the original Earth benders?`,
        answer: [`Badgermoles`,`Catpigs`,`Tigerdillos`, `Raptoreagles`],
        correctAnswer: `A`,
        value: 10000
        },
    {
        question: `What was hidden in the dessert?`,
        answer: [`The Oasis,`,`Wan Shi Tongs Libary`,`The Spirit World`,`The Northern Air Temple`],
        correctAnswer: `B`,
        value: 10000
        },
    {
        question: `Bonus: What is this number? 10101 `,
        answer: [24,21,23,20],
        correctAnswer: `B`,
        value: 25250
        },
]
// HARD QUESTIONS
let hardStock = [
    {
        question: `Who is Piando?`,
        answer: [`craftsman`, `black smith`, `sword smith`,`fisherman`],
        correctAnswer: `C`,
        value: 25000
        },
    {
        question: `Who is a member of the white lotus?`,
        answer: [`Zhaire`,`~49k`,`~53k`,`~63k`],
        correctAnswer: `D`,
        value: 25000
         },
    {
        question: `Who said the quote in the beginning of this quiz?`,
        answer: [`Iroh`, `Combustion Man`, `Roku`, `Tarloq`],
        correctAnswer: `A`,
        value: 25000
        },
    {
        question: `What is the Avatar the bridge of?`,
        answer: [`The Economy and Classism`, `The Spirit World and Humans`, `The Great Divide`, `The North and South Poles`],
        correctAnswer: `B`,
        value: 25000
        },
    {
        question: `What is Hei Bei?`,
        answer: [`demon`, `parrot`, `panda`, `Sand bender`],
        correctAnswer: `C`,
        value: 25000
        },
    {
        question: `Who is Zuko's great grant father from his mother's side? `,
        answer: [`Zhao`, `Roku`, `Bumi`,`Kurok`],
        correctAnswer: `B`,
        value: 25000
        },
    {
        question: `Until what age did Avatar Kyoshi live?`,
        answer: [200,320,230,130],
        correctAnswer: `C`,
        value: 25000
        },
    {
        question: `Who commanded the Dai Li before Azula?`,
        answer: [`Long Feng`, `Toph Beifong`, `Han`, `Koh`],
        correctAnswer: `A`,
        value: 25000
        },
    {
        question: `Who is the face stealer?`,
        answer: [`Piando`,`Koh`,`Rava`,`Koizilla`],
        correctAnswer: `B`,
        value: 25000
        },
    {
        question: `Bonus: When was Ironhack founded?`,
        answer: [2015,2016,2014,2013],
        correctAnswer: `D`,
        value: 50000
        },
]
// Trivia questions end -----------------------------------------


class Progress {
    constructor() {
        this.x= 620,
        this.y= canvas.height-20,
        this.w= 80,
        this.h= 17
    }
    draw() {
        ctx.fillStyle = "rgba(32, 56, 37,.6)"
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
    increase() {
        this.h+=17
        this.y-=17
        
    }
}

let prog = new Progress();

class Difficulty {
    constructor() {
        this.x= 0,
        this.y = 435,
        this.h = 65,
        this.w = 200
    }
    draw() {
        ctx.fillStyle = "rgba(43, 61, 45,.6)"
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
    replaceW(word){
        ctx.fillStyle = "#9FA281"
        ctx.font = "20px Helvetica"
        ctx.fillText(word,75,476) 
    }
}

let diff = new Difficulty();

// Game engine
let game;

let animate = () => {
    game = window.requestAnimationFrame(animate)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    // score
    ctx.fillStyle = "#D0D157"
    ctx.font = "24px Ariel";
    ctx.fillText(`Ban:`, 20,45)
    ctx.fillText(`${score}`, 75,47)
    ctx.fillText(`Progress:`, 525,495)
    // Loading bar
    // ctx.fillStyle = "#9FA281"
    // ctx.fillRect(620,0,80,500)
    //Avatar
    if (score >= 34000 && score < 224999) {
        ctx.drawImage(img2, 250,95,canvas.width*.35,canvas.height-95)
    } else if (score > 225000) {
        ctx.drawImage(img3, 250,95,canvas.width*.35,canvas.height-95)
    }
     else {
    ctx.drawImage(img, 270,90,canvas.width*.25,canvas.height-80)
    }
    prog.draw()
    diff.draw();
    if (easy.length === 0 && medium.length >0) {
        diff.replaceW(`Med`)
        // diff.drawMedium();
    } else if ( medium.length === 0 && hard.length >0) {
        diff.replaceW(`Hard`)
        // diff.drawHard();
    } else {
        diff.replaceW(`Easy`)
        // diff.drawEasy();
    }
    
    if (easy.length === 0 && medium.length === 0 && hard.length === 0) {
        console.log(`array is empty`)
        gameOver()

    }
   
    
    
}

let easy; 
let medium;
let hard;

let gameOn = false;
// Start game function
let startGame = () => {
    bgAudio.play()
    if (!gameOn) {
        score = 0;
        gameOn = true;
        easy = [...easyStock]
        medium = [...mediumStock]
        hard = [...hardStock]
        prog.h=17;
        prog.y= canvas.height-17;
        animate();
    }
}
//On start button press
document.getElementById(`startGame`).onclick = () => {
    startGame();
    chooseE()
}
// score
    
    let randomQ ;
    let startQuestion = document.getElementById(`question`) ;
    let questionSlot ;
    let options =document.getElementsByClassName(`answers`) ;


    function chooseE () {
// Question randomizer
    // startQuestion = document.getElementById(`question`)
    questionSlot = [Math.floor(Math.random()*easy.length)];
    // randomQ = easy[Math.floor(Math.random()*easy.length)]
    // Multiple choice selector
    randomQ= easy.splice(questionSlot,1)[0]
    startQuestion.innerHTML = randomQ.question
    // options = document.getElementsByClassName(`answers`)
    for (let i = 0; i < randomQ.answer.length; i++) {
    options[i].innerHTML = randomQ.answer[i]
    }
}

    function chooseM () {
        console.log(medium)
        questionSlot = [Math.floor(Math.random()*medium.length)];
        // randomQ = medium[Math.floor(Math.random()*medium.length)]
        randomQ = medium.splice(questionSlot,1)[0]
        startQuestion.innerHTML = randomQ.question
        // Multiple choice selector
        // options = document.getElementsByClassName(`answers`)
        for (let i = 0; i < randomQ.answer.length; i++) {
        options[i].innerHTML = randomQ.answer[i]
        }
    }
    function chooseH () {
        console.log(hard)
        questionSlot = [Math.floor(Math.random()*hard.length)];
        // randomQ = hard[Math.floor(Math.random()*hard.length)]
        randomQ = hard.splice(questionSlot,1)[0]
        startQuestion.innerHTML = randomQ.question
        // Multiple choice selector
        // options = document.getElementsByClassName(`answers`)
        for (let i = 0; i < randomQ.answer.length; i++) {
        options[i].innerHTML = randomQ.answer[i]
        }
    }
    const unchecked = document.getElementById("answer")

//Answer verification
    let subTest = document.getElementById(`submit`).onclick = () => {
        let isSelected = document.querySelector(`input[name="answer"]:checked`).value;
    if (isSelected === randomQ.correctAnswer){
        score += randomQ.value
        right.play();
        right.volume = .5
        // console.log(score)
        // return true
    } else {
        score -= randomQ.value * .10
        wrong.play();
        wrong.volume =.7
        console.log(score)
        // return false
    } 
    if (easy.length === 0 && medium.length >0) {
        chooseM();
        // diff.drawMedium();
    } else if ( medium.length === 0) {
        chooseH();
        // diff.drawHard();
    } else {
        chooseE()
        // diff.drawEasy();
    }
    prog.increase();
    unchecked.removeAttribute(`checked`)
} 

 



let img = new Image();
img.src = "Images/Cabbages.png"

let img2 = new Image();
img2.src = "/Images/Suyin_Beifong_Render.png"

let img3 = new Image();
img3.src = "Images/Longfengfull.png"

let bg = new Image();
bg.src = "Images/8484020903b7e65727c4e1a574b33321.1000x1000x1.jpg"
let bg2 = new Image();
bg2.src = "Images/Earth Kingdom.webp"


let bgAudio = new Audio("audio/26The Chakras.mp3")
bgAudio.volume=.25
bgAudio.loop=true

let wrong = new Audio("audio/thats-rough-buddy.mp3")
let right = new Audio("audio/sound-effects-library-cash-register-sound.mp3")

// End Game 
let gameOver = () => {
    window.cancelAnimationFrame(game);
    // console.log(`game over`)
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.fillStyle = "#203825"
    ctx.font = "30px Oregano"
    ctx.fillText(`This is the end of your journey. Total Ban: ${score}`, 100,60)
    gameOn = false;
}










