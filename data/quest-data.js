// quests[0].choices[0].description; ==> 'negotiate with them'


const Charmander = {
    id: 'charmander',
    title: 'Wild Charmander',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '',
    description: `
        You meet a wild Charmander, you dont have one in your pokedex. You always wanted to capture one, here is your chance.
    `,
    choices: [{
        id: 'run',
        description: 'Flee the scene before you get burnt',
        result: `
           You safely escaped, you get to keep your HP and live to see another day
        `,
        hp: 0,
        gold: 0
    }, {
        id: 'fight',
        description: 'Fight Charmander',
        result: `
           You weaken the pokemon just enough to capture it! Congratulations you have a new pokemon in your Pokedex
        `,
        hp: -5,
        gold: 0
    }, {
        id: 'feed',
        description: 'You are not in a capturing mood. Instead you decide to feed the cute pokemon',
        result: `
            The charmander ate all of your food, evolved into a charmeleon and burnt you and all your pokemon. and you are out of 100 gold, that what it will cost to replace your food.
        `,
        hp: -50,
        gold: -100
    }]
};

const Charmeleon = {
    id: 'Charmeleon',
    title: 'Wild Charmeleon',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '',
    description: `
        You meet a wild Charmeleon, you dont have one in your pokedex. You always wanted to capture one, here is your chance.
    `,
    choices: [{
        id: 'run',
        description: 'Flee the scene before you get burnt',
        result: `
           You safely escaped, you get to keep your HP and live to see another day
        `,
        hp: 0,
        gold: 0
    }, {
        id: 'fight',
        description: 'Fight Charmeleon',
        result: `
           You weaken the pokemon just enough to capture it! Congratulations you have a new pokemon in your Pokedex. However you have spent all of your food and need to replace it all.
        `,
        hp: -9,
        gold: -50,
    }, {
        id: 'feed',
        description: 'You are not in a capturing mood. Instead you decide to feed the cute pokemon',
        result: `
            The Charmeleon ate all of your food, evolved into a Charizard and burnt you and all your pokemon. and you are out of 300 gold, that what it will cost to replace your food. that was a close call.
        `,
        hp: -49,
        gold: -300
    }]
};


const Charizard = {
    id: 'Charizard',
    title: 'Wild Charizard',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '',
    description: `
        You meet a wild Charizard, you dont have one in your pokedex. You always wanted to capture one, here is your chance.
    `,
    choices: [{
        id: 'run',
        description: 'Flee the scene before you get burnt',
        result: `
           You safely escaped, you get to keep your HP and live to see another day 
        `,
        hp: 0,
        gold: 0
    }, {
        id: 'fight',
        description: 'Fight Charmander',
        result: `
           You weaken the pokemon just enough to capture it! Congratulations you have a new pokemon in your Pokedex
        `,
        hp: -5,
        gold: 0
    }, {
        id: 'feed',
        description: 'You are not in a capturing mood. JK you cant catch it because none of your pokemon are strong enough. You play it nice before Charizard gets angry',
        result: `
            Charizard felt you looked him in the eyes and decided to beat you up. you make it out, with 1 hp. You decide to go back to Pallet town
        `,
        hp: -50,
        gold: -100
    }]
};


const quests = [
    Charmander,
    Charmeleon,
    Charizard,
];

export default quests;