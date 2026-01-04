let StartButton = document.body.querySelector("#StartButton")
StartButton.addEventListener("click",TilGame)

function TilGame() {
    window.location="finalSpill.html"
    //pokemonFunc()
}

let CreditButton = document.querySelector("#CreditButton")
CreditButton.addEventListener("click",options)

function options(){
    window.location="credits.html"
}

let QuitButton = document.querySelector("#QuitButton")
QuitButton.addEventListener("click", QuitGame)

function QuitGame(){
    window.close()
}
