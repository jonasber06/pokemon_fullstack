let pokemonArray = []

let typesArray = []
let movesArray = [] //arrays til senere lagring
let statsArray = []

let trainerJonas = []
let trainerAnton = []





pokemonArray.push("#")
typesArray.push("#")
statsArray.push("#")
movesArray.push("#") //fyller første (nullte) plass. for enkelhets skyld

let pokemonFunc = async () => {
    
    for (i = 0; i < 4; i++) {
        let pokemonTall = Math.floor(Math.random() * 151) + 1
        while (pokemonTall === 132) {
            pokemonTall = Math.floor(Math.random() * 151) + 1
        } //132 er ditto, som ikke har noen angrep som gjør skade

        let pokemon = []
        let pokemonMove = [] //tomme arrays, skal fylles med json

        const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonTall + "/"
        let data = await fetch(url)
        let json = await data.json()
        pokemon = await json //henter ut informasjon om pokemonen, gir dataen til pokemon arrayen




        //types UFERDIG (nærmer seg ferdig)
        let midlertidig_types = []
        for (type = 0; type < pokemon.types.length; type++) {
            let typeName = pokemon.types[type].type.name
            midlertidig_types.push(typeName)
            if (pokemon.types.length === 1) {
                midlertidig_types.push("")
            }
        }

        //stats UFERDIG (nærmer seg ferdig)
        let midlertidig_stats = []
        for (let statTall = 0; statTall < pokemon.stats.length; statTall++) {
            let statObjekt = await {
                stat: pokemon.stats[statTall].stat.name,
                value: pokemon.stats[statTall].base_stat,
                pName: pokemon.name,
            }
            midlertidig_stats.push(statObjekt)
        }

        //moves FERDIG (kanskje)

        let midlertidig_moves = {}

        for (let moves = 0; moves < 4; moves++) {
            let moveNumber = Math.floor(Math.random() * pokemon.moves.length) //velger et tilfeldig trekk fra listen
            let movesObjekt = {}

            let urlMove = pokemon.moves[moveNumber].move.url
            let dataMove = await fetch(urlMove)
            let jsonMove = await dataMove.json()
            pokemonMove = jsonMove  //henter ut informasjon om det valgte trekket.


            //blokken sjekker om trekket har "power". Dersom det ikke har det velges det et nytt tilfeldig trekk frem til programmet har et trekk med power
            //Det gjøres fordi det finnes trekk i registeret som ikke har power, men som har andre formål i det originale spillet. Disse unngås i dette programmet.
            while (pokemonMove.power === null || pokemonMove.power === 0) {
                moveNumber = Math.floor(Math.random() * pokemon.moves.length)
                let urlMove = pokemon.moves[moveNumber].move.url
                let dataMove = await fetch(urlMove)
                let jsonMove = await dataMove.json()
                pokemonMove = jsonMove
            } 
            
            
            movesObjekt = {
                name: pokemon.moves[moveNumber].move.name,
                power: pokemonMove.power,
                type: pokemonMove.type.name,
                pName: pokemon.name
            }

            midlertidig_moves['move'+String(moves + 1)] = movesObjekt
        }

        pokemonObjekt = {
            name: pokemon.name,
            img_front: pokemon.sprites.front_default,
            img_back: pokemon.sprites.back_default,
            types: midlertidig_types,
            stats: midlertidig_stats,
            angrep: midlertidig_moves

        }

        pokemonArray.push(pokemonObjekt)
    }

    console.log(pokemonArray)
    console.log("")
    //innsetting i arrays GJENSTÅR, fungerer kanskje ikke som ønsket enda

    //spillerens karakter
    trainerJonas = [
        {
            pokemon1: {
                name: pokemonArray[1].name,
                type1: pokemonArray[1].types[0],
                type2: pokemonArray[1].types[1],
                level: 1,
                iKamp: true, //den "første" pokemonen settes til å være i kamp fra start. Byttes mellom de to når den første dør eller når spiller ønsker
                moves: pokemonArray[1].angrep,
                HP: pokemonArray[1].stats[0].value,
                attack: Math.floor((pokemonArray[1].stats[1].value + pokemonArray[1].stats[3].value) / 2), //gj.snitt av vanlig og spesial attack
                defense: Math.floor((pokemonArray[1].stats[2].value + pokemonArray[1].stats[4].value) / 2),
                speed: pokemonArray[1].stats[5].value,
                img: pokemonArray[1].img_back
            },

            pokemon2: {
                name: pokemonArray[2].name,
                type1: pokemonArray[2].types[0],
                type2: pokemonArray[2].types[1],
                level: 1,
                iKamp: false,
                moves: pokemonArray[2].angrep,
                HP: pokemonArray[2].stats[0].value,
                attack: Math.floor((pokemonArray[2].stats[1].value + pokemonArray[2].stats[3].value) / 2), //gj.snitt av vanlig og spesial attack
                defense: Math.floor((pokemonArray[2].stats[2].value + pokemonArray[2].stats[4].value) / 2),
                speed: pokemonArray[2].stats[5].value,
                img: pokemonArray[2].img_back
            },
            activePokemon: null
        }
    ]

    //motstander, AI
    trainerAnton = [
        {
            pokemon1: {
                name: pokemonArray[3].name,
                type1: pokemonArray[3].types[0],
                type2: pokemonArray[3].types[1],
                level: 1,
                iKamp: true, //den "første" pokemonen settes til å være i kamp fra start. Byttes mellom de to når den første dør eller når spiller ønsker
                moves: pokemonArray[3].angrep,
                HP: pokemonArray[3].stats[0].value,
                attack: Math.floor((pokemonArray[3].stats[1].value + pokemonArray[3].stats[3].value) / 2), //gj.snitt av vanlig og spesial attack
                defense: Math.floor((pokemonArray[3].stats[2].value + pokemonArray[3].stats[4].value) / 2),
                speed: pokemonArray[3].stats[5].value,
                img: pokemonArray[3].img_front
            },
            
            pokemon2: {
                name: pokemonArray[4].name,
                type1: pokemonArray[4].types[0],
                type2: pokemonArray[4].types[1],
                level: 1,
                iKamp: false, //den "første" pokemonen settes til å være i kamp fra start. Byttes mellom de to når den første dør eller når spiller ønsker
                moves: pokemonArray[4].angrep,
                HP: pokemonArray[4].stats[0].value,
                attack: Math.floor((pokemonArray[4].stats[1].value + pokemonArray[4].stats[3].value) / 2), //gj.snitt av vanlig og spesial attack
                defense: Math.floor((pokemonArray[4].stats[2].value + pokemonArray[4].stats[4].value) / 2),
                speed: pokemonArray[4].stats[5].value,
                img: pokemonArray[4].img_front
            },
            activePokemon: null
        }
    ]
    console.log(trainerJonas)
    console.log(trainerAnton)

    console.log("pokefunc ferdig")
    console.log("oppdatert versjon")
    console.log()
}
