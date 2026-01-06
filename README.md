# pokemon_fullstack
I dette prosjektet var målet å lage en kamp-simulator for Pokemon, som fra den populære videospillserien

Prosjektet ble påbegynt i 2023 for en skoleoppgave, men jeg har siden videreutviklet det på noen områder, og velger derfor å inkludere det i min egen GitHub. Men likevel skal jeg ikke ha all æren for hele spillet.

Spillet er kodet med et samspill av HTML, CSS og Javascript. Det fungerer ved at det hentes informasjon om ulike pokemons fra nettstedet https://pokeapi.co/, der informasjon om pokemonens type, ulike angrep, stats, bilde, osv. er med. 
Denne informasjonen brukes så i en skade-kalkulator, som avgjør basert på ulike type-fordeler hvor mye skade et angrep skal gjøre. 

Å teste spillet skal være enkelt. Med samme filoppsett som i denne repoen skal man få den fulle opplevelsen ved å kjøre filen "hovedsiden.html", som har knapper som fører til de ulike sidene som spillet består av.

Når man er inne i spillet og det er ferdig lastet skal man ha 3 valgmuligheter
1. Fight, som er knappen for å kjempe mot motstanderen. Da vil man få ytterligere 4 valgmuligheter, som er de 4 angrepene din pokemon har. Disse kan fritt velges mellom, og det vil komme en beskjed som sier om angrepet er effektivt eller ikke.
2. Run, at man "stikker" fra kampen. Da vil man returneres til startsiden.
3. Switch, denne knappen gjør det mulig å bytte mellom de to pokemonene man har. Dette fungerer kun dersom den andre pokemonen er levende, og man vil kunne velge helt fritt når man ønsker å bytte mellom de to utover dette.

Spillet er ferdig når begge pokemon for enten spilleren eller motstanderen er døde. Det vil spilles en lyd og komme en beskjed om utfallet, før man returneres til startsiden igjen. 




