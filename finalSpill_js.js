let music = 0

let Move1Navn = null;
let Move2Navn = null;
let Move3Navn = null;
let Move4Navn = null;

let Move1Power = null;
let Move2Power = null;
let Move3Power = null;
let Move4Power = null;

let startHPDin = null;
let nåverendeHPDin = null;

let startHPenMotstander = null;
let nåverendeMotsanderHp = null;

let bakgrunnsMusikk = document.querySelector("#bakgrunnsmusikk");
let losingMusic = document.querySelector("#loseMusic")
let cheer = document.querySelector("#cheer")

let poke1El = document.querySelector("#poke1")
let poke2El = document.querySelector("#poke2")

let info3El = document.querySelector("#info3");
let info2El = document.querySelector("#info2");
let info1El = document.querySelector("#info1");
let infoEl = document.querySelector("#info");


let fightEl = document.querySelector("#fight")
let runEl = document.querySelector("#run")
let switchEl = document.querySelector("#switch")
let move1El = document.querySelector("#move1")
let move2El = document.querySelector("#move2")
let move3El = document.querySelector("#move3")
let move4El = document.querySelector("#move4")

let pokeName1El = document.querySelector("#pokeName1")
let pokeName2El = document.querySelector("#pokeName2")

let HPenDinEl = document.querySelector("#HP-enDin");
let HPMotstanderEl = document.querySelector("#HPMotstander");

let poke1IMGEl = document.querySelector(".poke1IMG")
let poke2IMGEl = document.querySelector(".poke2IMG")

let pokeball2El = document.querySelector("#pokeball2")
let pokeball4El = document.querySelector("#pokeball4")


let loadingEL = document.querySelector(".loading")
let loadingTextEL = document.querySelector(".loadingText")

loadingTextEL.style.padding = "20px"

let pickedmoveJonas = {
    type: "",
    name: "",
    power: 0
}
let pickedmoveAnton = {
    type: "",
    name: "",
    power: 0
}








//pokemonFunc()

