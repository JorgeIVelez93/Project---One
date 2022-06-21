// canvas------------------------------------
let canvas = document.getElementById(`canvas`)
let ctx = canvas.getContext(`2d`)

canvas.height = 500
canvas.width = 700
// canvas end -------------------------------
let score = 0;

// Trivia Questions Section-----------------------------------------
// EASY QUESTIONS
let easy = [{
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
let medium = [
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
        question: `What is this number? 10101 `,
        answer: [24,31,23,20],
        correctAnswer: 23,
        value: 25250
        },
]
// HARD QUESTIONS
let hard = [
    {
        question: `In what century was the Dutch East India Company founded?`,
        answer: [`18th`, `14th`, `20th`,`17th`],
        correctAnswer: `17th`,
        value: 100000
        },
    {
        question: `What is the average GDP per American household?`,
        answer: [`~81k`,`~49k`,`~53k`,`~63k`],
        correctAnswer: `~63k`,
        value: 100000
         }//,
    // {
    //     question: ,
    //     answer: [],
    //     correctAnswer: ,
    //     value: 100000
    //     },
    // {
    //     question: ,
    //     answer: [],
    //     correctAnswer: ,
    //     value: 100000
    //     },
    // {
    //     question: ,
    //     answer: [],
    //     correctAnswer: ,
    //     value: 100000
    //     },
    // {
    //     question: ,
    //     answer: [],
    //     correctAnswer: ,
    //     value: 100000
    //     },
    // {
    //     question: ,
    //     answer: [],
    //     correctAnswer: ,
    //     value: 100000
    //     },
    // {
    //     question: ,
    //     answer: [],
    //     correctAnswer: ,
    //     value: 100000
    //     },
    // {
    //     question: ,
    //     answer: [],
    //     correctAnswer: ,
    //     value: 100000
    //     },
    // {
    //     question: ,
    //     answer: [],
    //     correctAnswer: ,
    //     value: 100000
    //     },
]
// Trivia questions end -----------------------------------------


class Progress {
    constructor() {
        this.x= 620,
        this.y= canvas.height-20,
        this.w= 80,
        this.h= 20
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

let animate = () => {
    window.requestAnimationFrame(animate)
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
    if (score >= 30000 && score < 50000) {
        ctx.drawImage(img2, 250,160,canvas.width*.25,canvas.height-160)
    } else if (score > 75000) {
        ctx.drawImage(img3, 250,160,canvas.width*.25,canvas.height-160)
    }
     else {
    ctx.drawImage(img, 250,160,canvas.width*.25,canvas.height-160)
    }
    prog.draw()
    diff.draw();
    if (easy.length === 0 && medium.length >0) {
        diff.replaceW(`Med`)
        // diff.drawMedium();
    } else if ( medium.length === 0) {
        diff.replaceW(`Hard`)
        // diff.drawHard();
    } else {
        diff.replaceW(`Easy`)
        // diff.drawEasy();
    }
   
    
    
}

// Start game function
let startGame = () => {
    animate()
    bgAudio.play()
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
        // console.log(score)
        // return true
    } else {
        score -= randomQ.value * .10
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
bg.src = "Images/omashu.jpg"
let bg2 = new Image();
bg2.src = "Images/Earth Kingdom.webp"

let bgAudio = new Audio("./audio/26The Chakras.mp3")
bgAudio.volume=.25
bgAudio.loop=true







