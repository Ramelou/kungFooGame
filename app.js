const squares = document.querySelectorAll('.square')
const master = document.querySelector('.master')
const score = document.querySelector('#score')

let result = 0
let hitPosition

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('master')
    })

    let randomSquare = squares[Math.floor(Math.random() * 4)]
    randomSquare.classList.add('master')

    hitPosition = randomSquare.id
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
        
        if (square.id ==1){
            score.textContent = "Das Internet ist gefährlich, wir raten strengestens von der Nutzung ab"
            document.getElementById("img").src = "danger.png";
        }    
        if(square.id == 2){
            score.textContent = "..." 
            document.getElementById("img").src = "the.jpg";
        }
        if(square.id == 3){
            score.textContent = "Kommt auf die Bezahlung an!" 
            document.getElementById("img").src = "money.jpg";
        }
        if(square.id == 4){
            score.textContent = "Irgendwo  JaneDoe@hotmail" 
            document.getElementById("img").src = "icons.jpg";
        }
        
        hitPosition = null
    }



    })
})

function moveMaster() {
    let timerId = null
    timerId = setInterval(randomSquare, 900)
}

moveMaster()