async function execute() { //resten av kodene
    await pokemonFunc() //pokemonFunc() kjøres her

    loadingEL.remove()
    loadingTextEL.remove()


    pokeName1El.innerHTML = trainerJonas[0].pokemon1.name
    pokeName2El.innerHTML = trainerAnton[0].pokemon1.name

    HPenDinEl.innerHTML = trainerJonas[0].pokemon1.HP
    HPMotstanderEl.innerHTML = trainerAnton[0].pokemon1.HP

    trainerAnton[0].activePokemon = trainerAnton[0].pokemon1
    trainerJonas[0].activePokemon = trainerJonas[0].pokemon1

    console.log(trainerJonas)
    console.log(trainerAnton)

    poke1IMGEl.src = trainerAnton[0].activePokemon.img
    poke2IMGEl.src = trainerJonas[0].activePokemon.img

    infoEl.innerHTML = "hva skal " + trainerJonas[0].activePokemon.name + " gjøre?"

    fightEl.addEventListener("click", fight)
    runEl.addEventListener("click", run)
    switchEl.addEventListener("click", switchPokemonIkkeDod)
    move1El.addEventListener("click", Move1Done);
    move2El.addEventListener("click", Move2Done);
    move3El.addEventListener("click", Move3Done);
    move4El.addEventListener("click", Move4Done);

    Move1Navn = trainerJonas[0].activePokemon.moves.move1.name;
    Move2Navn = trainerJonas[0].activePokemon.moves.move2.name;
    Move3Navn = trainerJonas[0].activePokemon.moves.move3.name;
    Move4Navn = trainerJonas[0].activePokemon.moves.move4.name;


    Move1Power = trainerJonas[0].activePokemon.moves.move1.power;
    Move2Power = trainerJonas[0].activePokemon.moves.move2.power;
    Move3Power = trainerJonas[0].activePokemon.moves.move3.power;
    Move4Power = trainerJonas[0].activePokemon.moves.move4.power;

    let Move1type = trainerJonas[0].activePokemon.moves.move1.type;
    let Move2type = trainerJonas[0].activePokemon.moves.move2.type;
    let Move3type = trainerJonas[0].activePokemon.moves.move3.type;
    let Move4type = trainerJonas[0].activePokemon.moves.move4.type;

    info3El.style.display = "none";
    function fight() {
        if (music == 0) {
            bakgrunnsMusikk.play()
            music = 1
        }
        move1El.innerHTML = Move1Navn + "<br>" + Move1type + "<br>" + Move1Power;
        move2El.innerHTML = Move2Navn + "<br>" + Move2type + "<br>" + Move2Power;
        move3El.innerHTML = Move3Navn + "<br>" + Move3type + "<br>" + Move3Power;
        move4El.innerHTML = Move4Navn + "<br>" + Move4type + "<br>" + Move4Power;


        fightEl.style.display = "none";
        runEl.style.display = "none"

        move1El.style.display = "block";
        move2El.style.display = "block";
        move3El.style.display = "block";
        move4El.style.display = "block";
    }

    function Move1Done() {
        pickedmoveJonas = trainerJonas[0].activePokemon.moves.move1

        move1El.style.display = "none";
        move2El.style.display = "none";
        move3El.style.display = "none";
        move4El.style.display = "none";
        info3El.style.display = "block";
        nyRunde()

        setTimeout(function () {
            fightEl.style.display = "block";
            runEl.style.display = "block";
            info3El.style.display = "none";
        }, 1500);
        
    }
    function Move2Done() {
        pickedmoveJonas = trainerJonas[0].activePokemon.moves.move2
        move1El.style.display = "none";
        move2El.style.display = "none";
        move3El.style.display = "none";
        move4El.style.display = "none";
        info3El.style.display = "block";
        nyRunde()


        setTimeout(function () {
            fightEl.style.display = "block";
            runEl.style.display = "block";
            info3El.style.display = "none";
        }, 1500);
        
    }
    function Move3Done() {
        pickedmoveJonas = trainerJonas[0].activePokemon.moves.move3

        move1El.style.display = "none";
        move2El.style.display = "none";
        move3El.style.display = "none";
        move4El.style.display = "none";
        info3El.style.display = "block";
        nyRunde()
        setTimeout(function () {
            fightEl.style.display = "block";
            runEl.style.display = "block";
            info3El.style.display = "none";
        }, 1500);
        
    }
    function Move4Done() {

        pickedmoveJonas = trainerJonas[0].activePokemon.moves.move4

        move1El.style.display = "none";
        move2El.style.display = "none";
        move3El.style.display = "none";
        move4El.style.display = "none";
        info3El.style.display = "block";
        nyRunde()
        setTimeout(function () {
            fightEl.style.display = "block";
            runEl.style.display = "block";
            info3El.style.display = "none";
        }, 1500);
        
    }

    function run() {
        window.location = "hovedsiden.html"
    }
}
function nyRunde() {

    randomMove = Math.floor((Math.random() * 4) + 1) // her velger motstander (AI) et tilfeldig angrep
    if (randomMove == 1) {
        pickedmoveAnton = trainerAnton[0].activePokemon.moves.move1
    }
    else if (randomMove == 2) {
        pickedmoveAnton = trainerAnton[0].activePokemon.moves.move2
    }
    else if (randomMove == 3) {
        pickedmoveAnton = trainerAnton[0].activePokemon.moves.move3
    }
    else if (randomMove == 4) {
        pickedmoveAnton = trainerAnton[0].activePokemon.moves.move4
    }

    // kalkulering av skade som hver pokemon skal gjøre, med beregning om hvem som skal gjøre angrepet først basert på speed
    // første if er om spilleren (Jonas) er raskere enn AI (Anton). Det motsatte tas hånd om under (else if)
    if (trainerAnton[0].activePokemon.speed < trainerJonas[0].activePokemon.speed) {

        if (trainerJonas[0].activePokemon.HP > 0) {
            if (Math.random() < 0.2) {
                critical = 1.5
            }
            else {
                critical = 1
            }
            random = Math.random() * 0.15 + 0.85

            if (trainerJonas[0].activePokemon.type1 == pickedmoveJonas.type || trainerJonas[0].activePokemon.type2 == pickedmoveJonas.type) {
                STAB = 1.5
            }
            else {
                STAB = 1
            }

            altAnnet = critical * random * STAB * typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2)
            midlertidigHealth = trainerAnton[0].activePokemon.HP - (((((2 * trainerJonas[0].activePokemon.level) / 5 + 2) * pickedmoveJonas.power * (trainerJonas[0].activePokemon.attack / trainerAnton[0].activePokemon.defense)) / 50) + 2) * altAnnet

            trainerAnton[0].activePokemon.HP = Math.floor(midlertidigHealth)
            if (typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2) == 0) {
                info3El.innerHTML = "It had no effect" + "<br>" + trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
            else if (typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2) == 1 / 4) {
                info3El.innerHTML = "Not very effective" + "<br>" + trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
            else if (typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2) == 1 / 2) {
                info3El.innerHTML = "Not very effective" + "<br>" + trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
            else if (typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2) == 2) {
                info3El.innerHTML = "Super effective" + "<br>" + trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
            else if (typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2) == 4) {
                info3El.innerHTML = "Super effective" + "<br>" + trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
            else {
                info3El.innerHTML = trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }

        }
        else {
            switchPokemon("Jonas", 1)
        }

        if (trainerAnton[0].activePokemon.HP > 0) {
            if (Math.random < 0.2) {
                critical = 1.5
            }
            else {
                critical = 1
            }
            random = Math.random() * 0.15 + 0.85

            if (trainerAnton[0].activePokemon.type1 == pickedmoveAnton.type || trainerAnton[0].activePokemon.type2 == pickedmoveAnton.type) {
                STAB = 1.5
            }
            else {
                STAB = 1
            }

            altAnnet = critical * random * STAB * typeAdvantage(pickedmoveAnton.type, trainerJonas[0].activePokemon.type1, trainerJonas[0].activePokemon.type2)
            midlertidigHealth = trainerJonas[0].activePokemon.HP - (((((2 * trainerJonas[0].activePokemon.level) / 5 + 2) * pickedmoveAnton.power * (trainerAnton[0].activePokemon.attack / trainerJonas[0].activePokemon.defense)) / 50) + 2) * altAnnet
            trainerJonas[0].activePokemon.HP = Math.floor(midlertidigHealth)
        }
        else {
            switchPokemon("Anton", 1)
        }
        if (trainerJonas[0].activePokemon.HP < 0) {
            switchPokemon("Jonas", 1)
        }
    }

    else if (trainerAnton[0].activePokemon.speed > trainerJonas[0].activePokemon.speed) {
        if (trainerAnton[0].activePokemon.HP > 0) {
            if (Math.random < 0.2) {
                critical = 1.5
            }
            else {
                critical = 1
            }
            random = Math.random() * 0.15 + 0.85

            if (trainerAnton[0].activePokemon.type1 == pickedmoveAnton.type || trainerAnton[0].activePokemon.type2 == pickedmoveAnton.type) {
                STAB = 1.5
            }
            else {
                STAB = 1
            }

            altAnnet = critical * random * STAB * typeAdvantage(pickedmoveAnton.type, trainerJonas[0].activePokemon.type1, trainerJonas[0].activePokemon.type2)
            midlertidigHealth = trainerJonas[0].activePokemon.HP - (((((2 * trainerJonas[0].activePokemon.level) / 5 + 2) * pickedmoveAnton.power * (trainerAnton[0].activePokemon.attack / trainerJonas[0].activePokemon.defense)) / 50) + 2) * altAnnet
            trainerJonas[0].activePokemon.HP = Math.floor(midlertidigHealth)
        }
        else {
            switchPokemon("Anton", 1)
        }

        if (trainerJonas[0].activePokemon.HP > 0) {
            if (Math.random() < 0.2) {
                critical = 1.5
            }
            else {
                critical = 1
            }
            random = Math.random() * 0.15 + 0.85

            if (trainerJonas[0].activePokemon.type1 == pickedmoveJonas.type || trainerJonas[0].activePokemon.type2 == pickedmoveJonas.type) {
                STAB = 1.5
            }
            else {
                STAB = 1
            }

            altAnnet = critical * random * STAB * typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2)
            midlertidigHealth = trainerAnton[0].activePokemon.HP - (((((2 * trainerJonas[0].activePokemon.level) / 5 + 2) * pickedmoveJonas.power * (trainerJonas[0].activePokemon.attack / trainerAnton[0].activePokemon.defense)) / 50) + 2) * altAnnet


            trainerAnton[0].activePokemon.HP = Math.floor(midlertidigHealth)
            if (typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2) == 0) {
                info3El.innerHTML = "It had no effect" + "<br>" + trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
            else if (typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2) == 1 / 4) {
                info3El.innerHTML = "Not very effective" + "<br>" + trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
            else if (typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2) == 1 / 2) {
                info3El.innerHTML = "Not very effective" + "<br>" + trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
            else if (typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2) == 2) {
                info3El.innerHTML = "Super effective" + "<br>" + trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
            else if (typeAdvantage(pickedmoveJonas.type, trainerAnton[0].activePokemon.type1, trainerAnton[0].activePokemon.type2) == 4) {
                info3El.innerHTML = "Super effective" + "<br>" + trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
            else {
                info3El.innerHTML = trainerAnton[0].activePokemon.name + " brukte " + pickedmoveAnton.name
            }
        }
        else {
            switchPokemon("Jonas", 1)
        }

        if (trainerAnton[0].activePokemon.HP < 0) {
            switchPokemon("Anton", 1)
        }
    }

    if (trainerJonas[0].activePokemon.HP <= 0){
        HPenDinEl.innerHTML = 0 //trainerJonas[0].activePokemon.HP
    }
    else{HPenDinEl.innerHTML = trainerJonas[0].activePokemon.HP}

    if (trainerAnton[0].activePokemon.HP <= 0){
        HPMotstanderEl.innerHTML = 0 //trainerAnton[0].activePokemon.HP
    }
    else{HPMotstanderEl.innerHTML = trainerAnton[0].activePokemon.HP}
    
}

