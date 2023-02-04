import { greetings } from './data.mjs';
import { funFacts } from './data.mjs';
import { fancyAdjectives } from './data.mjs';

class Morning {
    constructor(name) {
        this._name = name;
        this._greeting = greetings;
        this._funFact = funFacts;
        this._fancyAdj = fancyAdjectives;
    }

    get name() {
        return this._name;
    }

    message() {
        let randGreetingOpening = this._greeting[Math.floor(Math.random * this._greeting.length)][0];

    }
}

function getRandProp(greetings) {
    const keys = Object.keys(greetings);

    return  keys[Math.floor(Math.random() * keys.length)]
}

console.log(getRandProp(greetings));