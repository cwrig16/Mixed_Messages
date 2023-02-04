import greetings from './data.js'
import funFacts from './data.js'


class Morning {
    constructor(name) {
        this._name = name;
        this._greeting = greetings;
        this._funFact = funFacts;
        this._fancyAdj = [];
    }

    get name() {
        return this._name;
    }


}