// videre følger et objekt med informasjon om type-effektivitet som ulike sorter av pokemon har
let types = {
    Bug: {
        Bug: 1,
        Dark: 1,
        Dragon: 1,
        Electric: 1,
        Fairy: 1,
        Fighting: 0.5,
        Fire: 2,
        Flying: 2,
        Ghost: 1,
        Grass: 0.5,
        Ground: 0.5,
        Ice: 1,
        Normal: 1,
        Poison: 1,
        Psychic: 1,
        Rock: 2,
        Steel: 1,
        Water: 1
    },
    Dark: {
        Bug: 2,
        Dark: 0.5,
        Dragon: 1,
        Electric: 1,
        Fairy: 2,
        Fighting: 2,
        Fire: 1,
        Flying: 1,
        Ghost: 0.5,
        Grass: 1,
        Ground: 1,
        Ice: 1,
        Normal: 1,
        Poison: 1,
        Psychic: 0,
        Rock: 1,
        Steel: 1,
        Water: 1
    },
    Dragon: {
        Bug: 1,
        Dark: 1,
        Dragon: 2,
        Electric: 0.5,
        Fairy: 2,
        Fighting: 1,
        Fire: 0.5,
        Flying: 1,
        Ghost: 1,
        Grass: 0.5,
        Ground: 1,
        Ice: 2,
        Normal: 1,
        Poison: 1,
        Psychic: 1,
        Rock: 1,
        Steel: 1,
        Water: 0.5
    },
    Electric: {
        Bug: 1,
        Dark: 1,
        Dragon: 1,
        Electric: 0.5,
        Fairy: 1,
        Fighting: 1,
        Fire: 1,
        Flying: 0.5,
        Ghost: 1,
        Grass: 1,
        Ground: 2,
        Ice: 1,
        Normal: 1,
        Poison: 1,
        Psychic: 1,
        Rock: 1,
        Steel: 0.5,
        Water: 1
    },
    Fairy: {
        Bug: 0.5,
        Dark: 0.5,
        Dragon: 0,
        Electric: 1,
        Fairy: 1,
        Fighting: 0.5,
        Fire: 1,
        Flying: 1,
        Ghost: 1,
        Grass: 1,
        Ground: 1,
        Ice: 1,
        Normal: 1,
        Poison: 2,
        Psychic: 1,
        Rock: 1,
        Steel: 2,
        Water: 1
    },
    Fighting: {
        Bug: 0.5,
        Dark: 0.5,
        Dragon: 1,
        Electric: 1,
        Fairy: 2,
        Fighting: 1,
        Fire: 1,
        Flying: 2,
        Ghost: 1,
        Grass: 1,
        Ground: 1,
        Ice: 1,
        Normal: 1,
        Poison: 1,
        Psychic: 2,
        Rock: 0.5,
        Steel: 1,
        Water: 1
    },
    Fire: {
        Bug: 0.5,
        Dark: 1,
        Dragon: 1,
        Electric: 1,
        Fairy: 0.5,
        Fighting: 1,
        Fire: 0.5,
        Flying: 1,
        Ghost: 1,
        Grass: 0.5,
        Ground: 2,
        Ice: 0.5,
        Normal: 1,
        Poison: 1,
        Psychic: 1,
        Rock: 2,
        Steel: 0.5,
        Water: 2
    },
    Flying: {
        Bug: 0.5,
        Dark: 1,
        Dragon: 1,
        Electric: 2,
        Fairy: 1,
        Fighting: 0.5,
        Fire: 1,
        Flying: 1,
        Ghost: 1,
        Grass: 0.5,
        Ground: 0,
        Ice: 2,
        Normal: 1,
        Poison: 1,
        Psychic: 1,
        Rock: 2,
        Steel: 1,
        Water: 1
    },
    Ghost: {
        Bug: 0.5,
        Dark: 2,
        Dragon: 1,
        Electric: 1,
        Fairy: 1,
        Fighting: 0,
        Fire: 1,
        Flying: 1,
        Ghost: 2,
        Grass: 1,
        Ground: 1,
        Ice: 1,
        Normal: 0,
        Poison: 0.5,
        Psychic: 1,
        Rock: 1,
        Steel: 1,
        Water: 1
    },
    Grass: {
        Bug: 2,
        Dark: 1,
        Dragon: 1,
        Electric: 0.5,
        Fairy: 1,
        Fighting: 1,
        Fire: 2,
        Flying: 2,
        Ghost: 1,
        Grass: 0.5,
        Ground: 0.5,
        Ice: 2,
        Normal: 1,
        Poison: 2,
        Psychic: 1,
        Rock: 1,
        Steel: 1,
        Water: 0.5
    },
    Ground: {
        Bug: 1,
        Dark: 1,
        Dragon: 1,
        Electric: 0,
        Fairy: 1,
        Fighting: 1,
        Fire: 1,
        Flying: 1,
        Ghost: 1,
        Grass: 2,
        Ground: 1,
        Ice: 2,
        Normal: 1,
        Poison: 0.5,
        Psychic: 1,
        Rock: 0.5,
        Steel: 1,
        Water: 2
    },
    Ice: {
        Bug: 1,
        Dark: 1,
        Dragon: 1,
        Electric: 1,
        Fairy: 1,
        Fighting: 2,
        Fire: 2,
        Flying: 1,
        Ghost: 1,
        Grass: 1,
        Ground: 1,
        Ice: 0.5,
        Normal: 1,
        Poison: 1,
        Psychic: 1,
        Rock: 2,
        Steel: 2,
        Water: 1
    },
    Normal: {
        Bug: 1,
        Dark: 1,
        Dragon: 1,
        Electric: 1,
        Fairy: 1,
        Fighting: 2,
        Fire: 1,
        Flying: 1,
        Ghost: 0,
        Grass: 1,
        Ground: 1,
        Ice: 1,
        Normal: 1,
        Poison: 1,
        Psychic: 1,
        Rock: 1,
        Steel: 1,
        Water: 1
    },
    Poison: {
        Bug: 0.5,
        Dark: 1,
        Dragon: 1,
        Electric: 1,
        Fairy: 0.5,
        Fighting: 0.5,
        Fire: 1,
        Flying: 1,
        Ghost: 1,
        Grass: 0.5,
        Ground: 2,
        Ice: 1,
        Normal: 1,
        Poison: 0.5,
        Psychic: 2,
        Rock: 1,
        Steel: 1,
        Water: 1
    },
    Psychic: {
        Bug: 2,
        Dark: 2,
        Dragon: 1,
        Electric: 1,
        Fairy: 1,
        Fighting: 0.5,
        Fire: 1,
        Flying: 1,
        Ghost: 2,
        Grass: 1,
        Ground: 1,
        Ice: 1,
        Normal: 1,
        Poison: 1,
        Psychic: 0.5,
        Rock: 1,
        Steel: 1,
        Water: 1
    },
    Rock: {
        Bug: 1,
        Dark: 1,
        Dragon: 1,
        Electric: 1,
        Fairy: 1,
        Fighting: 2,
        Fire: 0.5,
        Flying: 0.5,
        Ghost: 1,
        Grass: 2,
        Ground: 2,
        Ice: 1,
        Normal: 0.5,
        Poison: 0.5,
        Psychic: 1,
        Rock: 1,
        Steel: 2,
        Water: 2
    },
    Steel: {
        Bug: 0.5,
        Dark: 1,
        Dragon: 0.5,
        Electric: 1,
        Fairy: 0.5,
        Fighting: 2,
        Fire: 2,
        Flying: 0.5,
        Ghost: 1,
        Grass: 0.5,
        Ground: 2,
        Ice: 0.5,
        Normal: 0.5,
        Poison: 0,
        Psychic: 0.5,
        Rock: 0.5,
        Steel: 0.5,
        Water: 1
    },
    Water: {
        Bug: 1,
        Dark: 1,
        Dragon: 1,
        Electric: 2,
        Fairy: 1,
        Fighting: 1,
        Fire: 0.5,
        Flying: 1,
        Ghost: 1,
        Grass: 2,
        Ground: 1,
        Ice: 0.5,
        Normal: 1,
        Poison: 1,
        Psychic: 1,
        Rock: 1,
        Steel: 0.5,
        Water: 0.5
    }
}

