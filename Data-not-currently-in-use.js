// quests[0].choices[0].description; ==> 'negotiate with them'


const gambling = {
    id: 'gambling',
    title: 'Take a chance, gamble up',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
    description: `
        You realize that you dont have enough money to take several flights, the closest you will get is Greece. It seems a little too walk it out all the way to France. You get approach by a semi-shady person. What will you do?
    `,
    choices: [{
        id: 'texas',
        description: 'Play Texas Hold',
        result: `
            Your skills paid off, you took a scary path but played til you had to run for life. You only got 3 stabs after cashing out, you make it home safely. Congratulations, you make it home
        `,
        hp: -20,
        gold: 100000
    }, {
        id: 'nodice',
        description: 'You agree, but back down last minute',
        result: `
            Your lack of confidence has cost you greatly. You are free to go, but when you make it around the corner you realize you are in a dead-end alley. You dont make it out.
        `,
        hp: -1000,
        gold: 0
    }, {
        id: 'gambleless',
        description: 'Im okay, ill try to get there',
        result: `
        You steer completely clear of the offer, you try to make it work. You end up not having enough money to go home, your flight was misrouted to Romania, the airline could not help you because you did not buy insurance. Your phone was stolen, and you dont have your familys numbers memorize. You have no option but to settle in Bucharest, where you plane landed. You live happily ever after
        `,
        hp: -50,
        gold: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A HAIRY!!! Dragon',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You run to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'A Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters,
    treasure,
    dragon,
];

export default quests;