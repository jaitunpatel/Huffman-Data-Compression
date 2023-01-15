/*-------------------------------------------
    Name       : Jaitun Patel (7920394)
    Class      : Pair
    Purpose    : Holds the data with the key and value
---------------------------------------------*/

'use strict';

let Hashable = require('./Hashable.js');

class Pair {
    // fields (instance variables)
    #key;
    #value;

    //constructor
    constructor(newKey, newValue) {
        if (newKey instanceof Hashable){
            this.#key = newKey;
        }
        else{
            throw new Error("Something is wrong --> Key should be the tyoe of Hashable");
        }
        this.#value = newValue;
    }

    //get the key
    getKey() {
        return this.#key;
    }

    //get the value
    getValue() {
        return this.#value;
    }
}

module.exports = Pair;