let moveType = ""
let pokeType1 = ""
let pokeType2 = ""
let typing1 = 0
let typing2 = 0

function typeAdvantage(moveType, pokeType1, pokeType2) {
    moveType = moveType.charAt(0).toUpperCase() + moveType.slice(1)
    pokeType1 = pokeType1.charAt(0).toUpperCase() + pokeType1.slice(1)
    pokeType2 = pokeType2.charAt(0).toUpperCase() + pokeType2.slice(1)
    let typing1 = types[pokeType1][moveType]

    if (pokeType2 !== "") {
        let typing2 = types[pokeType2][moveType]
        return typing1 * typing2;
    }
    else {
        return typing1;
    }
}

let altAnnet = 0
let critical = 1
let random = 1
let STAB = 1
let midlertidigHealth = 0

// funksjon som håndterer bytte av pokemon, da hver spiller begynner spillet med 2 pokemon
// variabelen dodBool brukes til å avgjøre om den pokemonen. variabelen "navn" brukes for å sjekke hvilken av spilleren som funksjonen skal kjøres for
// Der Jonas er spilleren selv, og Anton er navnet for AI-en.



function switchPokemonIkkeDod() {
    //funksjonen skal gjøre det mulig å bytte ut hvilken pokemon man har som aktiv, men kun dersom den andre pokemonen ikke er død
    console.log("")
    let aktiv = trainerJonas[0].activePokemon
    console.log(aktiv)
    let ikkeAktiv = null

     //avgjør hvilken av pokemon som ikke er den aktive
    if (aktiv == trainerJonas[0].pokemon1){ikkeAktiv = trainerJonas[0].pokemon2}
    else {ikkeAktiv = trainerJonas[0].pokemon1}

    let ikkeAktivHP = ikkeAktiv.HP
    console.log(ikkeAktivHP)
    
    if (Number(ikkeAktivHP) > 0){
        switchPokemon("Jonas", 0)
    }
    

}


