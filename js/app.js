const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startBtn = document.querySelector('#start-btn')
const stopBtn = document.querySelector('#stop-btn')
const restartBtn = document.querySelector('.restart-btn')
const levels = document.querySelectorAll('input')
const modal = document.querySelector('.alert')
const modal2 = document.querySelector('.alert2')
const oktBtn = document.querySelector('.ok-btn')
const modalScore = document.querySelector('.modal-score')
const okBip = document.querySelector('#good')
const badBip = document.querySelector('#bad')

let result = 0
let timerID = null
let time = 60;
let hitPosition
let cowntDown
let difficulty 
let game = 'off'

//FUNCTIONS

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}


function MoveMole() {
    timerID = setInterval(randomSquare, difficulty)
}


function timer() {
    time--
    timeLeft.textContent = time

    if (time == 0) {
        clearInterval(timerID)
        clearInterval(cowntDown)
        modal.classList.remove('hide')
        modalScore.textContent = result
        
    }
}


function levelChoice(level){
    difficulty = level.input
}



//ADD EVEN LINTENERS

squares.forEach(square => {
    square.addEventListener('mousedown', () => {

        if(game == 'on'){
            if (square.id == hitPosition) {
                result++
                score.textContent = result
                hitPosition = null
                okBip.play()
            } else {
                result--
                score.textContent = result
                badBip.play()
            }
        }
       

    })
})




startBtn.addEventListener('click', () => {
    console.log(difficulty);
    if(difficulty){
        game = 'on'
        MoveMole()
        cowntDown = setInterval(timer, 1000)
    }else{
        modal2.classList.remove('hide')
        // alert('choose the difficulty level');
    }
 
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerID)
    clearInterval(cowntDown)
    window.location.href = 'file:///Users/andresmansilla/Documents/PRACTICAS/DOM/WHAC%20A%20MOLE/index.html'

})


restartBtn.addEventListener('click', ()=>{
    window.location.href = 'file:///Users/andresmansilla/Documents/PRACTICAS/DOM/WHAC%20A%20MOLE/index.html'
    modal.classList.add('hide')
})


levels.forEach(level => {
    level.addEventListener('click', ()=>{
        difficulty = level.value
       
    })
})


oktBtn.addEventListener('click', ()=>{
    modal2.classList.add('hide')

})



