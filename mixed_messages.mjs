import { greetings } from './data.mjs';
import { funFacts } from './data.mjs';
import { fancyAdjectives } from './data.mjs';

class randomMessage {
    constructor(name) {
        this._name = name;
        this._greeting = greetings;
        this._funFact = funFacts;
        this._fancyAdj = fancyAdjectives;
    }

    get name() {
        return this._name;
    }

    getRandProp(greetings) {
        const keys = Object.keys(greetings);

        return keys[Math.floor(Math.random() * keys.length)];
    }

    message() {
        let randLanguage = this.getRandProp(this._greeting);
        let randHello = greetings[randLanguage][0];
        let randGoodbye = greetings[randLanguage][1];
        let fact = this._funFact[Math.floor(Math.random() * this._funFact.length)];
        let adjective = this._fancyAdj[Math.floor(Math.random() * this._fancyAdj.length)];

        console.log(`${randHello}!!! Your greetings today will be in ${randLanguage}.\n 
            Fun Fact Time...\n
            ${fact}\n
            Have a ${adjective} day!!!\n
            ${randGoodbye}.`);
    }
}

const mess1 = new randomMessage('Jam');

mess1.message();