function switchPokemon(navn, dodBool) {
    //console.log(navn, dodBool)
    if (navn == "Jonas") {
        if (dodBool == 1) {
            poke1IMGEl.classList.add("pokemonDead")
            pokeball4El.src = "pokeballGray.png"
            setTimeout(() => {
            }, 500);
            poke1IMGEl.classList.remove("pokemonDead")
        }

        let midlertidigLagring = trainerJonas[0].activePokemon
        if (trainerJonas[0].activePokemon.name == trainerJonas[0].pokemon1.name) {
            trainerJonas[0].activePokemon = trainerJonas[0].pokemon2
            trainerJonas[0].pokemon1 = midlertidigLagring

        }
        else {
            trainerJonas[0].activePokemon = trainerJonas[0].pokemon1
            trainerJonas[0].pokemon2 = midlertidigLagring
        }
    }
    else if (navn == "Anton") {
        poke2IMGEl.classList.add("pokemonDead")
        pokeball2El.src = "pokeballGray.png"
        setTimeout(() => {

        }, 500);
        poke2IMGEl.classList.remove("pokemonDead")
        let midlertidigLagring = trainerAnton[0].activePokemon
        if (trainerAnton[0].activePokemon.name == trainerAnton[0].pokemon1.name) {
            trainerAnton[0].activePokemon = trainerAnton[0].pokemon2
            trainerAnton[0].pokemon1 = midlertidigLagring
        }
        else {
            trainerAnton[0].activePokemon = trainerAnton[0].pokemon1
            trainerAnton[0].pokemon2 = midlertidigLagring
        }

    }


    if ((trainerAnton[0].pokemon1.HP <= 0 && trainerAnton[0].pokemon2.HP <= 0) || (trainerJonas[0].pokemon1.HP <= 0 && trainerJonas[0].pokemon2.HP <= 0)) {
        if (trainerAnton[0].pokemon1.HP <= 0 && trainerAnton[0].pokemon2.HP <= 0) {
            bakgrunnsMusikk.pause()
            cheer.play()
            poke1IMGEl.classList.add("pokemonDead")
            info3El.innerHTML = "Gratulerer! Du vant!"
            setTimeout(function () {
                window.location = "hovedsiden.html"
            }, 2500);
        }
        else if (trainerJonas[0].pokemon1.HP <= 0 && trainerJonas[0].pokemon2.HP <= 0) {
            bakgrunnsMusikk.pause()
            losingMusic.play()
            poke2IMGEl.classList.add("pokemonDead")
            info3El.innerHTML = "Dessverre, du tapte."
            setTimeout(function () {
                window.location = "hovedsiden.html"
            }, 2500);
        }
    }
    else {
        //oppdatering av gjeldende verdier for den nå byttede aktive pokemon
        console.log(trainerJonas[0].activePokemon.name)
        Move1type = trainerJonas[0].activePokemon.moves.move1.type
        Move2type = trainerJonas[0].activePokemon.moves.move2.type
        Move3type = trainerJonas[0].activePokemon.moves.move3.type
        Move4type = trainerJonas[0].activePokemon.moves.move4.type

        Move1Navn = trainerJonas[0].activePokemon.moves.move1.name;
        Move2Navn = trainerJonas[0].activePokemon.moves.move2.name;
        Move3Navn = trainerJonas[0].activePokemon.moves.move3.name;
        Move4Navn = trainerJonas[0].activePokemon.moves.move4.name;

        Move1Power = trainerJonas[0].activePokemon.moves.move1.power;
        Move2Power = trainerJonas[0].activePokemon.moves.move2.power;
        Move3Power = trainerJonas[0].activePokemon.moves.move3.power;
        Move4Power = trainerJonas[0].activePokemon.moves.move4.power;

        poke1IMGEl.src = trainerAnton[0].activePokemon.img
        poke2IMGEl.src = trainerJonas[0].activePokemon.img

        pokeName1El.innerHTML = trainerJonas[0].activePokemon.name
        pokeName2El.innerHTML = trainerAnton[0].activePokemon.name

        HPenDinEl.innerHTML = trainerJonas[0].activePokemon.HP
        HPMotstanderEl.innerHTML = trainerAnton[0].activePokemon.HP

        infoEl.innerHTML = "hva skal " + trainerJonas[0].activePokemon.name + " gjøre"
    }
}

execute()