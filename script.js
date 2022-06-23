// canvas------------------------------------
let canvas = document.getElementById(`canvas`)
let ctx = canvas.getContext(`2d`)

canvas.height = 500
canvas.width = 700
// canvas end -------------------------------

let score = 0;
let game;

let easy; 
let medium;
let hard;
let gameOn = false;




class Progress {
    constructor() {
        this.x= 620;
        this.y= canvas.height-20;
        this.w= 80;
        this.h= 17;
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
        this.x= 0;
        this.y = 435;
        this.h = 65;
        this.w = 200;
    }
    draw() {
        ctx.fillStyle = "rgba(43, 61, 45,.6)"
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
    replaceW(word){
        ctx.fillStyle = "#D0D157"
        ctx.font = "24px Oregano"
        ctx.fillText(word,75,476) 
    }
}

let diff = new Difficulty();

// Game engine


let animate = () => {
    game = window.requestAnimationFrame(animate)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    // score
    ctx.fillStyle = "#D0D157"
    ctx.font = "24px Oregano";
    ctx.fillText(`Ban:`, 20,45)
    ctx.fillText(`${score}`, 75,47)
    ctx.fillText(`Progress:`, 525,495)

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
        
    } else if ( medium.length === 0 && hard.length >0) {
        diff.replaceW(`Hard`)

    } else {
        diff.replaceW(`Easy`)
       
    }
    
    if (easy.length === 0 && medium.length === 0 && hard.length === 0) {
        
        gameOver()

    }
   
    
    
}



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
    
    questionSlot = [Math.floor(Math.random()*easy.length)];
   
    
    randomQ= easy.splice(questionSlot,1)[0]
    startQuestion.innerHTML = randomQ.question
    
    for (let i = 0; i < randomQ.answer.length; i++) {
    options[i].innerHTML = randomQ.answer[i]
    }
}

    function chooseM () {
        
        questionSlot = [Math.floor(Math.random()*medium.length)];

        randomQ = medium.splice(questionSlot,1)[0]
        startQuestion.innerHTML = randomQ.question
        
        
        for (let i = 0; i < randomQ.answer.length; i++) {
        options[i].innerHTML = randomQ.answer[i]
        }
    }
    function chooseH () {
        
        questionSlot = [Math.floor(Math.random()*hard.length)];
        
        randomQ = hard.splice(questionSlot,1)[0]
        startQuestion.innerHTML = randomQ.question
        
        
        for (let i = 0; i < randomQ.answer.length; i++) {
        options[i].innerHTML = randomQ.answer[i]
        }
    }
    

//Answer verification
    let subTest = document.getElementById(`submit`).onclick = () => {
        let isSelected = document.querySelector(`input[name="answer"]:checked`).value;
    if (isSelected === randomQ.correctAnswer){
        score += randomQ.value
        right.play();
        right.volume = .5
        
    } else {
        score -= randomQ.value * .10
        wrong.play();
        wrong.volume =.7
        
       
    } 
    if (easy.length === 0 && medium.length >0) {
        chooseM();
        
    } else if ( medium.length === 0) {
        chooseH();
        
    } else {
        chooseE()
        
    }
    prog.increase();
    
    const radio = document.querySelector(`input[type=radio][name=answer]:checked`);
    radio.checked = false;
} 


// End Game 
let gameOver = () => {
    window.cancelAnimationFrame(game);
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.fillStyle = "#9FA281"
    ctx.font = "30px Oregano"
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
    ctx.fillText(`This is the end of your journey. Total Ban: ${score}`, 100,60)
    gameOn = false;
}










