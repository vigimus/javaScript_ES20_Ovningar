// Övning 1: Vad tror du är det minsta värdet av MIN_SAFE_INTEGER är?
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
//Jag tror det minsta värdet är -9007199254740991

// Övning 2: Varför ger följande kod ett felmeddelande? Och hur kan du fixa det?
3 + 4 + 1n
//Ett exempel skulle kunna vara
//Istället
3n + 4n + 1n 

// Övning 3: Rengör nedan kod med "optional chaining"
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon?.andrei_pokemon.raichu && will_pokemon 
    ?.will_pokemon.pikachu?.will_pokemon.pikachu.friend 
    ?.will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


// Övning 4: Vad blir följande outputs för något?
console.log(false ?? 'hellooo')
//Blir: false
console.log(null ?? 'hellooo')
//Blir: hellooo
console.log(null || 'hellooo')
//Blir: hellooo
console.log((false || null) ?? 'hellooo')
//Blir: hellooo
console.log(null ?? (false || 'hellooo'))
//Blir: hellooo